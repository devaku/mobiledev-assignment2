import { Image } from 'react-native';
export default function CustomImage({ imageId }: { imageId: number }) {
	if (imageId == 0) {
		return (
			<Image
				source={require('../assets/Calgary-foreground-Pengrowth-Saddledome-Canada-Alberta.webp')}
				style={{
					width: '100%',
					height: 224,
					maxWidth: 500,
				}}
				className="rounded-xl"
				resizeMode="cover"
			/>
		);
	} else {
		return (
			<Image
				source={require('../assets/ac04c7e8d1f31e1bcfc7db15f942ff71b194da6d-1920x1195.jpg')}
				style={{
					width: '100%',
					height: 224,
					maxWidth: 500,
				}}
				className="rounded-xl"
				resizeMode="cover"
			/>
		);
	}
}
