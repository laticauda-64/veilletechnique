import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../utils/customHooks';
import styles from '../styles/main.module.scss';
import { getCleanData } from '../utils/exportDiscord';
import Main from '../components/Main';
import Burger from '../components/Burger/Burger';

export default function Home({ data }) {
	const [favMode, setFavMode] = useState(false);
	const [sideMenuOpen, setSideMenuOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setSideMenuOpen(false));

	// console.log(data);

	return (
		<div>
			<Head>
				<title>#VeilleTechnique - Archives</title>
				<meta
					name="description"
					content="Archives du salon #veille-technique. Chan discord : developpeurwebjunior.fr"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Link href="/">
				<a>
					<h1 className={styles.title}>
						<span className={styles.titleSharp}>#</span>VeilleTechnique
					</h1>
				</a>
			</Link>
			<Burger
				sideMenuOpen={sideMenuOpen}
				setSideMenuOpen={setSideMenuOpen}
				favMode={favMode}
				setFavMode={setFavMode}
				ref={node}
			/>
			<Main data={data} favMode={favMode} setFavMode={setFavMode} />
		</div>
	);
}

export async function getStaticProps() {
	const data = getCleanData();

	return {
		props: {
			data,
		},
	};
}
