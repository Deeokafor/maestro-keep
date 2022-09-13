import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const FormField = ({
  formTitle,
  secondTitle,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.formText}>{formTitle}</Text>
        <Pressable>
          <Text style={[styles.formText, { opacity: 0.3 }]}>{secondTitle}</Text>
        </Pressable>
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FormField;

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
