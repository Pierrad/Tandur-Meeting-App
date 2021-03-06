import React from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as SC from './styled'

const LoveHomeScreen = ({ navigation }) => (
	<SC.Container>
		<SC.Text>Rencontre - Home Screen</SC.Text>
		<Button
			title="Go to App Home"
			onPress={() => navigation.navigate('Home')}
		/>
		<Button
			title="Go to Love Dashboard"
			onPress={() => navigation.navigate('LoveDashboard')}
		/>
		<Button
			title="Go to Love survey"
			onPress={() => navigation.navigate('LoveSurvey')}
		/>
		<Button
			title="Go to Love swipe"
			onPress={() => navigation.navigate('LoveSwipe')}
		/>
		<Button
			title="Go to Love detail profil"
			onPress={() => navigation.navigate('LoveProfile')}
		/>
		<Button
			title="Go to Love match"
			onPress={() => navigation.navigate('Match', { category: 'love' /* pass toggles in future */ })}
		/>
		<Button
			title="Go to Edit Love survey"
			onPress={() => navigation.navigate('EditSurvey', { category: 'love' /* pass toggles in future */ })}
		/>
	</SC.Container>
)

LoveHomeScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoveHomeScreen)


