import React from "react";
import { View, Text, Button } from "react-native";

import { IStackScreenProps } from "../navigation/StackScreenProps";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button title="Test" onPress={() => navigation.navigate("AddTask")}/>
    </View>
  );
};

export default HomeScreen;
