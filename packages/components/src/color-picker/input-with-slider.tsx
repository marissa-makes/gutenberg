/**
 * Internal dependencies
 */
import { HStack } from '../h-stack';
import { Text } from '../text';
import { Spacer } from '../spacer';
import { space } from '../ui/utils/space';
import { RangeControl, NumberControlWrapper } from './styles';
import { COLORS } from '../utils/colors-values';

interface InputWithSliderProps {
	min: number;
	max: number;
	value: number;
	label: string;
	abbreviation: string;
	onChange: ( value: number ) => void;
}

export const InputWithSlider = ( {
	min,
	max,
	label,
	abbreviation,
	onChange,
	value,
}: InputWithSliderProps ) => {
	const onNumberControlChange = ( newValue?: number | string ) => {
		if ( ! newValue ) {
			onChange( 0 );
			return;
		}
		if ( typeof newValue === 'string' ) {
			onChange( parseInt( newValue, 10 ) );
			return;
		}
		onChange( newValue );
	};

	return (
		<HStack spacing={ 4 }>
			<NumberControlWrapper
				min={ min }
				max={ max }
				label={ label }
				hideLabelFromVision
				value={ value }
				onChange={ onNumberControlChange }
				prefix={
					<Spacer
						as={ Text }
						paddingLeft={ space( 4 ) }
						color={ COLORS.ui.theme }
						lineHeight={ 1 }
					>
						{ abbreviation }
					</Spacer>
				}
				spinControls="none"
				size="__unstable-large"
			/>
			<RangeControl
				label={ label }
				hideLabelFromVision
				min={ min }
				max={ max }
				value={ value }
				// @ts-expect-error
				// See: https://github.com/WordPress/gutenberg/pull/40535#issuecomment-1172418185
				onChange={ onChange }
				withInputField={ false }
			/>
		</HStack>
	);
};
