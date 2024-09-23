import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
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
      
      <View className='flex flex-1 gap-y-4 w-[100%] py-4 px-8'>
      <Image resizeMode="contain"  source={require('../../assets/addenda-splash.png')} style={{width:'100%',height:'50%',marginHorizontal:'20'}}/>

    <View className='w- h-[250px] gap-4'>
        <Text className='text-2xl font-semibold text-center text-green-700'>Get the Legal Help You Need, When You Need It</Text>
        <Text className='text-xl font-medium text-center text-blue-600'>Addenda connects you with qualified lawyers. </Text>
        <Text className='text-xl font-medium text-center text-blue-600'>Don’t let legal issues overwhelm you - Addenda is here to assist.
        Don't wait - every minute counts.</Text>
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