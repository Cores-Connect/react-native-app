import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '@/styles/GlobalStyles';

interface Props {
  text: string;
  isUser: boolean;
}

const ChatBubble: React.FC<Props> = ({ text, isUser }) => (
  <View style={isUser ? GlobalStyles.chatBubbleUser : GlobalStyles.chatBubbleAI}>
    <Text style={[GlobalStyles.chatText, isUser && GlobalStyles.userChatText]}>{text}</Text>
  </View>
);

export default ChatBubble;