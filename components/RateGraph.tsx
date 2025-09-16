import React from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Text } from 'react-native';
import { GlobalStyles } from '@/styles/GlobalStyles';

const data = [4.5, 4.8, 5.2, 4.9, 6.4];

const RateGraph: React.FC = () => {
  const { width } = Dimensions.get('window');

  return (
    <View style={{ alignItems: 'center', marginVertical: 10 }}>
      <LineChart
        data={{
          labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{ data }],
        }}
        width={width * 0.9}
        height={150}
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: '#000',
          backgroundGradientTo: '#000',
          decimalPlaces: 1,
          color: () => GlobalStyles.neonGreen,
          labelColor: () => '#888',
          propsForDots: { r: '4', strokeWidth: '2', stroke: '#000' },
        }}
        bezier
        style={{ borderRadius: 12 }}
      />
    </View>
  );
};

export default RateGraph;
