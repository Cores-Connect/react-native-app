import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useAuth } from './_layout';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showToast = (msg: string) => Alert.alert('Login', msg);

  const onSubmit = () => {
    if (email === 'test@gmail.com' && password === 'test') {
      login(email);
      router.replace('/(tabs)/voice' as any);
    } else {
      showToast('Invalid credentials. Use test@gmail.com / test');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Image source={require('@/assets/images/morty.jpg')} style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 24 }} />
      <Text style={{ color: '#9BA0A6', fontSize: 14, marginBottom: 6 }}>Welcome back</Text>
      <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 20 }}>Sign in to continue</Text>
      <View style={{ width: '100%', gap: 12 }}>
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="#8AA099" style={{ backgroundColor: '#0f1413', color: '#E0FFE0', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, borderWidth: 1, borderColor: '#1a5b3f' }} />
        <TextInput value={password} onChangeText={setPassword} placeholder="Password" placeholderTextColor="#8AA099" secureTextEntry style={{ backgroundColor: '#0f1413', color: '#E0FFE0', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, borderWidth: 1, borderColor: '#1a5b3f' }} />
        <TouchableOpacity onPress={onSubmit} activeOpacity={0.9}>
          <LinearGradient colors={["#00FF88", "#F5FF7A"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginTop: 8 }}>
            <Text style={{ color: '#0A0F0F', fontWeight: '700' }}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{ color: '#8AA099', textAlign: 'center', marginTop: 10 }}>Use test@gmail.com / test</Text>
      </View>
    </View>
  );
}


