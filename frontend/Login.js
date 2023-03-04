import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native";
import {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigation();

    const handleLogin = () => {
        // if(!email || !password) {
        //     alert("Please enter your email and password");
        //     return;
        // }
        
        // TODO: Call an API to authenticate the user
        // For now, we'll simulate the login by setting a dummy token
        const token = '123456789';
        AsyncStorage.setItem('token', token)
        .then(() => {
            //Navigate to the home page
            navigator.navigate('Home');
        })
        .catch((error) => {
            console.log(error);
            Alert.alert('Login failed', 'Please try again');
        });
    };

    const handleSignUp = () => {
        navigator.navigate('SignUp');
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                label="Email"
                // value={email}
                placeholder="Enter your email"
                onchangeText={handleLogin}
                style={styles.input}
                autocapitalize="none"
            />
            <TextInput
                label="Password"
                // value={password}
                onchangeText={handleLogin}
                placeholder="Enter your password"
                secureTextEntry={true}
                style={styles.input}
            />
            <TouchableOpacity onPress= {handleLogin} >
                <Text style={{color: '#f15454', marginBottom: 20}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginBottom: 20}} onPress={handleSignUp}>
                <Text style={{color: '#f15454'}}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
       
            
        </View>
    )
};


export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3cb043',
    },
    title: {
        fontWeight:'bold',
        fontsize: 45,
        fontfamily:'sans-serif',
        marginBottom: 20,
    },
    input: {
        width: 300,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        height: 35,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#333',
        backgroundColor: '#f15454',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

