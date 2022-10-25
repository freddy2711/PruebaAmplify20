import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.scss'
import Layout from './../components/layout'
import { Provider } from 'react-redux'
import store from './../redux/store'

function MyApp({ Component, pageProps }: AppProps | any) {
  return (
    <Provider store={store}>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
