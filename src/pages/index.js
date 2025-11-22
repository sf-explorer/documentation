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
        <img
          src={'https://img.shields.io/chrome-web-store/users/eabpolgjfkpchgffbkiedgfemcgbnbde?label=Google%20Chrome'}
        />
        <img
          src={'https://img.shields.io/badge/dynamic/json?label=Microsoft%20Edge&query=%24.activeInstallCount&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fpoadmeoldhchlfeaiicmfjlfjmkjbgdh'}
        />
         <img
          src={'https://img.shields.io/badge/Web-_80_-orange'}
        />
        <img
          src={'https://img.shields.io/chrome-web-store/rating/eabpolgjfkpchgffbkiedgfemcgbnbde'}
        />
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
            <Link to="/blog/introducing-genai-explorer" className={styles.topBannerTitleText}>

              {'GenAI Explorer is\xa0here!️'}

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
              <LiteYouTubeEmbed
                id="SvmSatZbsvM"
                params="autoplay=1&autohide=1&showinfo=0&rel=0"
                title="Architecture"
                poster="maxresdefault"
                webp
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
