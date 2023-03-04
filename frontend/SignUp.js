import react from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up Form</Text>
            <View style={styles.form}>
                <Text style={styles.text}>First Name</Text>
                <TextInput style={styles.input} placeholder="First Name" />
                <Text style={styles.text}>SurName Name</Text>
                <TextInput style={styles.input} placeholder="Sur Name" />
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder="********" />
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput style={styles.input} placeholder="********" />
                <TouchableOpacity style={styles.searchButton} onPress={() => { navigation.navigate('Home') }}>
                    <Text style={styles.buttonText} >Sign Up</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3cb043',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },
    text: {
        width: 200,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginleft: 0,
        textAlign: 'left',
    },
    input: {
        width: '80%',
        height: 35,
        padding: 10,
        borderWidth: 1,
        borderColor: '#c1c1c1',
        borderRadius: 5,
        fontSize: 16,
        fontFamily: 'Arial',
        color: '#000',
    },
    form: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchButton: {
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#f15454',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});