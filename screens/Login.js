import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";

import FormField from "../components/FormField";
import FormButton from "../components/FormButton";

const Login = () => {
  // fetching the navigation
  const navigation = useNavigation();

  //  react-hook-form init
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
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

  const loginUser = (data) => {
    console.log("Hello world");
  };

  // REGULAR EXPRESSION FOR THE EMAIL VALIDATION
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <StatusBar style="light" />
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text style={[styles.formHeader, { textAlign: "center" }]}>
            Welcome back
          </Text>
          <Text style={[styles.formHeader2, { textAlign: "center" }]}>
            Log into your account
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
            placeholder={"Password"}
            secondTitle={"Forgot password?"}
            secureTextEntry={true}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
          />
          <FormButton title={"Login"} onPressHandler={handleSubmit(loginUser)} />
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
            Not registered yet?&nbsp;
          </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={[styles.formText, { fontSize: 14 }]}>
              Sign up&nbsp;
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

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
