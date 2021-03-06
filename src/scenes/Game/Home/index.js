import React from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as SC from './styled'

const GameHomeScreen = ({ navigation }) => (
	<SC.Container>
		<SC.Text>Jeu en ligne - Home Screen</SC.Text>
		<Button
			title="Go to App Home"
			onPress={() => navigation.navigate('Home')}
		/>
		<Button
			title="Go to Game survey"
			onPress={() => navigation.navigate('GameSurvey')}
		/>
		<Button
			title="Go to Game Dashboard"
			onPress={() => navigation.navigate('GameDashboard')}
		/>
		<Button
			title="Go to Edit Game survey"
			onPress={() => navigation.navigate('EditSurvey', { category: 'game' /* pass toggles in future */ })}
		/>
	</SC.Container>
)

GameHomeScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(GameHomeScreen)

