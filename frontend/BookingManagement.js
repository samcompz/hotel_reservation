import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity, DatePickerIOS } from 'react-native';

export default function Booking() {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [selectedValue, setSelectedValue] = React.useState('')
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Customer Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName} />

        <Text style={styles.label}>Customer Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone} />

        <Text style={styles.label}>Customer Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail} />

        <Text style={styles.label}>Customer Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress} />
        
        <View>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Select a Service" value="Select a Service" />
            <Picker.Item label="Service 1" value="Service 1" />
            <Picker.Item label="Service 2" value="Service 2" />
            <Picker.Item label="Service 3" value="Service 3" />
          </Picker>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Select a Service" value="Select a Service" />
            <Picker.Item label="Service 1" value="Service 1" />
            <Picker.Item label="Service 2" value="Service 2" />
            <Picker.Item label="Service 3" value="Service 3" />
          </Picker>
        </View>
        <View>
          <DatePickerIOS 
            date={new Date()} 
            onDateChange={(date) => {}}
            mode="date"
          />
        </View>



      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3cb043',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },

  picker: {
     height: 40, 
     width: 150 
  },




})