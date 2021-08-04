import React, { useState, useRef, useMemo, useEffect } from 'react';
import Star from '../public/star.svg';
import debounce from 'lodash.debounce';
import styles from '../styles/searchbox.module.scss';

export default function SearchBox({
	data,
	setLinks,
	setSearchWord,
	sethasMore,
	favMode,
	setFavMode,
}) {
	const searchInput = useRef(null);
	const clearButton = useRef(null);
	const [isClearButtonDisplayed, setisClearButtonDisplayed] = useState(false);

	const handleChange = (e) => {
		const searchText = e?.target?.value.trim().toLowerCase();
		if (searchText != '') {
			setSearchWord(searchText);
			setLinks([
				...data.filter(
					(e) =>
						e.embeds[0].title.toLowerCase().includes(searchText) ||
						e.embeds[0].description.toLowerCase().includes(searchText)
				),
			]);
			sethasMore(false);
			return;
		}
		setFavMode(false);
		clearInput();
	};

	const debouncedChangeHandler = useMemo(() => debounce(handleChange, 300), []);

	const clearInput = () => {
		searchInput.current.value = '';
		setLinks([...data.slice(0, 19)]);
		sethasMore(true);
		setisClearButtonDisplayed(false);
		searchInput.current.nextSibling.firstChild.style.fill = 'white';
	};

	const listenKeyStroke = (e) => {
		if (e.key === 'Escape') {
			clearInput();
			setFavMode(false);
		}
	};

	useEffect(() => {
		clearInput();
		searchInput.current.focus();
		window.addEventListener('keydown', listenKeyStroke);
		return () => {
			window.addEventListener('keydown', listenKeyStroke);
			debouncedChangeHandler.cancel();
		};
	}, []);

	useEffect(() => {
		if (isClearButtonDisplayed) {
			clearButton.current.style.visibility = 'visible';
			return;
		}
		clearButton.current.style.visibility = 'hidden';
	}, [isClearButtonDisplayed]);

	useEffect(() => {
		searchInput.current.value = '';
		setisClearButtonDisplayed(false);
		searchInput.current.nextSibling.firstChild.style.fill = favMode
			? '#ffd600'
			: 'white';

		if (favMode) {
			const currFav = JSON.parse(localStorage.getItem('favList')) || [];
			if (currFav.length > 0) {
				setLinks([...data.filter((e) => currFav.indexOf(e.id) > -1)]);
				sethasMore(false);
			}
			searchInput.current.disabled = true;
			return;
		}
		searchInput.current.disabled = false;
		clearInput();
	}, [favMode]);

	return (
		<div className={styles.searchBar}>
			<span
				className={styles.clearButton}
				onClick={() => {
					clearInput();
					setFavMode(false);
				}}
				ref={clearButton}
			></span>
			<input
				type="text"
				placeholder="🔍 Search..."
				ref={searchInput}
				onChange={(e) => {
					debouncedChangeHandler(e);
					setisClearButtonDisplayed(true);
				}}
			/>
			<Star
				title={'Icone favoris'}
				className={styles.starIcon}
				onClick={() => setFavMode((prevState) => !prevState)}
			/>
		</div>
	);
}
