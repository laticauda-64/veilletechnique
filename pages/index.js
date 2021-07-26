import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import { getCleanData } from '../lib/exportDiscord';
import DisplayResults from '../components/DisplayResults';

export default function Home({ data }) {
	// console.log(data);
	return (
		<div>
			<Head>
				<title>#VeilleTechnique - Archives</title>
				<meta name="description" content="Archives du chan #veille-technique" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Link href="/">
				<a>
					<h1 className={styles.title}>
						<span className={styles.titleSharp}>#</span>VeilleTechnique
					</h1>
				</a>
			</Link>
			<DisplayResults data={data} />
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
