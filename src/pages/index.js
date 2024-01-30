import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Install from '../components/Install';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Quizz from '@site/src/components/firebase/Quizz';
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Install />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
 
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="SF explorer is a productivity tool for your salesforce related work">
      <HomepageHeader />
      <main>
        <div className={styles.topBanner}>
          <div className={styles.topBannerTitle}>
            {'🎉\xa0'}
            <Link to="/blog/release20" className={styles.topBannerTitleText}>

              {'Release\xa02.0 is\xa0out!️'}

            </Link>
            {'\xa0🥳'}
          </div>
        </div>
        <HomepageFeatures />



        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <div className="text--center">
              <h1>Introduction</h1>
              <LiteYouTubeEmbed
                id="RqaSZpJ4kJo"
                params="autoplay=1&autohide=1&showinfo=0&rel=0"
                title="Introduction"
                poster="maxresdefault"
                webp
              />
            </div>
          </div>
        </header>

        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <div className="text--center">
              <h1>Architecture</h1>
              <img
                className={styles.heroLogo}
                src={useBaseUrl('/img/architecture.png')}
                width="80%"
              />
            </div>
          </div>
        </header>


      </main>



      <div className="text--center">

        <Quizz id="interest" choices={["Omniscript", "Products", "Both"]} description="## What topics are you interested in?" />
        <Quizz id="newsletter" choices={["Yes", "No",]} description="## Subscribe to newsletter?" />
      </div>

    </Layout>
  );
}
