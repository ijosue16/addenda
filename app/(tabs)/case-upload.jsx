import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/custom-input'
import { useForm } from 'react-hook-form';

const CaseUpload = () => {
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
    <SafeAreaView style={{paddingHorizontal:15,gap:10}}>
     <View className='gap-6 py-8'>
     <View className="flex flex-row justify-between gap-6">
        <CustomInput name="phoneNumber" control={control}
             placeholder={"Phone numberPhone number"}header='Phone number'/>
        </View>
        <View className='items-center'><Text className='font-medium'>Place of incident</Text></View>
        <View className="flex flex-row flex-wrap justify-between gap-6">
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

     </View>
    </SafeAreaView>
  )
}

export default CaseUpload