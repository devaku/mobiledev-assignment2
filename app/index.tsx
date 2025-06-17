import { TextInput, Text, View, Pressable } from 'react-native';
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
				<View
					className={`flex justify-center lg:items-center h-full bg-white lg:m-10`}
				>
					{/* Login Form Container with responsive width */}
					<View
						className={
							'lg:w-[500px] lg:bg-gray-50 lg:p-8 lg:rounded-2xl lg:shadow-lg w-full'
						}
					>
						{/* TITLE SECTION */}
						<View className="flex flex-col mb-10">
							<Text
								className={`w-full text-center font-semibold text-2xl lg:text-3xl`}
							>
								Welcome!
							</Text>
							<Text className="w-full text-center text-gray-500 mt-3">
								Please enter login information below.
							</Text>
						</View>

						{/* FORM FIELDS */}
						<View className="flex items-center gap-3">
							<View className="flex flex-row items-center">
								<TextInput
									className={`bg-gray-200 rounded-xl h-12 w-[75%] lg:w-max p-3`}
									onChangeText={handleUsernameChange}
									placeholder="Enter Username"
								/>
							</View>
							<View className="flex flex-row">
								<TextInput
									className={`bg-gray-200 rounded-xl h-12 w-[75%] lg:w-max p-3`}
									onChangeText={handlePasswordChange}
									placeholder="Enter Password"
									secureTextEntry={true}
								/>
							</View>

							{/* LOGIN BUTTON */}
							<View className="flex flex-row mt-10">
								<Pressable
									className="bg-sky-500 rounded-xl p-2 active:bg-sky-900  w-[40%] h-[40%]  lg:w-max lg:h-max"
									hitSlop={5}
									onPress={handleLogin}
								>
									<Text className="m-auto text-center align-middle text-white font-semibold select-none">
										Login
									</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
