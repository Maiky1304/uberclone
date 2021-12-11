import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavorites from "../components/NavFavorites";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where From?"
        />

        <NavOptions />
        <NavFavorites
          callback={(location) => {
            fetch(
              `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address,name,geometry&input=${location}&inputtype=textquery&key=${GOOGLE_MAPS_APIKEY}`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                dispatch(
                  setOrigin({
                    location: data?.candidates[0]?.geometry?.location,
                    description: data?.candidates[0]?.formatted_address,
                  })
                );
                navigation.navigate("MapScreen");
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
