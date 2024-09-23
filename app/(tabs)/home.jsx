
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <SafeAreaView style={{paddingVertical: 30,flex:1}}>

            <View className="flex items-center justify-center">
                <Text className="text-2xl font-semibold">Addenda</Text>
            </View>
            <ScrollView contentContainerStyle={{paddingVertical: 10,}}>
                <View className='gap-6'>
                <View className='gap-4 px-6 '>
                    <Image resizeMode='cover' source={require('../../assets/blackperson.png')} style={{ width: '100%',}} />
                    {/*<Text>Placeholder</Text>*/}
                    <Text className='items-center text-2xl font-bold text-blue-600 '>Take a Stand, Make a Difference, Report your case</Text>
                </View>
                <View className='gap-4 px-6'>
                    <Image resizeMode='cover' source={require('../../assets/main.png')} style={{ width: '100%', }} />
                    {/*<Text>Placeholder</Text>*/}
                    <Text className='items-center text-2xl font-bold text-blue-600'>Take a Stand, Make a Difference, Report your case</Text>
                </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home