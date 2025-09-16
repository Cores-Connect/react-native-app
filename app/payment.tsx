import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function Payment() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const onPay = () => {
    if (!name || !number || !expiry || !cvc) {
      Alert.alert('Payment', 'Please complete all fields.');
      return;
    }
    Alert.alert('Success', 'Payment successful! Starting your free trial.', [
      { text: 'OK', onPress: () => router.replace('/(tabs)/voice' as any) },
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', textAlign: 'center', marginTop: 40 }}>Enter Card Details</Text>
      <View style={{ marginTop: 24, gap: 12 }}>
        <TextInput placeholder="Name on Card" placeholderTextColor="#8AA099" value={name} onChangeText={setName} style={{ backgroundColor: '#0f1413', color: '#E0FFE0', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, borderWidth: 1, borderColor: '#1a5b3f' }} />
        <TextInput placeholder="Card Number" keyboardType="number-pad" placeholderTextColor="#8AA099" value={number} onChangeText={setNumber} style={{ backgroundColor: '#0f1413', color: '#E0FFE0', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, borderWidth: 1, borderColor: '#1a5b3f' }} />
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <TextInput placeholder="MM/YY" placeholderTextColor="#8AA099" value={expiry} onChangeText={setExpiry} style={{ flex: 1, backgroundColor: '#0f1413', color: '#E0FFE0', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, borderWidth: 1, borderColor: '#1a5b3f' }} />
          <TextInput placeholder="CVC" placeholderTextColor="#8AA099" value={cvc} onChangeText={setCvc} style={{ flex: 1, backgroundColor: '#0f1413', color: '#E0FFE0', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, borderWidth: 1, borderColor: '#1a5b3f' }} />
        </View>
        <TouchableOpacity onPress={onPay} activeOpacity={0.9}>
          <LinearGradient colors={["#00FF88", "#F5FF7A"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginTop: 8 }}>
            <Text style={{ color: '#0A0F0F', fontWeight: '700' }}>Pay & Start Trial</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}


