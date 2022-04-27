import React from 'react'
import PropTypes from 'prop-types'

import ConnectedHeader from '../../../components/ConnecterHeader'
import PlayerCard from '../../../components/PlayerCard'

import * as SC from './styled'

const GamePartner = props => {
	const { theme, translations, headerData, partners, onSearchPress, isSearchMode, onSearchInput, searchValue } = props

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			<SC.Box>
				{isSearchMode ? (
					<>
						<SC.SearchInput
							value={searchValue}
							onChangeText={onSearchInput}
							placeholder={translations.searchPlaceholder}
						/>
						<SC.Icon
							onPress={onSearchPress}
							name="close"
							size={24}
							color={theme.backgroundInverted}
						/>
					</>
				)
					: (
						<>
							<SC.Title>{translations.subtitle}</SC.Title>
							<SC.Icon
								onPress={onSearchPress}
								name="search"
								size={24}
								color={theme.backgroundInverted}
							/>
						</>
					)}
			</SC.Box>
			<SC.Partners>
				{partners.map((partner, i) => (
					<SC.Card
						key={i}
						{...partner}
					/>
				))}
			</SC.Partners>
			<SC.Button
				title={translations.cta}
				onPress={() => {}}
				underlayColor={theme.game}
				textColor={theme.pureWhite}
				style={SC.styles.button}
			/>
		</SC.Container>
	)
}

GamePartner.propTypes = {
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	headerData: PropTypes.shape(ConnectedHeader.propTypes),
	partners: PropTypes.arrayOf(PropTypes.shape(PlayerCard.propTypes)),
	onSearchPress: PropTypes.func,
	isSearchMode: PropTypes.bool,
	onSearchInput: PropTypes.func,
	searchValue: PropTypes.string,
}

export default GamePartner
