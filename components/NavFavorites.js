import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "1 Random Street, Etobicoke, ON, Canada",
  },
  {
    id: "2",
    icon: "school",
    location: "School",
    destination:
      "Rosethorn Junior School, Remington Drive, Etobicoke, ON, Canada",
  },
];

const NavFavorites = ({ callback }) => {
  console.log(callback);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 `, { height: 0.5 }]} />
      )}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity
          onPress={() => callback(destination)}
          style={tw`flex-row items-center p-5`}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
