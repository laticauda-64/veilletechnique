/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */
/*                                                                       */
/*  Create a custom image component that extends the built-in next/image */
/*	and adds the fallback logic if the image fails to load by triggering */
/*	the onError callback.                  								 */
/*                                                                       */
/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */

import React, { useState } from 'react';
import Image from 'next/image';

/* You can directly use the custom component instead of next/image */

const ImageFallback = (props) => {
	const { src, fallbackSrc, ...rest } = props;
	const [imgSrc, setImgSrc] = useState(false);
	const [oldSrc, setOldSrc] = useState(src);
	if (oldSrc !== src) {
		setImgSrc(false);
		setOldSrc(src);
	}
	return (
		<Image
			{...rest}
			alt="Image décorative de lien"
			src={imgSrc ? fallbackSrc : src}
			onError={() => {
				setImgSrc(true);
			}}
		/>
	);
};

export default ImageFallback;
