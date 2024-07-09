import { Stack } from 'expo-router';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { firebaseConfig } from './config/config';
import {initializeApp} from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { AuthContext } from '@/contexts/AuthContext';


export default function RootLayout() {

  // initialize firebase
  const FBapp = initializeApp(firebaseConfig)

  // initalize firebase auth
  const FBauth = getAuth( FBapp )

  return (
    <AuthContext.Provider value={FBauth}>
    <SafeAreaView style={styles.container}>
      <Stack screenOptions={{headerShown: false}}/>
    </SafeAreaView>
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: StatusBar.currentHeight,
  }
})
