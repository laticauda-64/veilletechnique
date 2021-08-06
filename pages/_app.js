/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */
/*                                                                       */
/*              Next.js uses the App component to initialize pages.      */
/*                                                                       */
/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */

import { DefaultSeo } from 'next-seo';
import SEO from '../config/next-seo.config';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
