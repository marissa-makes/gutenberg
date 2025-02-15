/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * WordPress dependencies
 */
import { image } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import BlockIcon from '../';

describe( 'BlockIcon', () => {
	it( 'renders a Icon', () => {
		const { container } = render( <BlockIcon icon={ image } /> );

		expect( container ).toMatchSnapshot();
	} );

	it( 'renders a span without the has-colors classname', () => {
		const { container } = render( <BlockIcon icon={ image } /> );

		expect( container.firstChild ).not.toHaveClass( 'has-colors' );
	} );

	it( 'renders a span with the has-colors classname', () => {
		const { container } = render( <BlockIcon icon={ image } showColors /> );

		expect( container.firstChild ).toHaveClass( 'has-colors' );
	} );

	it( 'supports adding a className to the wrapper', () => {
		const { container } = render(
			<BlockIcon icon={ image } className="foo-bar" />
		);

		expect( container.firstChild ).toHaveClass( 'foo-bar' );
	} );

	it( 'skips adding background and foreground styles when colors are not enabled', () => {
		const { container } = render(
			<BlockIcon
				icon={ {
					background: 'white',
					foreground: 'black',
					src: 'image',
				} }
			/>
		);

		expect( container.firstChild ).not.toHaveAttribute( 'style' );
	} );

	it( 'adds background and foreground styles when colors are enabled', () => {
		const { container } = render(
			<BlockIcon
				icon={ {
					background: 'white',
					foreground: 'black',
					src: 'image',
				} }
				showColors
			/>
		);

		expect( container.firstChild ).toHaveStyle( {
			backgroundColor: 'white',
			color: 'black',
		} );
	} );
} );
