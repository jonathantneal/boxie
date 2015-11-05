function getFlexStyles(element) {
	var currentStyle = element.currentStyle;

	return {
		alignContent:   currentStyle['align-content'],
		alignItems:     currentStyle['align-items'],
		alignSelf:      currentStyle['align-self'],
		display:        currentStyle['-js-display'],
		flex:           currentStyle['flex'],
		flexBasis:      currentStyle['flex-basis'],
		flexDirection:  currentStyle['flex-direction'],
		flexFlow:       currentStyle['flex-flow'],
		flexGrow:       currentStyle['flex-grow'],
		flexShrink:     currentStyle['flex-shrink'],
		flexWrap:       currentStyle['flex-wrap'],
		justifyContent: currentStyle['justify-content'],
		order:          currentStyle['order']
	};
}

this.getFlexStyles = getFlexStyles;
