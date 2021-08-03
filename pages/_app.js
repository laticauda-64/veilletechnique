import { DefaultSeo } from 'next-seo';
import SEO from '../plugins/next-seo.config';
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
