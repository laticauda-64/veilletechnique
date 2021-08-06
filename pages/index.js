import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/main.module.scss';
import { getCleanData } from '../utils/exportDiscord';
import Main from '../components/Main';

export default function Home({ data }) {
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
			<Main data={data} />
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
