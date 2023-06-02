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
      description="SF explorer is a chrome extension to help you browse your salesforce orgs">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
       
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
         <Quizz id="newsletter"  choices={["Yes", "No",]} description="## Subscribe to newsletter?" />
      </div>

    </Layout>
  );
}
