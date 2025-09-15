import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function CareersScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#e8f5e9', dark: '#102415' }}
      headerImage={<View style={{ height: 0 }} />}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Careers</ThemedText>
        <ThemedText>We&apos;re hiring engineers, designers, and PMs. Join us!</ThemedText>
        <View style={styles.list}>
          <Job title="Senior React Native Engineer" location="Remote" />
          <Job title="Backend Engineer (Node/TS)" location="Remote" />
          <Job title="Product Designer" location="Remote / Hybrid" />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

function Job({ title, location }: { title: string; location: string }) {
  return (
    <View style={styles.job}>
      <ThemedText type="subtitle">{title}</ThemedText>
      <ThemedText>{location}</ThemedText>
      <Link href="/contact" style={styles.applyLink}>
        <ThemedText type="link">Apply</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  list: {
    gap: 12,
    marginTop: 8,
  },
  job: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#cccccc40',
  },
  applyLink: {
    marginTop: 8,
  },
});


