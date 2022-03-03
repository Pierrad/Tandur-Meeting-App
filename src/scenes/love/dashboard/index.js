import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import * as SC from './styled'

const LoveDashboardScreen = ({ theme, navigation, user }) => {
	const { username } = user 

	return (
		<SC.Container>
			<SC.Header 
				title={`Bonjour ${username}`}
				onBurgerPress={() => {}}
				onNotificationPress={() => navigation.navigate('Notification')}
				numberOfNotification={5}
				onAvatarPress={() => navigation.navigate('Profil')}
				avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
				theme={theme}
			/>
			<SC.Title>Vos matchs</SC.Title>
		</SC.Container>
	)
}

LoveDashboardScreen.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
	}),
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoveDashboardScreen)

