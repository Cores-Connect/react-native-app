import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';

export default function SupportScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f1f8e9', dark: '#1a2312' }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Support</ThemedText>
        <ThemedText>Visit our help center or open a ticket for assistance.</ThemedText>
        <Collapsible title="How do I contact support?">
          <ThemedText>Use the Contact screen to send us a message.</ThemedText>
        </Collapsible>
        <Collapsible title="What is the SLA for Pro?">
          <ThemedText>Pro plan includes priority responses within 24 hours.</ThemedText>
        </Collapsible>
        <Collapsible title="Do you offer custom integrations?">
          <ThemedText>Yes, via our Enterprise plan. Reach out for details.</ThemedText>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});


