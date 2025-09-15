import { StyleSheet, View, TextInput, Pressable, Alert } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { useState } from 'react';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function submit() {
    if (!name || !email || !message) {
      Alert.alert('Please fill out all fields.');
      return;
    }
    Alert.alert('Thanks!', 'We will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f3e5f5', dark: '#241a2b' }}
      headerImage={<View style={{ height: 0 }} />}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Contact</ThemedText>
        <ThemedText>Email: hello@coresconnect.com</ThemedText>
        <ThemedText>Phone: +1 (555) 010-0101</ThemedText>
        <View style={styles.form}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textarea]}
          />
          <Pressable onPress={submit} style={styles.submit}>
            <ThemedText style={styles.submitText}>Send</ThemedText>
          </Pressable>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  form: {
    marginTop: 8,
    gap: 10,
  },
  input: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cccccc40',
    backgroundColor: 'transparent',
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submit: {
    backgroundColor: '#0d47a1',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});


