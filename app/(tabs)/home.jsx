
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <SafeAreaView style={{paddingVertical: 30}}>

            <View className="flex items-center justify-center">
                <Text className="text-2xl font-semibold">Addenda</Text>
            </View>
            <ScrollView contentContainerStyle={{paddingVertical: 10, gap: 25}}>
                <View className='bg-purple-300 w-full h-[250px]'>
                    <Image source={require('../../assets/blackperson.png')} style={{flex: 1, width: '100%', height: '100%', alignSelf: 'center'}} />
                    {/*<Text>Placeholder</Text>*/}
                </View>
                <View className='bg-purple-300 w-full h-[250px]'>
                    <Image source={require('../../assets/main.png')} style={{flex: 1,width: '100%', height: '100%', alignSelf: 'center'}} />
                    {/*<Text>Placeholder</Text>*/}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home