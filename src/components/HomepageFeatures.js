import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
const FeatureList = [
  {
    title: 'Interact with ChatGPT',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get <Link to="/docs/OpenAI/useCases">Contextualized help</Link> with ChatGPT to facilitate your work.
      </>
    ),
  },
  {
    title: 'Explore Code',
    Svg: require('../../static/img/undraw_building_blocks.svg').default,
    description: (
      <>
         Extract JSDoc information <Link
            to={`/docs/Code/LWC`}>
            from your LWCs
          </Link> and your Apex to generate a status report 
      </>
    ),
  },
  {
    title: 'Multi org',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Read, modify and compare data from different orgs in a single UI
      </>
    ),
  },
  {
    title: 'Explore Data',
    Svg: require('../../static/img/undraw_programming.svg').default,
    description: (
      <>
       Query any data using public templates or your own queries
      </>
    ),
  },
  {
    title: 'Explore Omnistudio',
    Svg: require('../../static/img/undraw_programming.svg').default,
    description: (
      <>
        Get an overview of your <Link
            to={`/docs/omnistudio/omniscript`}>
            omniscripts
          </Link> and your flexcards
      </>
    ),
  },
  {
    title: 'Explore Products',
    Svg: require('../../static/img/packaging.svg').default,
    description: (
      <>
        Explore Insurance Products with their coverage, attributes, rules and dependencies
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {

  return (
    <section className={styles.features}>
     
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
