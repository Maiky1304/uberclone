import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const RideConfirmedScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-grow justify-center items-center`}>
      <View style={tw`flex-row items-center justify-between w-64`}>
        <Icon name="checkcircle" type="antdesign" color="green" size={64} />
        <Text style={tw`font-semibold text-2xl`}>Ride confirmed!</Text>
      </View>
      <View style={tw`mt-10 flex-row`}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={tw`py-2 px-3 w-48 rounded-full bg-black`}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>
            Go back
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideConfirmedScreen;

const styles = StyleSheet.create({});
