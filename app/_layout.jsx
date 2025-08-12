// app/_layout.tsx
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native-web';
import { FitnessContext } from '../Context';
export default function Layout() {

     const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [loading, setLoading] = useState(false); // simulate loading if needed

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" style="light" />
     <FitnessContext>
         <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Welcome To GYMIT ',
          }}
        />
        <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
      
    </FitnessContext>
    </SafeAreaProvider>
  );
}
