import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
             <View style={styles.container}>
                <Image source={require('./assets/favicon.png')} style={styles.logo}/>
                <TouchableOpacity>
                    <Text style={styles.headerButton}>Sign in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Find Your Perfect Hotel</Text>
                <TouchableOpacity style={styles.searchButton} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.searchButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <TouchableOpacity style={styles.searchButton} onPress ={() => {navigation.navigate('SignUp')}}>
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50,
    },
    headerButton: {
        fontSize: 26,
        color: '#333',
        alignSelf: 'center',
    },
    banner: {
        height: 200,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    searchButton: {
        width: '60%',
        alignSelf: 'center',
        backgroundColor: '#f15454',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    searchButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        // color: '#fff',
    },
    footer: {
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 20,
        marginBottom: 20,
        alignContent: 'center',
    },
    footerText:{
        fontSize: 16,
        textAlign: 'center',
    },
    footerLink:{
        fontSize: 15,
        textAlign: 'center',
    },
});

export default HomeScreen;