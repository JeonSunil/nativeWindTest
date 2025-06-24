import 'nativewind';
console.log('NativeWind imported');
import { View, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-blue-500" style={{ color: 'red' }}>
          이 글씨는 빨강? 파랑?
        </Text>
      </View>
    </SafeAreaView>
  );
}