import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
  BackHandler,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';


const { width } = Dimensions.get('window');

interface Props {}

const VoiceScreen: React.FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const textOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // text fade animation for "Listening..."
    Animated.loop(
      Animated.sequence([
        Animated.timing(textOpacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [textOpacity]);

  const goToChat = () => {
    router.push('/(tabs)/chat');
  };

  const confirmExit = () => {
    Alert.alert('Exit', 'Are you sure you want to exit?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Exit', style: 'destructive', onPress: () => BackHandler.exitApp() },
    ]);
  };

  return (
    <View
      style={[
        GlobalStyles.container,
        { paddingTop: insets.top, backgroundColor: '#000' },
      ]}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
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
        <Text style={[GlobalStyles.headerText, { color: '#FFF' }]}>
          Voice Assessment
        </Text>
        <TouchableOpacity
          onPress={() => Alert.alert('User', 'test user logged in', [
            { text: 'Logout', onPress: () => router.replace('/login') },
            { text: 'Close', style: 'cancel' },
          ])}
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
          <Ionicons name="ellipsis-vertical" size={18} color="#A0A7AD" />
        </TouchableOpacity>
      </View>

      {/* Status text */}
      <Animated.Text
        style={[
          GlobalStyles.bodyText,
          {
            marginTop: 16,
            color: '#FFF',
            textAlign: 'center',
            opacity: textOpacity,
          },
        ]}
      >
        Listening...
      </Animated.Text>

      {/* Decorative top image */}
      <View style={{ marginTop: 33, alignItems: 'center' }}>
        <Image
          source={require('@/assets/images/icons/sad-removebg-preview.png')}
          style={{ width: 540, height: 260, resizeMode: 'contain' }}
        />
      </View>

      {/* Description text with fade bottom */}
      <View style={{ marginTop: 10, paddingHorizontal: 20, position: 'relative' }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            lineHeight: 26,
            color: '#CCC',
          }}
        >
          Use your voice to let AI instantly assess mortgage readiness,
          score, and approval chances.
        </Text>

        {/* Static bottom fade */}
        <LinearGradient
          colors={['transparent', '#000']} // match screen bg
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 40, // fade size
          }}
        />
      </View>

      {/* Bottom row with 3 options */}
      <View
        style={{
          position: 'absolute',
          bottom: 7,
          left: 0,
          right: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* Left - Message */}
        <TouchableOpacity onPress={goToChat} activeOpacity={0.8}>
          <Image
            source={require('@/assets/images/icons/message.jpg')}
            style={{ width: 80, height: 80, top: 40, resizeMode: 'contain' }}
          />
        </TouchableOpacity>

        {/* Center - Circle2 */}
        <TouchableOpacity onPress={goToChat} activeOpacity={0.8}>
          <Image
            source={require('@/assets/images/icons/circle2.jpg')}
            style={{ width: 180, height: 180, resizeMode: 'contain' }}
          />
        </TouchableOpacity>

        {/* Right - Circle3 (Exit) */}
        <TouchableOpacity onPress={confirmExit} activeOpacity={0.8}>
          <Image
            source={require('@/assets/images/icons/circle3.jpg')}
            style={{ width: 80, height: 80, top: 40, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoiceScreen;
