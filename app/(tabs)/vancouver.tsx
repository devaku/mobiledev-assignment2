import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Vancouver() {
    const openVancouverWebsite = () => {
        Linking.openURL('o	https://vancouver.ca/');
    };

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1 bg-white">
                <View className="p-4">
					<View className="w-full flex items-center justify-center mb-4">
						<Image 
							source={require('../../assets/ac04c7e8d1f31e1bcfc7db15f942ff71b194da6d-1920x1195.jpg')}
							style={{
								width: '100%',
								height: 224, 
								maxWidth: 500, 
							}}
							className="rounded-xl"
							resizeMode="cover"
						/>
					</View>

                    <TouchableOpacity 
                        onPress={openVancouverWebsite}
                        className="bg-blue-600 py-3 px-4 rounded-lg mt-4 items-center"
                    >
                        <Text className="text-white font-bold text-lg">Go to City Page</Text>
                    </TouchableOpacity>
                    
                    <View className="mt-6">
                        <Text className="text-2xl font-bold mb-2">Vancouver, Alberta</Text>
                        
                        
                        <View className="mb-4">
                            <Text className="text-lg font-semibold mb-1">About Vancouver</Text>
                            <Text className="text-gray-700 mb-2">
								Vancouver is one of our favourite cities and over the years we’ve 
								accumulated some fun facts that we thought we’d share with you. 
								One of the great things about Vancouver is its location, nestled between 
								the Pacific Ocean and the North Shore Mountains and surrounded by beautiful 
								islands and rainforest. Just perfect. And to just top up the fact fest about
								 its location, we can tell you that it sits on the Burrard Peninsula between
								  Burrard Inlet to the north and the Fraser River to the south, and just over
								   the Strait of Georgia to the west you’ll find Vancouver Island.
                            </Text>
                        </View>
                        
                        <View className="mb-4">
                            <Text className="text-lg font-semibold mb-1">Attractions</Text>
                            <Text className="text-gray-700">• Bloedel Conservatory</Text>
                            <Text className="text-gray-700">• Gardens at UBC & TreeWalk</Text>
                            <Text className="text-gray-700">• Vancouver Lookout</Text>
                            <Text className="text-gray-700">• The Vancouver Art Gallery</Text>
                            <Text className="text-gray-700">• VanDusen Botanical Garden</Text>
                            <Text className="text-gray-700">• Harbour Cruises</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}