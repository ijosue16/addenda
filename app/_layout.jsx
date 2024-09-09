import { Stack } from 'expo-router';
import "../global.css";
import { View } from 'react-native-web';
import LeftArrowSvg from '../assets/svgs/left-arrow';

export default function RootLayout() {
  return (
      <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d1c2c2',
        },
        contentStyle:{
          backgroundColor: '#d1c2c2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(splash)" options={{headerShown:false}} />
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
      {/* <Stack.Screen name="(notifications)" options={{headerShown:false}} /> */}
      <Stack.Screen name="chats/[chatId]" options={{headerShown:false}} />
      <Stack.Screen name="proposal/[id]" options={{headerShown:true,title:'Proposal Details',headerLeft:()=>{<LeftArrowSvg width={20} height={20}/>}}} />
    </Stack>
  );
}
