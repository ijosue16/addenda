import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        contentStyle:{
          backgroundColor: '#d1c2c2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="login" options={{headerShown:false}} />
      <Stack.Screen name="signup" options={{headerShown:false}} />

      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
}
