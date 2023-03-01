import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createBilling, chargeCard } from './api'; // Import the API functions for billing and payments

const BillingScreen = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const handlePayment = async () => {
        // Create a new billing record in the database
        const billingRecord = await createBilling(name, cardNumber, expiration, cvv, roomNumber);

        // Charge the user's credit card
        const chargeResult = await chargeCard(billingRecord.id, billingRecord.amount);

        // Show a success message to the user
        alert('Payment successful!');
    };

    return (
        <View>
            <Text>Name on Card:</Text>
            <TextInput value={name} onChangeText={setName} />

            <Text>Card Number:</Text>
            <TextInput value={cardNumber} onChangeText={setCardNumber} />

            <Text>Expiration Date:</Text>
            <TextInput value={expiration} onChangeText={setExpiration} />

            <Text>CVV:</Text>
            <TextInput value={cvv} onChangeText={setCvv} />

            <Text>Room Number:</Text>
            <TextInput value={roomNumber} onChangeText={setRoomNumber} />

            <Button title="Submit Payment" onPress={handlePayment} />
        </View>
    );
};

export default BillingScreen;
