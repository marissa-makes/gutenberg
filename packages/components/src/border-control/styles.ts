/**
 * External dependencies
 */
import { css } from '@emotion/react';

/**
 * Internal dependencies
 */
import { COLORS, CONFIG, boxSizingReset, rtl } from '../utils';
import { space } from '../ui/utils/space';
import {
	StyledField,
	StyledLabel,
} from '../base-control/styles/base-control-styles';
import {
	ValueInput as UnitControlWrapper,
	UnitSelect,
} from '../unit-control/styles/unit-control-styles';

import type { Border } from './types';

const labelStyles = css`
	font-weight: 500;
`;

const focusBoxShadow = css`
	box-shadow: inset 0 0 0 ${ CONFIG.borderWidth } ${ COLORS.ui.borderFocus };
`;

export const borderControl = css`
	border: 0;
	padding: 0;
	margin: 0;
	${ boxSizingReset }
`;

export const innerWrapper = () => css`
	${ UnitControlWrapper } {
		flex: 1 1 40%;
	}
	&& ${ UnitSelect } {
		/* Prevent unit select forcing min height larger than its UnitControl */
		min-height: 0;
	}
`;

/*
 * This style is only applied to the UnitControl wrapper when the border width
 * field should be a set width. Omitting this allows the UnitControl &
 * RangeControl to share the available width in a 40/60 split respectively.
 */
export const wrapperWidth = css`
	${ UnitControlWrapper } {
		/* Force the UnitControl's set width. */
		flex: 0 0 auto;
	}
`;

export const wrapperHeight = ( size?: 'default' | '__unstable-large' ) => {
	return css`
		height: ${ size === '__unstable-large' ? '40px' : '30px' };
	`;
};

export const borderControlDropdown = (
	size?: 'default' | '__unstable-large'
) => css`
	background: #fff;

	&& > button {
		/*
		 * Override button component styles to fit within BorderControl
		 * regardless of size.
		 */
		height: ${ size === '__unstable-large' ? '40px' : '30px' };
		width: ${ size === '__unstable-large' ? '40px' : '30px' };
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		${ rtl(
			{ borderRadius: `2px 0 0 2px` },
			{ borderRadius: `0 2px 2px 0` }
		)() }
		border: ${ CONFIG.borderWidth } solid ${ COLORS.ui.border };

		&:focus,
		&:hover:not( :disabled ) {
			${ focusBoxShadow }
			border-color: ${ COLORS.ui.borderFocus };
			z-index: 1;
			position: relative;
		}
	}
`;

export const colorIndicatorBorder = ( border?: Border ) => {
	const { color, style } = border || {};

	const fallbackColor =
		!! style && style !== 'none' ? COLORS.gray[ 300 ] : undefined;

	return css`
		border-style: ${ style === 'none' ? 'solid' : style };
		border-color: ${ color || fallbackColor };
	`;
};

export const colorIndicatorWrapper = (
	border?: Border,
	size?: 'default' | '__unstable-large'
) => {
	const { style } = border || {};

	return css`
		border-radius: 9999px;
		border: 2px solid transparent;
		${ style ? colorIndicatorBorder( border ) : undefined }
		width: ${ size === '__unstable-large' ? '24px' : '22px' };
		height: ${ size === '__unstable-large' ? '24px' : '22px' };
		padding: ${ size === '__unstable-large' ? '2px' : '1px' };

		/*
		 * ColorIndicator
		 *
		 * The transparent colors used here ensure visibility of the indicator
		 * over the active state of the border control dropdown's toggle button.
		 */
		& > span {
			height: ${ space( 4 ) };
			width: ${ space( 4 ) };
			background: linear-gradient(
				-45deg,
				transparent 48%,
				rgb( 0 0 0 / 20% ) 48%,
				rgb( 0 0 0 / 20% ) 52%,
				transparent 52%
			);
		}
	`;
};

// Must equal $color-palette-circle-size from:
// @wordpress/components/src/circular-option-picker/style.scss
const swatchSize = 28;
const swatchGap = 12;

export const borderControlPopoverControls = css`
	width: ${ swatchSize * 6 + swatchGap * 5 }px;

	> div:first-of-type > ${ StyledLabel } {
		margin-bottom: 0;
		${ labelStyles }
	}

	&& ${ StyledLabel } + button:not( .has-text ) {
		min-width: 24px;
		padding: 0;
	}
`;

export const borderControlPopoverContent = css``;
export const borderColorIndicator = css``;

export const resetButton = css`
	justify-content: center;
	width: 100%;

	/* Override button component styling */
	&& {
		border-top: ${ CONFIG.borderWidth } solid ${ COLORS.gray[ 200 ] };
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		height: 46px;
	}
`;

export const borderControlStylePicker = css`
	${ StyledLabel } {
		${ labelStyles }
	}
`;

export const borderStyleButton = css`
	&&&&& {
		min-width: 30px;
		width: 30px;
		height: 30px;
		padding: 3px;
	}
`;

export const borderSlider = () => css`
	flex: 1 1 60%;
	${ rtl( { marginRight: space( 3 ) } )() }

	${ StyledField } {
		margin-bottom: 0;
		font-size: 0;
		display: flex;
	}
`;
