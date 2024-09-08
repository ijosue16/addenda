import { View, Text, KeyboardAvoidingView,Button, Dimensions, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, {useCallback, useRef, useState} from 'react';
import {CameraView, CameraType, useCameraPermissions} from 'expo-camera';
import {router} from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

// import { TouchableOpacity } from "react-native-gesture-handler";
import { SectionsHeader } from "../../components/productsCard";
import AddSvg from "../../assets/icons/svgs/add";
import CloseSvg from "../../assets/icons/svgs/close";
import BottomSheetCustom from "../../components/bottomsheetmodals/custom-modal";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/customInput";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dropdown } from 'react-native-element-dropdown';


const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
const Sell = () => {
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const bottomSheetRef = useRef(null);
 const insets=useSafeAreaInsets();
 const [value, setValue] = useState(null);
 const [isFocus, setIsFocus] = useState(false);

  const [permission, requestPermission] = useCameraPermissions();
  const [scanned,setScanned] = useState(false);
  const [facing, setFacing] = useState('back');

  const [cameraView,setCameraView] = useState(false);
  const [Info,setInfo] = useState('');
  const [X,setX] = useState(width/4);
  const [Y,sety] = useState(height/4);
  const [boxWidth,setBoxWidth] = useState(width/2);
   const [boxHeight,setBoxHeight] = useState(height/4);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View/>;
// }

// if (!permission.granted) {
// // Camera permissions are not granted yet.
// return (
//   <View style={styles.container}>
//     <Text style={styles.message}>We need your permission to show the camera</Text>
//     <Button onPress={requestPermission} title="grant permission" />
    
//   </View>
// );
// }
// SWITCHING CAMERA FACING FROM SELFIE TO BACK CAMERA
function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
}
// const [value, setValue] = useState(null);
// const [isFocus, setIsFocus] = useState(false);


// RESETING FUNCTION
const reset = () => {
    setX(width / 4);
    sety(height / 4);
    setBoxHeight(width / 2);
    setBoxWidth(height / 4);
    setScanned(false);
    setCameraView(false);
}

// FUNCTION TO HANDLE BARCODE SCANNED EVENT
//     const handleBarCodeScanned = async ({bounds, type, data}) => {
//         try {
//             // const {size} = bounds;
//             setX(100);
//             sety(100);
//             setBoxWidth(100);
//             setBoxHeight(100);
//             reset();
//             bottomSheetRef.current?.present();
//             console.log(bounds);
//             setInfo(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
const handleBarCodeScanned = async ({bounds, type, data}) => {
   
        // const{origin,size}=bounds;
        // setX(100);
        // sety(100);
        // setBoxWidth(100);
        // setBoxHeight(100);
        // setScanned(true)
        await bottomSheetRef.current?.present();
        reset();
        console.log(bounds);
        // setInfo(data);

};

  return (
    <>
   { cameraView?(     <CameraView
     autofocus={true}
     style={styles.camera} facing={facing}
      barcodeScannerSettings={{barcodeTypes:['qr','aztec','code128','ean13','ean8']}}
      onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={{marginTop:insets.top}} className='w-full px-4'>
          <TouchableOpacity onPress={()=>reset()}>
          <CloseSvg width={20} height={20} fill="white" />
          </TouchableOpacity>
        </View>
        <View style={{position:"relative",top:Y,left:X,width:boxWidth,height:boxHeight,backgroundColor:"rgba(39, 54, 215, 0.3)",borderRadius:2,
  }}>
        <View style={[{position: 'absolute',width: 12,height:12,borderColor: '#00BFFF', borderRadius:2,},{top: -5,left: -5,borderTopWidth: 2,borderLeftWidth: 2}]} />
      <View style={[{position: 'absolute',width: 12,height:12,borderColor: '#00BFFF', borderRadius:2,}, {top: -5,right: -5,borderTopWidth: 2,borderRightWidth: 2}]} />
      <View style={[{position: 'absolute',width: 12,height:12,borderColor: '#00BFFF', borderRadius:2,}, {bottom: -5,left: -5,borderBottomWidth: 2,borderLeftWidth: 2}]} />
      <View style={[{position: 'absolute',width: 12,height:12,borderColor: '#00BFFF', borderRadius:2,},{bottom: -5,right: -5,borderBottomWidth: 2,borderRightWidth: 2}]} />
      
        </View>
        <View style={styles.barText}>
          <Text className='text-xl text-white'>fit the code in the box to scan.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          {scanned?<TouchableOpacity style={styles.button} onPress={()=>{
            setScanned(false);  
            router.back();
          }}>
            <Text style={styles.text}>Go back</Text>
          </TouchableOpacity>:null}
          {scanned?<TouchableOpacity style={styles.button} onPress={reset}>
            <Text style={styles.text}>Refresh</Text>
          </TouchableOpacity>:null}
        </View>
      </CameraView>):(<View className="p-4 space-y-4">

      {permission?.granted?<TouchableOpacity
        onPress={() => setCameraView(true)}
        className="flex flex-row items-center p-4 space-x-2 bg-red-400 rounded-lg w-fit"
      >
        <Text className="text-white">New</Text>
        <AddSvg width={20} height={20} fill="white" />
      </TouchableOpacity>:<TouchableOpacity
        onPress={requestPermission}
        className="flex flex-row items-center p-4 space-x-2 bg-red-400 rounded-lg w-fit"
      >
        <Text className="text-white">New</Text>
        <AddSvg width={20} height={20} fill="white" />
      </TouchableOpacity>}
      <View>
        <SectionsHeader text="Recent sells" />
        <View className="mt-3 space-y-3 ">
          <View className="flex flex-row items-center justify-between w-full p-2 space-x-4 rounded-md shadow-sm bg-zinc-100">
            <View className="p-2 bg-black rounded-full">
              <Text className="text-white">ZL</Text>
            </View>

            <View className="flex-1 ">
              <Text className="text-base">Name of order</Text>
              <Text className="text-base text-zinc-500">Done</Text>
            </View>
            <Text className="text-lg">4000000 RWF</Text>
          </View>
          <View className="flex flex-row items-center justify-between w-full p-2 space-x-4 rounded-md shadow-sm bg-zinc-100">
            <View className="p-2 bg-black rounded-full">
              <Text className="text-white">ZL</Text>
            </View>

            <View className="flex-1 ">
              <Text className="text-base">Name of order</Text>
              <Text className="text-base text-zinc-500">Done</Text>
            </View>
            <Text className="text-lg">4000000 RWF</Text>
          </View>
        </View>
      </View>
    </View>)}
    <BottomSheetCustom
        ref={bottomSheetRef}
        component={
          <View
            style={{ paddingHorizontal: 15,}}
            className="flex flex-col px-4 space-y-2"
          >
            <Text className='text-xl font-semibold '>Confirm</Text>
            <KeyboardAvoidingView behavior="padding" style={{gap:15 }}>
              <CustomInput name="ProductName" control={control} placeholder={"Product name"} />
              <CustomInput name="color" control={control} placeholder={"Color"} />
              <CustomInput name="size" control={control} placeholder={"Product size"} />
              <CustomInput name="Price" control={control} placeholder={"Price"} />
              <CustomInput name="UserName" control={control} placeholder={"Sellers name"} />
              <CustomInput name="Pin" password control={control} placeholder={"pin"} />

              <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={ 'Select item'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            console.log(item.label);
            setIsFocus(false);
          }}
        />

              <TouchableOpacity
                // onPress={handleSubmit(formSubmit)}
                className="items-center p-3 mb-2 bg-[#C7253E] rounded-2xl"
              >
                <Text className="text-lg font-medium text-white">Sell</Text>
              </TouchableOpacity>
              </KeyboardAvoidingView>
          </View>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // backgroundColor:'transparent',
      // justifyContent: 'center',
  },
  message: {
      textAlign: 'center',
      paddingBottom: 10,
  },
  camera: {
      flex: 1,
      position: 'relative',
  },
  buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
  },
  button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
  },
  text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
  },
  barText: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      paddingHorizontal: 50,
      textAlign: "center",
      bottom: width - 100,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

});

export default Sell;
