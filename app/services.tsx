import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ServicesScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#fff3e0', dark: '#261b0f' }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Services</ThemedText>
        <View style={styles.cardGrid}>
          <ServiceCard title="Product Design" desc="Discovery, UX research, and prototyping." />
          <ServiceCard title="Web Development" desc="React, Next.js, and robust APIs." />
          <ServiceCard title="Mobile Apps" desc="High-quality iOS and Android apps." />
          <ServiceCard title="Cloud & DevOps" desc="CI/CD, infrastructure, and scalability." />
          <ServiceCard title="Support" desc="Monitoring, updates, and enhancements." />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <View style={styles.card}>
      <ThemedText type="subtitle">{title}</ThemedText>
      <ThemedText>{desc}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  card: {
    flexBasis: '48%',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#cccccc40',
  },
});


