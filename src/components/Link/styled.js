import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Link = styled.TouchableHighlight`
  align-items: center;
`

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  color: ${props => props.textColor || '#F99030'} ;
`
