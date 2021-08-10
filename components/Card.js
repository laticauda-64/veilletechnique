import React, { useState, useEffect } from 'react';
import styles from '../styles/card.module.scss';
import ImageFallback from './ImageFallback';
import Star from '../public/star.svg';
import * as toLocalStorage from '../utils/localStorage';

export default function Card({ link, searchWord, id }) {
	const [isLiked, setIsLiked] = useState(false);
	let domain = new URL(link.url);
	const regex = new RegExp(searchWord, 'gi');
	const replacementString = `<span class="${styles.highlightText}">${searchWord}</span>`;

	const title = {
		__html: link.title.replace(regex, replacementString),
	};
	const description = {
		__html: link.description.replace(regex, replacementString),
	};

	const toggleFav = (e) => {
		e.preventDefault();
		e.stopPropagation(); // Prevent from clicking on link below
		setIsLiked(!isLiked);
		toLocalStorage.setFav(id);
	};

	useEffect(() => {
		if (toLocalStorage.checkId(id)) {
			setIsLiked(true);
		}
	}, []);

	return (
		<a href={link.url} rel="noreferrer" target="_blank" className={styles.card}>
			<div className={styles.imgContainer}>
				<Star
					title={'Ajouter aux favoris'}
					className={isLiked ? styles.starActive : styles.starInactive}
					onClick={toggleFav}
				/>
				<ImageFallback
					src={link.thumbnail?.url || '/not-found-img.svg'}
					fallbackSrc={'/not-found-opt.svg'}
					alt={link.description}
					className={styles.linkPicture}
					layout="fill"
					objectFit="cover"
				/>

				{link?.author?.name ? (
					<p className={styles.author}>{link.author.name}</p>
				) : (
					<p className={styles.author} style={{ visibility: 'hidden' }}>
						No author
					</p>
				)}
			</div>
			<p className={styles.title} dangerouslySetInnerHTML={title}></p>
			<p
				className={styles.description}
				dangerouslySetInnerHTML={description}
			></p>
			<p className={styles.host}>{domain.hostname.replace('www.', '')}</p>
		</a>
	);
}
