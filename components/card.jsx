import styles from '../styles/card.module.scss';
import ImageFallback from './ImageFallback';

export default function Card({ link, searchWord }) {
	let domain = new URL(link.url);
	const regex = new RegExp(searchWord, 'gi');
	const title = {
		__html: link.title.replace(
			regex,
			`<span class="highlightText">${searchWord}</span>`
		),
	};
	const description = {
		__html: link.description.replace(
			regex,
			`<span class="highlightText">${searchWord}</span>`
		),
	};
	return (
		<a href={link.url} rel="noreferrer" target="_blank" className={styles.card}>
			<div className={styles.imgContainer}>
				<ImageFallback
					src={link.thumbnail?.url || '/not-found-img.png'}
					fallbackSrc={'/not-found-img.png'}
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
