import React, { useState } from 'react';
import styles from '../styles/LandingPage.module.scss';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import SearchBox from './searchBox';

function DisplayResults({ data }) {
	const [links, setLinks] = useState(data.slice(0, 19));
	const [hasMore, sethasMore] = useState(true);
	const [searchWord, setSearchWord] = useState('');

	const fetchData = () => {
		let lastIndex = links.length;
		if (links.length >= data.length) {
			console.log('Fin du tableau');
			sethasMore(false);
			return;
		}
		setLinks([...links, ...data.slice(lastIndex, lastIndex + 20)]);
	};

	return (
		<>
			<SearchBox
				setLinks={setLinks}
				data={data}
				setSearchWord={setSearchWord}
			/>
			<div>
				<main className={styles.container}>
					<InfiniteScroll
						dataLength={links.length}
						next={fetchData}
						hasMore={hasMore}
						loader={<Loader />}
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 300px))',
							justifyContent: 'space-evenly',
							gridGap: '0.5rem',
						}}
						endMessage={
							<p style={{ textAlign: 'center' }}>
								<b>Yay! You have seen it all</b>
							</p>
						}
					>
						{links.map((e) => (
							<Card key={e.id} link={e.embeds[0]} searchWord={searchWord} />
						))}
					</InfiniteScroll>
				</main>
			</div>
		</>
	);
}

export default DisplayResults;
