import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SESSION_REDIRECTION } from '../../redux/actions/user'
import { RESET_ERROR, RESET_VALIDATION } from '../../redux/actions/app'

import { navigationRef } from '../../helpers/navigation'
import { lightTheme } from '../../themes/theme'

import HomeScreen from '../Home'
import LoginScreenWrapper from '../Unauthentified/Login/wrapper'
import RegisterScreenWrapper from '../Unauthentified/Register/wrapper'
import ResetScreenWrapper from '../Unauthentified/Reset/wrapper'
import SplashScreen from '../Unauthentified/Splash'

import DashboardScreenWrapper from '../Authentified/Dashboard/wrapper'
import ProfilScreenWrapper from '../Authentified/Profil/wrapper'
import NotificationScreenWrapper from '../Authentified/Notification/wrapper'
import SurveyStepperScreenWrapper from '../Authentified/SurveyStepper/wrapper'
import SettingsScreenWrapper from '../Authentified/Settings/wrapper'
import EditSurveyScreenWrapper from '../Authentified/EditSurvey/wrapper'
import MatchScreenWrapper from '../Authentified/Match/wrapper'
import ChatScreenWrapper from '../Authentified/Chat/wrapper'

import LoveHomeScreen from '../Love/Home'
import LoveSurveyScreenWrapper from '../Love/SurveyStepper/wrapper'
import LoveDashboardScreenWrapper from '../Love/Dashboard/wrapper'
import LoveSwipeScreenWrapper from '../Love/Swipe/wrapper'
import LoveDetailProfileWrapper from '../Love/DetailProfil/wrapper'

import GameHomeScreen from '../Game/Home'
import GameSurveyScreenWrapper from '../Game/SurveyStepper/wrapper'
import GameDashboardScreenWrapper from '../Game/Dashboard/wrapper'
import GamePartnerWrapper from '../Game/GamePartner/wrapper'
import GameSearchWrapper from '../Game/GameSearch/wrapper'
import GameSwipeWrapper from '../Game/GameSwipe/wrapper'
import GamePartnerProfile from '../Game/PartnerProfile/wrapper'

import Error from '../../components/Error'
import Validation from '../../components/Validation'

const Stack = createNativeStackNavigator()

const Layout = (props) => {
	const { theme, init, error, validation, resetError, resetValidation } = props

	useEffect(() => {
		init()
	}, [init])

	useEffect(() => {
		resetError()
		resetValidation()
	}, [resetError, resetValidation])

	if (error || validation) {
		setTimeout(() => {
			resetError()
			resetValidation()
		}, 5000)
	}

	return (
		<ThemeProvider theme={theme || lightTheme}>
			<NavigationContainer ref={navigationRef}>
				<Error error={error} />
				<Validation validation={validation} />
				<Stack.Navigator initialRouteName="Home">
					{/* Unauthentified screens */}
					<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Login" component={LoginScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Register" component={RegisterScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Reset" component={ResetScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
					{/* Authentified screens */}
					<Stack.Screen name="Dashboard" component={DashboardScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Profil" component={ProfilScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Notification" component={NotificationScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="SurveyStepper" component={SurveyStepperScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Settings" component={SettingsScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="EditSurvey" component={EditSurveyScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Match" component={MatchScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Chat" component={ChatScreenWrapper} options={{ headerShown: false }} />
					{/* Love screens */}
					<Stack.Screen name="LoveHome" component={LoveHomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="LoveSurvey" component={LoveSurveyScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="LoveDashboard" component={LoveDashboardScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="LoveSwipe" component={LoveSwipeScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="LoveProfile" component={LoveDetailProfileWrapper} options={{ headerShown: false }} />
					{/* Game screens */}
					<Stack.Screen name="GameHome" component={GameHomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="GameSurvey" component={GameSurveyScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="GameDashboard" component={GameDashboardScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="GamePartner" component={GamePartnerWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="GameSearch" component={GameSearchWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="GameSwipe" component={GameSwipeWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="GamePartnerProfile" component={GamePartnerProfile} options={{ headerShown: false }} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	theme: PropTypes.shape({
		mode: PropTypes.string,
	}),
	init: PropTypes.func,
	error: PropTypes.string,
	validation: PropTypes.string,
	resetError: PropTypes.func,
	resetValidation: PropTypes.func
}

const mapStateToProps = (state) => ({
	theme: state?.themeReducer?.theme,
	error: state?.appReducer?.error,
	validation: state?.appReducer?.validation
})

const mapDispatchToProps = (dispatch) => ({
	init: () => dispatch({ type: SESSION_REDIRECTION }),
	resetError: () => dispatch({ type: RESET_ERROR }),
	resetValidation: () => dispatch({ type: RESET_VALIDATION })
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

