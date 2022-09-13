import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const FormButton = ({ title }) => {
  return (
    <View>
      <Pressable
        style={[
          styles.input,
          {
            backgroundColor: "#7c00ff",
            marginTop: 18,
          },
        ]}
      >
        <Text style={[styles.formText, { fontSize: 18, textAlign: "center" }]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#ccc",
    marginBottom: 12,
  },
  formText: {
    fontFamily: "fira-bold",
    color: "#ccc",
    marginBottom: 4,
  },
});
