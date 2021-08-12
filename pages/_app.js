import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Router from 'next/router'
import withGA from 'next-ga'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />
}

export default withGA("G-T4NYMLDXZT", Router)(MyApp)
