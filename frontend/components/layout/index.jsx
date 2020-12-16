import Link from 'next/link'
import Head from 'next/head'

import {
  mainHeader,
  mainFooter,
  mainContent,
  headerContent,
  layoutBody,
  headerSvg,
  footerContactUs,
  footerSvg
} from './layout.module.css';

import TestLogo from './TestLogo';
import { PAGE_URL_LIST } from '../../constants/url-list'

export default function Layout(props) {
  return (
    <div className={layoutBody}>
      <Head>
        <title>FAQ App Challenge</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={mainHeader}>
        <svg className={headerSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>
        <Link href={PAGE_URL_LIST.INDEX}>
          <div className={headerContent}>
            <TestLogo />
          </div>
        </Link>
      </header>

      <div className={mainContent}>
        {props.children}
      </div>

      <div className={footerContactUs}>
        <svg className={footerSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="100,0 0,0 0,100" />
        </svg>
        <div>
          <h3>Couldn't find what you are looking for?</h3>
          <a href={PAGE_URL_LIST.CONTACT_FORM}>Contact us directly</a>
        </div>
      </div>
      <footer className={mainFooter}>
        test.com
      </footer>
    </div>
  );
}
