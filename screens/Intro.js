import React from "react";
import { TouchableOpacity, View, Text } from "react-native";


const Intro = ({ navigation: { navigate } }) => {
  return(
    <View>
      <Text>HI I'm Int</Text>
      <TouchableOpacity onPress={()=>navigate("EquipList")}>
        <Text>
          Go to EquipList
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Intro;