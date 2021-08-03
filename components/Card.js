import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/card.module.scss';
import ImageFallback from './ImageFallback';
import Star from '../public/star.svg';
import * as toLocalStorage from '../lib/localStorage';

export default function Card({ link, searchWord, id }) {
	const currentCard = useRef(null);
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
		currentCard.current.firstChild.firstChild.style.fill = isLiked
			? '#ffd600'
			: 'white';
	}, [isLiked]);

	useEffect(() => {
		if (toLocalStorage.checkId(id)) {
			setIsLiked(true);
		}
	}, []);

	return (
		<a
			href={link.url}
			rel="noreferrer"
			target="_blank"
			className={styles.card}
			ref={currentCard}
		>
			<Star
				title={'Ajouter aux favoris'}
				className={styles.starIcon}
				onClick={toggleFav}
			/>
			<div className={styles.imgContainer}>
				<ImageFallback
					src={link.thumbnail?.url || '/not-found-img.svg'}
					fallbackSrc={'/not-found-opt.svg'}
					alt={link.description}
					className={styles.linkPicture}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			{link?.author?.name ? (
				<p className={styles.author}>{link.author.name}</p>
			) : null}

			<p className={styles.title} dangerouslySetInnerHTML={title}></p>
			<p
				className={styles.description}
				dangerouslySetInnerHTML={description}
			></p>
			<p className={styles.host}>{domain.hostname.replace('www.', '')}</p>
		</a>
	);
}
