import { StyleSheet, Dimensions, ViewStyle, TextStyle } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Styles {
  [key: string]: any;
  container: ViewStyle;
  gradientBg: ViewStyle;
  neonGreen: string;
  darkGreen: string;
  lightGreen: string;
  whiteText: string;
  greenText: string;
  headerText: TextStyle;
  bodyText: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  micIcon: ViewStyle;
  chatBubbleUser: ViewStyle;
  chatBubbleAI: ViewStyle;
  chatText: TextStyle;
  userChatText: TextStyle;
  planCard: ViewStyle;
  planTitle: TextStyle;
  planPrice: TextStyle;
  featureText: TextStyle;
  toggle: ViewStyle;
  toggleOn: ViewStyle;
  toggleCircle: ViewStyle;
  trialButton: ViewStyle;
  trialText: TextStyle;
  footerText: TextStyle;
}

export const GlobalStyles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F0F',
  },
  gradientBg: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
  },
  neonGreen: '#00FF88',
  darkGreen: '#1A1F1F',
  lightGreen: '#00AA60',
  whiteText: '#FFFFFF',
  greenText: '#E0FFE0',
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    color: '#E0FFE0',
    textAlign: 'center',
    lineHeight: 22,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#00FF88',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#0A0F0F',
    fontWeight: 'bold',
    fontSize: 18,
  },
  micIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00FF88',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  chatBubbleUser: {
    alignSelf: 'flex-end',
    backgroundColor: '#00FF88',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 12,
    maxWidth: '70%',
    marginVertical: 5,
  },
  chatBubbleAI: {
    alignSelf: 'flex-start',
    backgroundColor: '#1A1F1F',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 12,
    maxWidth: '70%',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#00FF88',
  },
  chatText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  userChatText: {
    color: '#0A0F0F',
  },
  planCard: {
    backgroundColor: '#1A1F1F',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    width: '45%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00FF88',
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FF88',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#E0FFE0',
    textAlign: 'center',
    marginVertical: 2,
  },
  toggle: {
    width: 24,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 2,
    marginLeft: 10,
  },
  toggleOn: {
    alignItems: 'flex-end',
    backgroundColor: '#00FF88',
  },
  toggleCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  trialButton: {
    backgroundColor: '#00FF88',
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 20,
    alignSelf: 'center',
  },
  trialText: {
    color: '#0A0F0F',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
} as Styles);