import { useState, useEffect } from "react"

import Recent 		from '../../components/sections/articles/recent'

import Color 	from '../../components/utils/page.colors.util'

import colors 		from '../../content/articles/_colors.json'
import ComingSoon from "../../components/sections/comingsoon"

//
export default function Articles() {
	return (
		<>	
			<Color colors={colors} />
			<ComingSoon />
		</>
	)
}