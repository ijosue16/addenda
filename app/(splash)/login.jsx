import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/custom-input";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function formSubmit(data) {
    console.log(data);
    // router.push("/home");
  }
  return (
    <SafeAreaView style={{flex:1}}>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding">
      <View className="flex flex-row items-baseline w-full gap-12 px-8 ">
        <Text className="flex-1 mt-4 text-3xl text-center ">addenda</Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <View className="items-center self-end p-1 bg-blue-900">
            <Text className="text-lg text-white">register</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text className="text-lg text-center">Welcome back</Text>
    <Image resizeMode="contain"  source={require('../../assets/addenda-login.png')} style={{width:'100%',height:'50%',marginHorizontal:'20'}}/>
      <View className="flex flex-col flex-1 px-4 gap-y-4">
        <View className="flex flex-row justify-between gap-6">
          <CustomInput name="mobileNumber" control={control}
              placeholder={"Mobile number"}header='Email or Phone number'/>
        </View>
        <View className="flex flex-row justify-between gap-6">
          <CustomInput name="PassWord" control={control}
              placeholder={"Password"}header='Password'/>
        </View>
        <TouchableOpacity onPress={handleSubmit(formSubmit)}>
          <View className="items-center py-4 bg-blue-900">
            <Text className="text-2xl text-white">Login</Text>
          </View>
        </TouchableOpacity>
        <Text className='font-semibold text-center'>Forgot Pasword</Text>
        <Text className='font-semibold text-center'>Privacy policy</Text>
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
