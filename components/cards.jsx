import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import React from "react";

export const ChatCard = ({ item }) => {
    return (
      <Pressable
        onPress={() => router.push(`/chats/${item}`)}
        className="flex flex-row items-center w-full gap-4 mb-2"
      >
        <View className="flex items-center justify-center rounded-full w-14 h-14 bg-slate-600">
          <Text className="text-white">EN</Text>
        </View>
        {/* <View className='w-full'> */}
        <View className="flex-1 space-y-0 text-start">
          <Text className="text-lg font-semibold">Ethan</Text>
          <Text className="text-base text-slate-500">Hello bro could you send</Text>
        </View>
        <Text className="">Now</Text>
        {/* </View> */}
      </Pressable>
    );
  };
  