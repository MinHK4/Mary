import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const EquipList = ({ navigation: { navigate } }) => {
  return(
    <View>
      <Text>HI I'm EquipList</Text>
      <TouchableOpacity onPress={()=>navigate("EquipDetail")}>
        <Text>
          Go to EquipDetail
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigate("NewEquip")}>
        <Text>
          Go to NewEquip
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default EquipList;