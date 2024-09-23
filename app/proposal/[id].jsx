import { View, Text, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React from 'react'
import AddSvg from '../../assets/svgs/add'
import { TouchableOpacity } from 'react-native'
import { ProposalDetailCard } from '../../components/cards'

const Proposal = () => {
  return (
    <SafeAreaView style={{paddingHorizontal:20,}}>
<ScrollView contentContainerStyle={{gap:30}}>
<View className="flex flex-row items-center justify-between w-full px-4 py-3 ">  
          <View className="flex flex-row items-center justify-start gap-4 ">
            <View className="flex items-center justify-center rounded-full w-14 h-14 bg-[#c6b8b8]">
              <Text className="text-white">EN</Text>
            </View>
            <View className='gap-0 '>
            <Text className="text-lg font-bold ">Ethan</Text>
            <Text className='text-slate-600'>Speciality:Criminal law</Text>
            </View>
          </View>
        
            <View className='px-2 py-1 border rounded-md'>
              <TouchableOpacity>
              <Text>View profile</Text>
              </TouchableOpacity>
            </View>
          
        </View>

        <View className='gap-2 px-4'>
          <Text className='text-xl font-medium'>Case details</Text>
          <ProposalDetailCard title={'Date'} info={'Novemeber 1, 2022'}/>
          <ProposalDetailCard title={'Accused'} info={'John doe'}/>
        </View>
        <View className='gap-2 px-4'>
          <Text className='text-xl font-medium'>Proposal details</Text>
          <ProposalDetailCard title={'Speciality'} info={'criminal law'}/>
          <ProposalDetailCard title={'Proposed Amount'} info={'$500'}/>
          <ProposalDetailCard title={'Payment type'} info={'By milestone'}/>
        </View>
        <View className='gap-2 px-4'>
          <Text className='text-xl font-medium'>Proposal description</Text>
          <View className="flex flex-row gap-2 pb-4 border-b border-slate-400">
            <View className="h-40 w-40 bg-[#c6b8b8]"></View>
            <View className="gap-2">
              <Text className='text-lg font-medium'>Cover letter</Text>
              <Text>John doe was found guilty of</Text>
            </View>
          </View>
        </View>
        <View className='flex flex-row items-center justify-around px-4'>

         <View className='bg-white border rounded-md'>
         <TouchableOpacity>
            <Text className='px-6 py-2'>Chat</Text>
          </TouchableOpacity>
         </View>
         <View className='bg-white border rounded-md'>
         <TouchableOpacity>
            <Text className='px-6 py-2'>Reject</Text>
          </TouchableOpacity>
         </View>
         <View className='bg-black border rounded-md'>
         <TouchableOpacity>
            <Text className='px-6 py-2 text-white'>Accept</Text>
          </TouchableOpacity>
         </View>

        </View>
</ScrollView>
    </SafeAreaView>
  )
}

export default Proposal