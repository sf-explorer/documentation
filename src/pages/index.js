import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

const Version = '04t09000000W3io'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--xs"
            to={`https://test.salesforce.com/packaging/installPackage.apexp?p0=${Version}`}>
            Install in Sandbox 📥
          </Link>
          {' '}
          <Link
            className="button button--info button--lg"
            to={`https://login.salesforce.com/packaging/installPackage.apexp?p0=${Version}`}>
            Install in Production 📥
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
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
        <h1>Demo</h1>
        <img

          className={styles.heroLogo}
          src={useBaseUrl('/img/doc_explorer.gif')}
          width="80%"
        />
      </div>

    </Layout>
  );
}
