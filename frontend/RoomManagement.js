import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
// import { getRooms } from '../api';

const RoomManagement = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Fetch the list of rooms when the component mounts
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const response = await getRooms();
            setRooms(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.roomNumber}</Text>
            <Text style={styles.subtitle}>{item.status}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={rooms}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
            <FAB
                icon="plus"
                onPress={() => console.log('Add Room')}
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

export default RoomManagement;
