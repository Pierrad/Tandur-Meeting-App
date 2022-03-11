import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../../components/Input'
import ActionButton from '../../../components/ActionButton'
import Link from '../../../components/Link'

const RegisterScreen = (props) => {
	const { navigation, onSubmit, isPending, theme, error, translations } = props

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [canViewPassword, setCanViewPassword] = useState(false)

	const handleSubmit = () => {
		onSubmit({
			username: userName,
			email: email,
			password: password,
		})
	}

	return (
		<SC.Container>
			{error.length > 0 && (
				<SC.ErrorContainer>
					<SC.Error>{error}</SC.Error>
				</SC.ErrorContainer>
			)}
			<SC.Head>
				<SC.NameApp>{translations.appName}</SC.NameApp>
				<SC.Caption>{translations.appSlogan}</SC.Caption>
			</SC.Head>
			<SC.Contain1>
				<SC.Contain2>
					<SC.Title>{translations.title}</SC.Title>
					<SC.Subtitle>{translations.subtitle}</SC.Subtitle>
				</SC.Contain2>
				<SC.Contain3>
					<Input
						placeholder={translations.pseudoFieldPlaceholder}
						value={userName}
						onChange={setUserName}
					/>
					<Input
						placeholder={translations.passwordFieldPlaceholder}
						isPassword={true}
						value={password}
						onChange={setPassword}
						isPasswordViewable={canViewPassword}
						setIsPasswordViewable={() => setCanViewPassword(!canViewPassword)}
					/>
					<Input
						placeholder={translations.emailFieldPlaceholder}
						value={email}
						onChange={setEmail}
						type="email-address"
					/>
					<Input
						placeholder={translations.lastnameFieldPlaceholder}
						value={lastName}
						onChange={setLastName}
					/>
					<Input
						placeholder={translations.firstnameFieldPlaceholder}
						value={firstName}
						onChange={setFirstName}
					/>
				</SC.Contain3>
				<SC.Contain4>
					<ActionButton
						primary={true}
						title={!isPending ? translations.submitButtonLabel : ''}
						onPress={handleSubmit}
						underlayColor="orange"
					>
						{isPending && <SC.Spinner color={theme.pureWhite} />}
					</ActionButton>
				</SC.Contain4>
				<SC.Contain5>
					<SC.Text>{translations.alreadyHaveAccountButtonLabel}</SC.Text>
					<Link
						title={translations.alreadyHaveAccountButtonAction}
						onPress={() => navigation.navigate('Login')}
						underlayColor="none"
					/>
				</SC.Contain5>
			</SC.Contain1>
		</SC.Container>
	)
}

RegisterScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	onSubmit: PropTypes.func.isRequired,
	isPending: PropTypes.bool.isRequired,
	theme: PropTypes.object,
	error: PropTypes.string,
	translations: PropTypes.objectOf(PropTypes.string),
}

export default RegisterScreen