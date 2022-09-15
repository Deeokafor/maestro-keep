import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";

import FormField from "../components/FormField";
import FormButton from "../components/FormButton";

const generate = require('meaningful-string');

const SignUp = () => {
  const [showGenPassword, setShowGenPassword] = useState(false);
  const [randomPassword, setRandomPassword] = useState("");

  // fetching the navigation
  const navigation = useNavigation();

  //  react-hook-form init
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  let [fontsLoaded] = useFonts({
    "fira-bold": require("../assets/fonts/FiraMono-Bold.ttf"),
    "fira-regular": require("../assets/fonts/FiraMono-Regular.ttf"),
    "fira-medium": require("../assets/fonts/FiraMono-Medium.ttf"),
  });

  // load fonts
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // watch for the password
  const pwd = watch("password");

  // REGULAR EXPRESSION FOR THE EMAIL VALIDATION
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // sign up user
  const signUpUser = (data) => {
    console.log("Hello world");
  };

  // generate random passwords
  const generateRandomPassword = () => {
    // "worklet";
    setShowGenPassword(!showGenPassword);
    var options = {
      "min":8,
      "max":12,
      "smallWithNumbers":true
    }
    const randomsPwd = generate.random(options)
    setRandomPassword(randomsPwd)
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <StatusBar style="light" />
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text style={[styles.formHeader, { textAlign: "center" }]}>
            Hello
          </Text>
          <Text style={[styles.formHeader2, { textAlign: "center" }]}>
            Create your account
          </Text>
        </View>

        {/* housing the form */}
        <View style={styles.form}>
          <FormField
            name={"email"}
            control={control}
            formTitle={"Email"}
            placeholder={"Enter your email"}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
          <FormField
            name={"password"}
            control={control}
            formTitle={"Password"}
            secondTitle={"Generate password?"}
            placeholder={"Password"}
            secureTextEntry={true}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
            onPressHandler={generateRandomPassword}
          />
          {/* show the random password for the user when the button is tapped on clicked on */}
          {showGenPassword && (
            <Text
              style={{ color: "#ccc", paddingTop: 10, fontFamily: "fira-bold" }}
            >
              Your generated password is:&nbsp;
              <Text
              selectable={true}
              selectionColor={"white"}
                style={{
                  color: "red",
                  paddingTop: 10,
                  fontFamily: "fira-bold",
                  fontSize: 20,
                }}
              >
                {randomPassword}
              </Text>
            </Text>
          )}

          <FormField
            name={"confirm_password"}
            control={control}
            formTitle={"Confirm Password"}
            placeholder={"Confirm your assword"}
            secureTextEntry={true}
            rules={{
              validate: (value) => value === pwd || "Password do not match",
            }}
          />
          <FormButton
            title={"Sign Up"}
            onPressHandler={handleSubmit(signUpUser)}
          />
        </View>

        {/* housing to navigation to signup page */}
        <View
          style={{
            flexDirection: "row",
            paddingTop: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[styles.formText, { opacity: 0.5 }]}>
            Already a member?&nbsp;
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.formText, { fontSize: 14 }]}>
              Log in&nbsp;
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#25212A",
    paddingHorizontal: 20,
  },
  formHeader: {
    fontFamily: "fira-medium",
    textTransform: "uppercase",
    opacity: 0.3,
    fontSize: 20,
    color: "#ccc",
  },
  formHeader2: {
    fontFamily: "fira-medium",
    color: "#ccc",
    fontSize: 18,
  },
  form: {
    marginTop: 18,
  },
  formText: {
    fontFamily: "fira-bold",
    color: "#ccc",
    marginBottom: 4,
  },
  button: {
    backgroundColor: "white",
  },
});
