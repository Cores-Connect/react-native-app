import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="services" options={{ title: 'Services' }} />
        <Stack.Screen name="portfolio" options={{ title: 'Portfolio' }} />
        <Stack.Screen name="pricing" options={{ title: 'Pricing' }} />
        <Stack.Screen name="careers" options={{ title: 'Careers' }} />
        <Stack.Screen name="support" options={{ title: 'Support' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
