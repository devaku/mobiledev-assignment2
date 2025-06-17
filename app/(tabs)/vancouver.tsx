import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	Linking,
} from 'react-native';
import CustomImage from '../../components/CustomImage';
import CustomText from '../../components/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Vancouver() {
	const openVancouverWebsite = () => {
		Linking.openURL('https://vancouver.ca/');
	};

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="flex-1 bg-white">
				<View className="px-4 py-16 mt-10">
					<View className="w-full flex items-center justify-center mb-4">
						<CustomImage imageId={1}></CustomImage>
					</View>

					<TouchableOpacity
						onPress={openVancouverWebsite}
						className="bg-blue-600 py-3 px-4 rounded-lg mt-4 items-center"
					>
						<Text className="text-white font-bold text-lg">
							Go to City Page
						</Text>
					</TouchableOpacity>

					<View className="mt-6">
						<Text className="text-2xl font-bold mb-2">
							Vancouver, Alberta
						</Text>
						<CustomText
							title={'About Vancouver'}
							paragraph={
								'Vancouver is one of our favourite cities andover the years we’ve accumulated some fun factsthat we thought we’d share with you. One of thegreat things about Vancouver is its location,nestled between the Pacific Ocean and the NorthShore Mountains and surrounded by beautifulislands and rainforest. Just perfect. And tojust top up the fact fest about its location, wecan tell you that it sits on the BurrardPeninsula between Burrard Inlet to the north andthe Fraser River to the south, and just over theStrait of Georgia to the west you’ll findVancouver Island.'
							}
						></CustomText>

						<View className="mb-4">
							<Text className="text-lg font-semibold mb-1"></Text>
							<Text className="text-gray-700 mb-2"></Text>
						</View>

						<View className="mb-4">
							<Text className="text-lg font-semibold mb-1">
								Attractions
							</Text>
							<Text className="text-gray-700">
								• Bloedel Conservatory
							</Text>
							<Text className="text-gray-700">
								• Gardens at UBC & TreeWalk
							</Text>
							<Text className="text-gray-700">
								• Vancouver Lookout
							</Text>
							<Text className="text-gray-700">
								• The Vancouver Art Gallery
							</Text>
							<Text className="text-gray-700">
								• VanDusen Botanical Garden
							</Text>
							<Text className="text-gray-700">
								• Harbour Cruises
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
