import { Tabs } from 'expo-router';
import { View, Text, Platform } from 'react-native';

export default function TabLayout() {
	/**
	 * I added this here because the tab drawer
	 * is too high in android. lol
	 */
	const customTabBarStyle = { height: 0, borderTopWidth: 2 };
	if (Platform.OS === 'ios') {
		customTabBarStyle.height = 50;
	} else if (Platform.OS === 'android') {
		customTabBarStyle.height = 10;
	} else if (Platform.OS === 'web') {
		customTabBarStyle.height = 50;
	} else {
		// you probably won't end up here unless you support another platform!
	}
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: 'blue',
				tabBarStyle: { position: 'absolute' },
			}}
		>
			<Tabs.Screen
				name="calgary"
				options={{
					title: 'Calgary',
					headerStyle: {backgroundColor: 'white', borderBottomWidth: 1 },
					headerTransparent: true
				}}
			/>
			{/* <Tabs.Screen
				name="index"
				options={{
					title: 'Group Profile',
					tabBarShowLabel: false,
					header: ({ navigation, route, options }) => {
						const title = options.title ? options.title : '';
						return <Header title={title}></Header>;
					},
					tabBarIcon: ({ focused, color, size }) => {
						// You can return any component that you like here!
						return <SvgHome></SvgHome>;
					},
				}}
			/> */}
			<Tabs.Screen
				name="vancouver"
				options={{
					title: 'Vancouver',
					headerStyle: {backgroundColor: 'white', borderBottomWidth: 1 },
					headerTransparent: true
				}}
			/>
		</Tabs>
	);
}
