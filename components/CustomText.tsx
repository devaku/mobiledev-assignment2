import { View, Text } from 'react-native';
export default function CustomText({
	title,
	paragraph,
}: {
	title: string;
	paragraph: string;
}) {
	return (
		<View className="mb-4">
			<Text className="text-lg font-semibold mb-1">{title}</Text>
			<Text className="text-gray-700 mb-2">{paragraph}</Text>
		</View>
	);
}
