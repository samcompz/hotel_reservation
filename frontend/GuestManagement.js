import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
// import { getGuests } from '../api';

const GuestManagement = () => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        // Fetch the list of guests when the component mounts
        fetchGuests();
    }, []);

    const fetchGuests = async () => {
        try {
            const response = await getGuests();
            setGuests(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.roomNumber}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={guests}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
            <FAB
                icon="plus"
                onPress={() => console.log('Add Guest')}
                style={styles.fab}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        padding: 10,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default GuestManagement;
