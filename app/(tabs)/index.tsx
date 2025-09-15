import { Image } from 'expo-image';
import { StyleSheet, View, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import type { Href } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0d47a1', dark: '#0a1f33' }}
      headerImage={
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.headerLogo}
        />
      }>
      <ThemedView style={styles.heroContainer}>
        <ThemedText type="title">CoresConnect</ThemedText>
        <ThemedText>Building reliable, modern software for web and mobile.</ThemedText>
        <View style={styles.ctaRow}>
          <PrimaryButton title="Get a Quote" href="/contact" />
          <SecondaryButton title="Our Work" href="/portfolio" />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Explore</ThemedText>
        <ThemedText>Learn about what we do and how we can help you.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.linksGrid}>
        <NavLink title="About" href="/about" />
        <NavLink title="Services" href="/services" />
        <NavLink title="Portfolio" href="/portfolio" />
        <NavLink title="Pricing" href="/pricing" />
        <NavLink title="Careers" href="/careers" />
        <NavLink title="Support" href="/support" />
        <NavLink title="Contact" href="/contact" />
      </ThemedView>
    </ParallaxScrollView>
  );
}

function NavLink({ title, href }: { title: string; href: Href }) {
  return (
    <Link href={href} style={styles.linkCard}>
      <View>
        <ThemedText type="subtitle">{title}</ThemedText>
        <ThemedText>Learn more</ThemedText>
      </View>
    </Link>
  );
}

function PrimaryButton({ title, href }: { title: string; href: Href }) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.primaryButton}>
        <ThemedText style={styles.primaryButtonText}>{title}</ThemedText>
      </Pressable>
    </Link>
  );
}

function SecondaryButton({ title, href }: { title: string; href: Href }) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.secondaryButton}>
        <ThemedText style={styles.secondaryButtonText}>{title}</ThemedText>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    height: 140,
    width: 140,
    bottom: -10,
    left: 20,
    position: 'absolute',
  },
  heroContainer: {
    gap: 6,
    marginBottom: 16,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  section: {
    marginTop: 8,
    marginBottom: 8,
    gap: 4,
  },
  linksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  linkCard: {
    flexBasis: '48%',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#cccccc40',
  },
  primaryButton: {
    backgroundColor: '#0d47a1',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#0d47a1',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: '#0d47a1',
    fontWeight: '600',
  },
});
