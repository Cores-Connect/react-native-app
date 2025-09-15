import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function PortfolioScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#e1f5fe', dark: '#0f1d26' }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Portfolio</ThemedText>
        <ThemedText>Selected work across fintech, health, and e‑commerce.</ThemedText>
        <View style={styles.cardGrid}>
          <ProjectCard title="Fintech Wallet" desc="Payments, KYC, and analytics." />
          <ProjectCard title="Health Tracker" desc="HIPAA-compliant mobile app." />
          <ProjectCard title="Shop Platform" desc="Scalable storefront and admin." />
          <ProjectCard title="SaaS Analytics" desc="Dashboards and event pipeline." />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

function ProjectCard({ title, desc }: { title: string; desc: string }) {
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


