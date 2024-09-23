import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import BagSvg from '../../assets/svgs/bagSvg'
import CaseHammerSvg from '../../assets/svgs/case-hammerSvg'
import MoneySvg from '../../assets/svgs/moneySvg'
import { ProposalDetailCard } from '../../components/cards'
import ArchiveSvg from '../../assets/svgs/archiveSvg'
import LocationSvg from '../../assets/svgs/locationSvg'

const Profile = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={{paddingHorizontal:15,gap:10}}>
        {/* <View className='items-center'> */}
        {/* <View className="flex flex-row items-center justify-between w-full py-3 "> */}
      <View className="flex flex-row items-center justify-center flex-1 gap-4 py-6">
        <View className="flex items-center justify-center w-20 h-20 bg-[#c6b8b8] rounded-full">
         {/* icon */}
        </View>
        <View className='gap-1 '>
        <Text className="font-medium text-md ">Ethan</Text>
        <View className="flex flex-row gap-[6px]">
          <LocationSvg height={15} width={15}/>
        <Text className='text-md'>Kigali,Rwanda</Text>

        </View>
        </View>
      </View>      
    {/* </View> */}
        {/* </View> */}
        <View className='flex flex-row gap-3'>
          <View className='flex flex-col items-center justify-center p-2 bg-pink-100 rounded-md'>
            <BagSvg height={50} width={50}/>
            <Text>550000frw</Text>
            <Text>Total expenses</Text>
          </View>
          <View className='flex flex-col items-center justify-center p-2 bg-purple-200 rounded-md'>
            <MoneySvg height={50} width={50}/>

            <Text>550000frw</Text>
            <Text>Total remaining</Text>
          </View>
          <View className='flex flex-col items-center justify-center p-2 bg-green-200 rounded-md'>
            <CaseHammerSvg height={50} width={50}/>

            <Text></Text>
            <Text>Total cases solved</Text>
          </View>
        </View>

        <View className="flex flex-row items-center gap-4">
        <View className=" justify-center items-center rounded-full p-4 bg-[#c6b8b8]">
        <ArchiveSvg height={40} width={40}/>
        </View>
          <Text className='text-lg font-medium'>Recharge wallet</Text>
        </View>
        <View className='gap-4'>
          <Text className='text-xl font-medium'>Settings</Text>
          <ProposalDetailCard title={'Privacy'} info={'Manage your privacy settings'}/>
          <ProposalDetailCard title={'Policies'} info={'View our Policies'}/>
        </View>
        <Pressable className='items-center justify-center p-2 bg-blue-900 rounded-md'>
          <Text className="text-lg font-semibold text-white">Logout</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile