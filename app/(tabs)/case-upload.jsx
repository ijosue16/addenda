import { View, Text,SafeAreaView, Pressable, KeyboardAvoidingView,ScrollView } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CustomInput from '../../components/custom-input'
import { useForm } from 'react-hook-form';
import UploadSvg from '../../assets/svgs/uploadSvg';

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
    <SafeAreaView style={{paddingHorizontal:15,gap:10,}}>
      <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={{}}>
     <View className='gap-3 py-8'>
     <View className="flex flex-row justify-between gap-2">
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
        
        <View className="gap-4">
        <CustomInput name="dateOfIncident" control={control}
             placeholder={"Date of incident"}header='date of incident'/>
        <CustomInput name="description" control={control}
             placeholder={"Description"}header='Description'/>
        </View>

        <View className="flex flex-row items-center justify-center gap-4">
        <Text>Upload doument</Text>
        <UploadSvg width={30} height={30}/>
        </View>

        <View className="flex flex-row items-start justify-between gap-3 px-4">
          <View className="flex-1 gap-2">
      <Text className='font-semibold'>Payment type</Text>
      {[{name:'Mobile Money',value:'mobileMoney'},{name:'Bank Transfer',value:'bankTransfer'},{name:'Cash',value:'cash'}].map((item,index)=>(
        <BouncyCheckbox
        key={item.value}
        size={25}
        style={{
          paddingVertical: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          //  borderBottomWidth:1,borderBottomColor:"#cbd5e1"
        }}
        fillColor="#021526"
        unFillColor="#e5e7eb"
        text={item.name}
        // isChecked={item.isChecked}
        iconStyle={{ borderColor: "#021526", borderRadius: 5,fillColor:'' }}
        innerIconStyle={{ borderWidth: 0, borderRadius: 5,color:'red' }}
        textContainerStyle={{ marginLeft: 13 }}
        // textStyle={{ textDecorationLine: "none", fontSize: 18, color: item.isChecked? 'black':'gray' }}
        onPress={() => { 
          // toggleOption(section.title, item.title);
          // console.log(`Section Title: ${section.title}, Option Title: ${item.title}`); 
        }}
        bouncinessIn={0}
        bouncinessOut={0}
      />
      ))}
          </View>
          <View className="flex-1 gap-2">
      <Text className='font-semibold'>Amount</Text>
   <Text className='p-2 bg-purple-200 w-fit'>700000 RWF</Text>
          </View>
        </View>
        <View className='items-center'>
          <Pressable className="p-2 px-4 bg-blue-900">
          <Text className='text-3xl font-bold text-white'>Upload</Text>
          </Pressable>
        </View>
        

     </View>
     </ScrollView>
     </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default CaseUpload