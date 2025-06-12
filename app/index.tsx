import { TextInput, Text, View, TouchableHighlight } from 'react-native';
import '../global.css';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import credentials from '../assets/credentials.json';

export default function App() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	function handleUsernameChange(e: any) {
		setUsername(e);
	}

	function handlePasswordChange(e: any) {
		setPassword(e);
	}

	function validateCredentials() {
		let usernames = credentials.users.reduce(
			(gainer: string[], current) => {
				gainer.push(current.username);
				return gainer;
			},
			[]
		);

		if (!usernames.includes(username)) {
			alert('Username does not exist!');
			return false;
		}

		let passwords = credentials.users.reduce(
			(gainer: string[], current) => {
				gainer.push(current.password);
				return gainer;
			},
			[]
		);
		if (!passwords.includes(password)) {
			alert('Password does not exist!');
			return false;
		}

		return true;
	}

	function handleLogin(e: any) {
		// Check if username is 5 characters long
		let regex = /^.{5,}$/;
		const usernameCheck = regex.test(username);
		if (!usernameCheck) {
			alert('Username is not long enough!');
			setUsername('');
			return;
		}

		regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
		const passwordCheck = regex.test(password);
		if (!passwordCheck) {
			alert(
				'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
			);
			setPassword('');
			return;
		}

		if (validateCredentials()) {
			alert('Credentials are valid!');
			router.push('/calgary');
		}
	}
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View className="h-screen flex flex-col items-center justify-center gap-4">
					<View className="absolute w-full">
						<View className="relative bottom-32 bg-black w-full p-4">
							<Text className="text-lg font-semibold text-center text-white select-none">
								LOGIN PAGE
							</Text>
						</View>
					</View>
					{/* LOGIN FORM */}
					<View className="flex flex-col items-center justify-center gap-3">
						<View className="flex flex-row">
							<Text className="w-20">Username: </Text>
							<TextInput
								className="flex-grow border-2 border-gray-300"
								onChangeText={handleUsernameChange}
								placeholder="Enter Username"
							></TextInput>
						</View>
						<View className="flex flex-row">
							<Text className="w-20">Password: </Text>
							<TextInput
								className="flex-grow border-2 border-gray-300"
								onChangeText={handlePasswordChange}
								placeholder="Enter Password"
							></TextInput>
						</View>
						<View className="flex flex-row">
							<TouchableHighlight onPress={handleLogin}>
								<View className="w-20 bg-sky-500 rounded p-2 active:bg-sky-900">
									<Text className="text-center text-white font-semibold select-none">
										Login
									</Text>
								</View>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
