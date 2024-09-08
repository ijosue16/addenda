import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={{flex:1,paddingVertical:10}}>
        <View className="flex flex-row items-baseline w-full gap-12 px-8 ">
        <Text className='flex-1 mt-4 text-3xl text-center '>addenda</Text>
        <TouchableOpacity onPress={()=>router.push('/login')} >
        <View className='items-center self-end p-1 bg-blue-900'>
        <Text className='text-lg text-white'>Login</Text>
        </View>
    </TouchableOpacity>
        </View>
      
      <View className='flex flex-1 gap-y-12 w-[100%] py-4 px-8'>
    <View className='w- h-[250px] bg-purple-300'>
        <Text>1</Text>
    </View>
    <View className='w- h-[250px] bg-purple-300'>
        <Text>1</Text>
    </View>
    <TouchableOpacity onPress={()=>router.push('/signup')} >
        <View className='items-center justify-center p-4 bg-blue-900'>
        <Text className='text-lg text-white'>Get started</Text>
        </View>
        
    </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default index