import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import React from "react";

export const ChatCard = ({ item }) => {
    return (
      <Pressable
        onPress={() => router.push(`/chats/${item}`)}
        className="flex flex-row items-center w-full gap-4 mb-2"
      >
        <View className="flex items-center justify-center w-12 h-12 rounded-full bg-[#c6b8b8]">
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
export const NotificationCard = ({ item,title,time,message }) => {
    return (
      <Pressable
        // onPress={() => router.push(`/chats/${item}`)}
        className="flex flex-row items-center w-full gap-4 mb-[12px]"
      >
        <View className="flex items-center justify-center w-12 h-12 rounded-full bg-[#c6b8b8]">
          <Text className="text-white">✉️</Text>
        </View>
        {/* <View className='w-full'> */}
        <View className="flex-1 space-y-0 text-start">
          <Text className="text-lg font-semibold">{title}</Text>
          <Text className="text-base text-slate-500">{message}</Text>
        </View>
        <Text className="">{time}</Text>
        {/* </View> */}
      </Pressable>
    );
  };
export const DetailsCard = ({ item }) => {
    return (
      <Pressable
        onPress={() => router.push(`/chats/${item}`)}
        className="flex flex-row items-center w-full gap-4 mb-2"
      >
        <View className="flex items-center justify-center w-12 h-12 rounded-full bg-[#c6b8b8]">
          <Text className="text-white">EN</Text>
        </View>
        {/* <View className='w-full'> */}
        <View className="flex-1 space-y-0 text-start">
          <Text className="text-lg font-semibold">Ethan</Text>
          <Text className="text-base text-slate-500">Hello bro could you send</Text>
        </View>
        {/* </View> */}
      </Pressable>
    );
  };

export const ProposalCard = ({ item,year }) => {
    return (
      <Pressable
        onPress={() => router.push(`/proposal/${item}`)}
        className="flex flex-row items-center w-full gap-4 pb-[9px] mb-2 border-b border-gray-300"
      >
        <View className="flex items-center justify-center rounded-full w-14 h-14 bg-[#c6b8b8]">
          <Text className="text-white">EN</Text>
        </View>
        {/* <View className='w-full'> */}
        <View className="flex-1 space-y-0 text-start">
          <Text className="text-lg font-semibold">Ethan</Text>
          <Text className="text-base text-slate-500">{`${year} years experience`}</Text>
        </View>
        <View className="flex justify-end">
        <Text className="text-base font-semibold">12h</Text>
        <Text className="text-base font-semibold">700000 RWF</Text>
        </View>
        {/* </View> */}
      </Pressable>
    );
  };
export const ProposalDetailCard = ({title,info }) => {
    return (
      <View className="w-full flex flex-row justify-between items-center border-b-[0.25px] border-slate-400 py-3 ">
      <View className="flex flex-row items-center justify-start flex-1 gap-4">
        <View className="flex items-center justify-center w-10 h-10 bg-[#c6b8b8] rounded-full">
         {/* icon */}
        </View>
        <View className='gap-0 '>
        <Text className="font-medium text-md ">{title}</Text>
        <Text className=''>{info}</Text>
        </View>
      </View>      
    </View>
    );
  };
  