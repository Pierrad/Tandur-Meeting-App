import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
	display: flex;
	justify-content: center;
	align-items: center;
`
export const GameName = styled.Text`
	font-family: 'Poppins-Bold';
	font-size: 26px;
	color: ${props => props.theme.game};
  position: absolute;
	top: 13%;
	left: 50%;
  transform: translate(-115px, 0px);
`

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`

export const Title = styled.Text`
	position: absolute;
	bottom: 10%;
	left: 8%;
	font-family: 'Poppins-Bold';
	font-size: 20px;
	color: ${props => props.theme.pureBlack};
`

export const Subtitle = styled.Text`
	position: absolute;
	bottom: 4%;
	left: 9%;
	font-family: 'Poppins-Regular';
	font-size: 16px;
	color: ${props => props.theme.pureBlack};
`

export const Like = styled.View`
	position: absolute;
	top: 5%;
	left: 5%;
	height: 40px;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.green};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 5px;
`

export const Dislike = styled.View`
	position: absolute;
	top: 5%;
	right: 5%;
	height: 40px;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.red};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 5px;
`

export const Text = styled.Text`
	font-family: 'Poppins-Bold';
	font-size: 20px;
	color: ${props => props.theme.pureBlack};
`

export const styles = StyleSheet.create({
	card: {
		width: 350,
		height: 460,
		borderRadius: 50,
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#8A9DFF',
		borderWidth: 1,
	}
})



