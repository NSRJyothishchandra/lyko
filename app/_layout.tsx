import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="components/SignInPage" options={{ title: 'Sign In' }} />
      <Stack.Screen name="components/CreateAccount" options={{ title: 'Create Account' }} />
      <Stack.Screen name="components/DriverSignUp" options={{ title: 'Driver Sign-Up' }} />
      <Stack.Screen name="components/EnterOtp" options={{ title: 'Enter OTP' }} />
      <Stack.Screen name="components/DriverRegistration" options={{ title: 'Driver Registration' }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="components/RideBooking" options={{title: 'RideBooking'}} />
     
    </Stack>
  );
}
