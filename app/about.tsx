import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#e3f2fd', dark: '#102027' }}
      headerImage={<View style={{ height: 0 }} />}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">About CoresConnect</ThemedText>
        <ThemedText>
          We build secure, scalable, and delightful applications for web and mobile.
        </ThemedText>
        <ThemedText type="subtitle">Our Mission</ThemedText>
        <ThemedText>
          Empower teams with reliable software that accelerates their business.
        </ThemedText>
        <ThemedText type="subtitle">Values</ThemedText>
        <ThemedText>Quality • Transparency • Ownership • Customer success</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});


