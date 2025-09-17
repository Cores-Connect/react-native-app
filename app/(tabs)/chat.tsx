import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RateGraph from '@/components/RateGraph';

const { width } = Dimensions.get('window');

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  type?: 'text' | 'graph';
}

const ChatScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "What's the current mortgage rate?",
      sender: 'user',
    },
    {
      id: '2',
      text: "Here's a quick view of today's best rates 👇",
      sender: 'ai',
    },
    {
      id: '3',
      text: "Today's Rates",
      sender: 'ai',
      type: 'graph',
    },
    {
      id: '4',
      text: 'Which one is better for low monthly payments?',
      sender: 'user',
    },
    {
      id: '5',
      text: 'Lowest payments. Breakdown or apply now?',
      sender: 'ai',
    },
  ]);

  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <View
      style={[
        GlobalStyles.container,
        { paddingTop: insets.top, paddingBottom: 0 },
      ]}
    >
      {/* Background glow */}
      <LinearGradient
        colors={['#0A0F0F', '#1A1F1F']}
        style={GlobalStyles.gradientBg}
      />

      {/* Header bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 8,
        }}
      >
        {/* Back button */}
        <Link href={'/(tabs)/voice'} asChild>
          <TouchableOpacity
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: '#0e3a2b',
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: -3,
                bottom: -3,
                left: -3,
                right: -3,
                borderRadius: 21,
                borderWidth: 2,
                borderColor: '#00FF88',
              }}
            />
            <Ionicons name="chevron-back" size={20} color="#A0A7AD" />
          </TouchableOpacity>
        </Link>

        {/* Morty AI pill */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#0c1211',
              borderRadius: 18,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderWidth: 1,
              borderColor: '#1a5b3f',
            }}
          >
            <Image
              source={require('@/assets/images/morty.jpg')}
              style={{
                width: 24,
                height: 24,
                marginRight: 8,
                resizeMode: 'contain',
              }}
            />
            <Text style={{ color: '#E0FFE0', fontWeight: '600' }}>
              Morty AI
            </Text>
          </View>
        </View>

        {/* Menu */}
        <TouchableOpacity
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: '#0b0f0e',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#1a5b3f',
          }}
        >
          <Ionicons name="ellipsis-vertical" size={16} color="#A0A7AD" />
        </TouchableOpacity>
      </View>

      {/* Chat */}
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 12 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {messages.map((msg) =>
          msg.sender === 'user' ? (
            <View
              key={msg.id}
              style={{
                alignSelf: 'flex-end',
                maxWidth: '80%',
                marginTop: 12,
              }}
            >
              <LinearGradient
                colors={['#00FF88', '#FFD84D']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  paddingHorizontal: 18,
                  paddingVertical: 14,
                  borderRadius: 18,
                  minHeight: 50,
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#0A0F0F',
                    fontSize: 15,
                    fontWeight: '600',
                  }}
                >
                  {msg.text || ''}
                </Text>
              </LinearGradient>
            </View>
          ) : (
            <View
              key={msg.id}
              style={{ flexDirection: 'row', marginTop: 12 }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  overflow: 'hidden',
                  marginRight: 8,
                }}
              >
                <Image
                  source={require('@/assets/images/morty.jpg')}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>

              {msg.type === 'graph' ? (
                <View
                  style={{
                    backgroundColor: '#0f1413',
                    borderRadius: 16,
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#1a5b3f',
                    width: width * 0.75,
                    minHeight: 220,
                    overflow: 'hidden',
                  }}
                >
                  <Text style={{ color: '#9BA0A6', marginBottom: 8 }}>
                    {msg.text || ''}
                  </Text>
                  <View style={{ flex: 1, width: '100%', height: 180 }}>
                    <RateGraph />
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: '#121716',
                    borderRadius: 16,
                    paddingHorizontal: 14,
                    paddingVertical: 10,
                    maxWidth: '80%',
                    borderWidth: 1,
                    borderColor: '#1a5b3f',
                  }}
                >
                  <Text style={{ color: '#E0FFE0' }}>{msg.text || ''}</Text>
                </View>
              )}
            </View>
          )
        )}
      </ScrollView>

      {/* Input */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 14,
          borderTopWidth: 1,
          borderTopColor: '#1a5b3f',
          backgroundColor: '#0A0F0F',
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#0f1413',
            borderRadius: 26,
            borderWidth: 1,
            borderColor: '#1a5b3f',
            paddingHorizontal: 14,
            paddingVertical: 8,
          }}
        >
          <Ionicons name="attach" size={18} color="#8AA099" />
          <TextInput
            style={{
              flex: 1,
              color: '#E0FFE0',
              marginLeft: 8,
              fontSize: 15,
              paddingVertical: 6,
            }}
            placeholder="Ask anything..."
            placeholderTextColor="#8AA099"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <View
            style={{
              width: 34,
              height: 34,
              borderRadius: 17,
              backgroundColor: '#0b3a29',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 8,
              borderWidth: 1,
              borderColor: '#1f2a27',
            }}
          >
            <Ionicons name="mic" size={18} color="#00FF88" />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSend}
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00FF88',
          }}
        >
          <Ionicons name="send" size={22} color="#0A0F0F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
