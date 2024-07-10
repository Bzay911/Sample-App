import{View, Text, StyleSheet, Pressable} from 'react-native'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, useEffect } from 'react'
import {signOut} from '@firebase/auth'
import { router, useRouter } from 'expo-router'

export default function Home( props:any ){
const auth = useContext(AuthContext)

useEffect(()=>{
    if(auth){
        console.log(auth.currentUser)
    }
})
const SignOutUser = () => { 
    signOut(auth) 
    .then(() => {
        router.replace('/')
    })
    .catch((error) => {
        console.log(error.code, error.message)
    })
}
    return(
        <View>
            <Text>Home</Text>
            <Pressable onPress={() => SignOutUser()}>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    )
}