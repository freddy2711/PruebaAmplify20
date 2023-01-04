import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.scss'
import Layout from './../components/layout'
import { Provider } from 'react-redux'
import store from './../redux/store'
import { UserProvider } from '../Context/userContext'

function MyApp({ Component, pageProps }: AppProps | any) {
  return (
		<UserProvider>
			<Provider store={store}>
				<Head>
					<title>{Component.title}</title>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</UserProvider>
  )
}

export default MyApp
