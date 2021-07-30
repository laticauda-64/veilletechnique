import React, { useState } from 'react';
import Image from 'next/image';

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
