import styled from 'styled-components/native'
import ConnectedHeader from '../../../components/ConnecterHeader'
import { StyleSheet } from 'react-native'
 
import HomeCard from '../../../components/HomeCard'
import ActionButton from '../../../components/ActionButton'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
  position: relative;
  width: 100%;
`

export const Header = styled(ConnectedHeader)`
  position: static;
  top: 15px;
  margin: 15px;
  height: auto;
`

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 24px;
  margin: 30px 15px 10px 15px;
  color: ${props => props.theme.backgroundInverted};
`

export const MatchList = styled.FlatList`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 10px 5px 0px 10px;
`

export const MatchCard = styled(HomeCard)`
  flex: 1;
  height: 230px;
  margin-bottom: 15px;
  max-width: 50%;
`

export const NoMatch = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 24px;
  margin: 30px 15px 10px 15px;
  color: ${props => props.theme.love};
  text-align: center;
`

export const Button = styled(ActionButton)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  left: 5%;
  background-color: ${props => props.theme.love};
  border: 1px solid ${props => props.theme.love};
`

export const styles = StyleSheet.create({
	flatList: {
		flex: 1,
		display: 'flex',
	},
	button: {
		elevation: 5,
	}
})