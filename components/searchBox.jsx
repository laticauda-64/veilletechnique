import React, { useRef, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import styles from '../styles/LandingPage.module.scss';

export default function SearchBox({ data, setLinks, setSearchWord }) {
	const searchInput = useRef(null);

	const handleChange = (e) => {
		console.log(e.target.value);
		const searchText = e.target.value.trim();
		if (searchText != '') {
			setSearchWord(searchText);
			setLinks([
				...data.filter(
					(e) =>
						e.embeds[0].title.toLowerCase().includes(searchText) ||
						e.embeds[0].description.toLowerCase().includes(searchText)
				),
			]);
			return;
		}
		setLinks([...data.slice(0, 19)]);
	};

	const debouncedChangeHandler = useMemo(() => debounce(handleChange, 500), []);

	useEffect(() => {
		return () => {
			debouncedChangeHandler.cancel();
		};
	}, []);

	return (
		<div className={styles.searchBar}>
			<input
				type="text"
				placeholder="🔍 Search..."
				ref={searchInput}
				onChange={debouncedChangeHandler}
			/>
		</div>
	);
}
