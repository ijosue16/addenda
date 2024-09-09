import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>

    <Text>Addenda</Text>
    <ScrollView contentContainerStyle={{paddingVertical:10,gap:25}} >
        <View className='bg-purple-300 w-full h-[250px]'>
            <Text>Placeholder</Text>
        </View>
        <View className='bg-purple-300 w-full h-[250px]'>
            <Text>Placeholder</Text>
        </View>
  </ScrollView>
      
    </SafeAreaView>
  )
}

export default Home