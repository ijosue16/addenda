import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import React from "react";
import { router } from "expo-router";
import CustomInput from "../../components/custom-input";
import { useForm } from "react-hook-form";


const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function formSubmit(data) {
    console.log(data);
    router.push("/home");
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
        <ScrollView contentContainerStyle={{paddingVertical:50}}>
        
      <View className="flex flex-row items-baseline w-full gap-12 px-8">
        <Text className="flex-1 mt-4 text-3xl text-center ">addenda</Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <View className="items-center self-end p-1 bg-blue-900">
            <Text className="text-lg text-white">Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text className="text-lg text-center">Welcome onboard</Text>
      <View className="px-4 gap-y-4">
        <View className="flex flex-row justify-between gap-6">
          {/* <View className="flex-1 py-4 bg-purple-400"></View>
          <View className="flex-1 py-4 bg-purple-400"></View> */}
          <CustomInput name="firstName" control={control}
              placeholder={"First name"}header='First name'/>
          <CustomInput name="SecondName" control={control}
             placeholder={"Second name"}header='Second name'/>
        </View>
        <View className="flex flex-row justify-between gap-6">
        <CustomInput name="phoneNumber" control={control}
             placeholder={"Phone numberPhone number"}header='Phone number'/>
        </View>
        <View className="flex flex-row flex-wrap justify-between w-[100%] gap-6">
          <View className="flex-1">
        <CustomInput name="Country" control={control}
             placeholder={"Country"}header='Country'/>
        </View>
          <View className="flex-1 ">
        <CustomInput name="Province" control={control}
             placeholder={"Province"}header='Province'/>
        </View>
        
          {/* <View className="py-4 bg-purple-400 w-[47%]"></View>
          <View className="w-[47%] py-4 bg-purple-400"></View>
          <View className="py-4 bg-purple-400 w-[47%]"></View> */}
        </View>
        {/*  */}
        <View className="flex flex-row flex-wrap justify-between w-[100%] gap-6">
          <View className="flex-1">
        <CustomInput name="District" control={control}
             placeholder={"District"}header='District'/>
        </View>
          <View className="flex-1">
        <CustomInput name="Sector" control={control}
             placeholder={"Sector"}header='Sector'/>
        </View>
        </View>
        {/*   */}
        <View className="flex flex-row flex-wrap justify-between w-[100%] gap-6">
          <View className="flex-1">
          <CustomInput name="Cell" control={control}
             placeholder={"Cell"}header='Cell'/>
        </View>
          <View className="flex-1">
          <CustomInput name="Village" control={control}
             placeholder={"Village"}header='Village'/>
        </View>
        </View>
        <View className="flex flex-row justify-between gap-6">
          <CustomInput name="Email" control={control}
             placeholder={"Email"}header='Email'/>
        </View>
        <View className="flex flex-row justify-between gap-6">
          <CustomInput name="Password" control={control}
             placeholder={"Password"}header='Password'/>
        </View>
        <View className="flex flex-row justify-between gap-6">
          <CustomInput name="confirmPassword" control={control}
             placeholder={"Confirm Password"}header='Confirm Password'/>
        </View>
        <TouchableOpacity onPress={handleSubmit(formSubmit)}>
          <View className="items-center py-4 bg-blue-900">
            <Text className="text-2xl text-white">Register</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
