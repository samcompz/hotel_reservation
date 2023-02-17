import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
            label="Email"
            value={email}
            onChange={this.handleEmailChange}
            style={styles.input}
            />
            <TextInput
                label="Password"
                value={password}
                onchange={this.handlePasswordChange}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button style={styles.button} title="Login" onPress={handleLogin}>Login</Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight:'bold',
        fontsize: 20,
        marginBottom: 20,
    },
    input: {
        width: 300,
        marginBottom: 20,
    },
    button: {
        width: 300,
    },
});

export default LoginScreen;