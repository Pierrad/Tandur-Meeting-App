import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ActionButton = (props) => {
	const { style, title, children, onPress, primary, secondary, isOutlined, underlayColor, textColor } = props

	return (
		<SC.Container 
			style={style ? style[0] : {}}
			primary={primary}
			secondary={secondary}
			isOutlined={isOutlined}
		>
			<SC.Button
				onPress={onPress}
				underlayColor={underlayColor}
				primary={primary}
				secondary={secondary}
				isOutlined={isOutlined}
			>
				<SC.Text
					primary={primary}
					isOutlined={isOutlined}
					secondary={secondary}
					textColor={textColor}
				>
					{title}
					{children}
				</SC.Text>
			</SC.Button>
		</SC.Container>
	)
}

ActionButton.propTypes = {
	style: PropTypes.array,
	title: PropTypes.string,
	children: PropTypes.node,
	onPress: PropTypes.func,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	isOutlined: PropTypes.bool,
	underlayColor: PropTypes.string,
	textColor: PropTypes.string,
}

export default ActionButton


