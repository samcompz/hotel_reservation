import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GuestManagement from './GuestManagement';
import RoomManagement from './RoomManagement';
import Profile from "./Profile";


const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Image source={require('./assets/favicon.png')} style={styles.logo} />
                <Text style={styles.title}>Perfect Hotel</Text>
                <Text style={styles.headerButton}>Hotel Management System</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('GuestManagement')}>
                    <Text style={styles.searchButtonText}>Guest  Mngmt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Booking')}>
                    <Text style={styles.searchButtonText}>Booking Mgmnt </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('RoomManagement')}>
                    <Text style={styles.searchButtonText}>Room Mngnt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Gallery')}>
                    <Text style={styles.searchButtonText}>Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.searchButtonText}>My Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>@2023 Hotel Management System</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3cb043',
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
        marginTop: 5,
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
        marginBottom: 5,
        alignSelf: 'center',
        color: '#fff',
    },
    searchButton: {
        width: '60%',
        alignSelf: 'center',
        backgroundColor: '#f15454',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginBottom: 20,
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
    footerText: {
        fontSize: 16,
        textAlign: 'center',
    },
    footerLink: {
        fontSize: 15,
        textAlign: 'center',
    },
});

export default HomeScreen;