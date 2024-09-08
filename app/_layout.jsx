import { Stack } from 'expo-router';
import "../global.css";
import { View } from 'react-native-web';

export default function RootLayout() {
  return (
      <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C5705D',
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
      <Stack.Screen name="(tabs)/(notifications)" options={{headerShown:false}} />
      <Stack.Screen name="chats/[chatId]" options={{headerShown:false}} />
    </Stack>
  );
}
