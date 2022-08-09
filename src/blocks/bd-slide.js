/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks, ButtonBlockAppender } from '@wordpress/block-editor';
/**
 * Child blocks
 */
 import slidemetadata from './bd-slide-block.json';
 const { name } = slidemetadata;

 export { slidemetadata, name };
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
export const settings = {
	icon: "smiley",
	/**
	 * @see ./edit.js
	 */
	edit: function( { attributes, setAttributes } ){
		const blockProps = useBlockProps( {
			className: 'bd-guten-slider',
			'data-id': 'bd-guten-slider'
		} );
		return (
			<div { ...blockProps }>
				<InnerBlocks
					orientation="horizontal"

					// template={MY_TEMPLATE}
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
			</div>
		);
	},
	parent: [ 'create-block/guten-slider' ],
	/**
	 * @see ./save.js
	 */
	save: function(){
		return (
			<div { ...useBlockProps.save() }>
				 <InnerBlocks.Content />
			</div>
		);
	},
};
