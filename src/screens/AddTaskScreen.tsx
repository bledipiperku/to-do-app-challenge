import React from "react";
import { View, Text } from "react-native";

import { IStackScreenProps } from "../navigation/StackScreenProps";

const AddTaskScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Add Task</Text>
    </View>
  );
}

export default AddTaskScreen