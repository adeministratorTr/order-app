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

export default function Layout (props) {
    return (
    <div className={layoutBody}>
        <header className={mainHeader}>
        <svg className={headerSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100 100,0 100,100"/>
        </svg>
        <div className={headerContent}>
            <TestLogo />
        </div>

        </header>

        <div className={mainContent}>
        {props.children}
        </div>
        <div className={footerContactUs}>
        <svg className={footerSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="100,0 0,0 0,100"/>
        </svg>
        <div>
        <h3>Couldn't find what you are looking for?</h3>
        <a href="">Contact us directly</a>
        </div>
        </div>
        <footer className={mainFooter}>
            test.com
        </footer>
    </div>
    );
}
