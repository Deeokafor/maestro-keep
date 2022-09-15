import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const FormField = ({
  onPressHandler,
  formTitle,
  secondTitle,
  placeholder,
  secureTextEntry,
  name,
  control,
  rules = {},
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.formText}>{formTitle}</Text>
              <Pressable onPress={onPressHandler}>
                <Text style={[styles.formText, { opacity: 0.3 }]}>
                  {secondTitle}
                </Text>
              </Pressable>
            </View>
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch", fontSize: 12 }}>
              {error.message || "error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default FormField;

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#ccc",
  },
  formText: {
    marginTop: 12,
    fontFamily: "fira-bold",
    color: "#ccc",
    marginBottom: 4,
  },
});
