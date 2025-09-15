import { StyleSheet, View, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function PricingScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#fff8e1', dark: '#2a2415' }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Pricing</ThemedText>
        <View style={styles.tiers}>
          <Tier title="Starter" price="$0/mo" features={["Basic support", "Public projects"]} cta="Get Started" />
          <Tier title="Pro" price="$49/mo" features={["Priority support", "Private projects", "Analytics"]} cta="Start Pro" featured />
          <Tier title="Enterprise" price="Custom" features={["SLA", "Security reviews", "Dedicated support"]} cta="Contact Sales" href="/contact" />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

function Tier({ title, price, features, cta, href, featured }: { title: string; price: string; features: string[]; cta: string; href?: string; featured?: boolean }) {
  const content = (
    <View style={[styles.tier, featured && styles.tierFeatured]}>
      <ThemedText type="subtitle">{title}</ThemedText>
      <ThemedText style={styles.price}>{price}</ThemedText>
      {features.map((f) => (
        <ThemedText key={f}>• {f}</ThemedText>
      ))}
      <Pressable style={[styles.tierButton, featured && styles.tierButtonFeatured]}>
        <ThemedText style={[styles.tierButtonText, featured && styles.tierButtonTextFeatured]}>{cta}</ThemedText>
      </Pressable>
    </View>
  );

  if (href) {
    return <Link href={href as any}>{content}</Link>;
  }
  return content;
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  tiers: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  tier: {
    flexBasis: '48%',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#cccccc40',
  },
  tierFeatured: {
    borderColor: '#0d47a1',
    borderWidth: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  tierButton: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#0d47a1',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  tierButtonFeatured: {
    backgroundColor: '#0d47a1',
  },
  tierButtonText: {
    color: '#0d47a1',
    fontWeight: '600',
    textAlign: 'center',
  },
  tierButtonTextFeatured: {
    color: '#ffffff',
  },
});


