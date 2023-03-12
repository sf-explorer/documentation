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
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
       
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <div className="text--center">
              <h1>Principles</h1>
              <img
                className={styles.heroLogo}
                src={useBaseUrl('/img/principles.png')}
                width="80%"
              />
            </div>
          </div>
        </header>
      </main>

      <div className="text--center">
        <h1>1 min Demo</h1>
        <img
          className={styles.heroLogo}
          src={useBaseUrl('/img/doc_explorer.gif')}
          width="80%"
        />
         <Quizz id="interest" choices={["Omniscript", "Products", "Both"]} description="## What topics are you interested in?" />
         <Quizz id="newsletter"  choices={["Yes", "No",]} description="## Subscribe to newsletter?" />
      </div>

    </Layout>
  );
}
