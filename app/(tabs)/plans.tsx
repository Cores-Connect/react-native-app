import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';


const { width } = Dimensions.get('window');

interface Props { }

const PlansScreen: React.FC<Props> = () => {
    const insets = useSafeAreaInsets();
    const [isAnnual, setIsAnnual] = useState(false);

    const togglePlan = () => setIsAnnual(!isAnnual);

    const CustomSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: () => void }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onValueChange}
                style={{
                    width: 40,
                    height: 22,
                    borderRadius: 13,
                    backgroundColor: "#000",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#024117",
                }}
            >
                <View
                    style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor: value ? "#6ADC47" : "#888",
                        alignSelf: value ? "flex-end" : "flex-start",
                    }}
                />
            </TouchableOpacity>
        );
    };


    return (
        <View style={[GlobalStyles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            {/* Background */}
            <LinearGradient
                colors={["#0A0F0F", "#0A0F0F"]}
                style={GlobalStyles.gradientBg}
            />
            <LinearGradient
                colors={["rgba(0,255,136,0.25)", "rgba(0,0,0,0)", "rgba(0,255,136,0.25)", "rgba(0,0,0,0)"]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.8, y: 1 }}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260 }}
            />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Header */}
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 }}>
                    <Link href={"/(tabs)/chat"} asChild>
                        <TouchableOpacity
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: 18,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                borderWidth: 2,
                                borderColor: '#0c422e',
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -3,
                                    bottom: -3,
                                    left: -3,
                                    right: -3,
                                    borderRadius: 21,
                                    borderWidth: 2,
                                    borderColor: '#008F55', // darker green instead of #00FF88

                                }}
                            />
                            <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
                        </TouchableOpacity>
                    </Link>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={[GlobalStyles.headerText, { marginLeft: 0, color: "#FFFFFF" }]}>
                            Choose your plan
                        </Text>
                    </View>
                    <View style={{ width: 36 }} />
                </View>

                {/* Monthly Plan Card */}
                <View
                    style={{
                        marginHorizontal: 16,
                        marginTop: 12,
                        backgroundColor: '#111514',
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: '#145b3f',
                        overflow: 'hidden',
                    }}
                >
                    <LinearGradient
                        colors={[
                            "rgba(0,0,0,1)",        // full black at start (left bottom)
                            "rgba(48, 236, 19, 0.23)", // soft green in middle
                            "rgba(0,0,0,1)",        // full black at end (right top)
                        ]}
                        locations={[0, 0.5, 1]}  // green only in the center
                        start={{ x: 0, y: 1 }}   // left bottom
                        end={{ x: 1, y: 0 }}     // right top
                        style={{ padding: 16, borderRadius: 16 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[GlobalStyles.planTitle, { marginBottom: 0 }]}>Monthly Plan</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#E0FFE0', marginRight: 8 }}>Auto Pay</Text>
                                <CustomSwitch value={true} onValueChange={() => { }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                            <Text style={[GlobalStyles.planPrice, { color: '#FFFFFF' }]}>$1.19</Text>
                            <Text style={{ color: '#FFFFFF', marginLeft: 4 }}>/ Month</Text>
                        </View>

                        <View style={{ height: 1, backgroundColor: '#145b3f', marginVertical: 16 }} />

                        {/* Features */}
                        {[
                            'Track All Rates',
                            'Light & Dark Theme Widgets',
                            'Remove Ads',
                        ].map((f) => (
                            <View key={f} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: '#6ADC47', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                                    <View
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 10,
                                            backgroundColor: "#00FF88",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Ionicons name="checkmark" size={16} color="#000" />
                                    </View>
                                </View>
                                <Text style={{ color: '#E0FFE0' }}>{f}</Text>
                            </View>
                        ))}
                    </LinearGradient>
                </View>

                {/* Annual Plan Card */}
                <View
                    style={{
                        marginHorizontal: 16,
                        marginTop: 12,
                        backgroundColor: '#0e1312',
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: '#145b3f',
                        padding: 16,
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[GlobalStyles.planTitle, { marginBottom: 0 }]}>Annual Plan</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#E0FFE0', marginRight: 8 }}>Auto Pay</Text>
                            <CustomSwitch value={false} onValueChange={() => { }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Text style={[GlobalStyles.planPrice, { color: '#FFFFFF' }]}>$9.99</Text>
                        <Text style={{ color: '#FFFFFF', marginLeft: 4 }}>/ Annual</Text>
                    </View>

                    <View style={{ alignSelf: 'flex-start', backgroundColor: '#0b0f0e', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, marginTop: 10, borderWidth: 1, borderColor: '#1f2a27' }}>
                        <Text style={{ color: '#E0FFE0' }}>save 30%</Text>
                    </View>
                </View>

                {/* Spacer before CTA */}
                <View style={{ height: 54 }} />

                {/* CTA */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={{ marginHorizontal: 16 }}
                    onPress={() => router.push('/payment')}
                >
                    <LinearGradient
                        colors={["#FFFACD", "#00FF88"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                        style={{
                            borderRadius: 28,
                            paddingVertical: 16,
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: '#0A0F0F', fontWeight: 'bold', fontSize: 16 }}>
                            Start a 3-Day Free Trial
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>


                {/* Footer Links */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 16, marginTop: 1, marginBottom: insets.bottom + 10 }}>
                    <Text style={GlobalStyles.footerText}>Disclaimer</Text>
                    <Text style={GlobalStyles.footerText}>Privacy policy</Text>
                    <Text style={GlobalStyles.footerText}>Restore Purchase</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default PlansScreen;
