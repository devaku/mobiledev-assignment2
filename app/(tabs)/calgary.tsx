import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomImage from '../../components/CustomImage';
import CustomText from '../../components/CustomText';

export default function Calgary() {
	const openCalgaryWebsite = () => {
		Linking.openURL('https://www.calgary.ca/home.html');
	};

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="flex-1 bg-white">
				<View className="px-4 py-16 mt-10">
					<View className="w-full flex items-center justify-center mb-4">
						<CustomImage imageId={0}></CustomImage>
					</View>

					<TouchableOpacity
						onPress={openCalgaryWebsite}
						className="bg-blue-600 py-3 px-4 rounded-lg mt-4 items-center"
					>
						<Text className="text-white font-bold text-lg">
							Go to City Page
						</Text>
					</TouchableOpacity>

					<View className="mt-6">
						<Text className="text-2xl font-bold mb-2">
							Calgary, Alberta
						</Text>

						<CustomText
							title={'About Calgary'}
							paragraph={
								'Calgary is at the confluence of the Bow Riverand the Elbow River in the southwest of theprovince, in the transitional area between theRocky Mountain Foothills and the CanadianPrairies, about 80 km (50 mi) east of the frontranges of the Canadian Rockies, roughly 299 km(186 mi) south of the provincial capital ofEdmonton and approximately 240 km (150 mi) northof the Canada–United States border. The cityanchors the south end of the StatisticsCanada-defined urban area, the Calgary–EdmontonCorridor.'
							}
						></CustomText>

						<View className="mb-4">
							<Text className="text-lg font-semibold mb-1">
								Attractions
							</Text>
							<Text className="text-gray-700">
								• Calgary Tower
							</Text>
							<Text className="text-gray-700">
								• Calgary Stampede
							</Text>
							<Text className="text-gray-700">
								• Heritage Park
							</Text>
							<Text className="text-gray-700">
								• Glenbow Museum
							</Text>
							<Text className="text-gray-700">
								• Prince's Island Park
							</Text>
							<Text className="text-gray-700">• Calgary Zoo</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
