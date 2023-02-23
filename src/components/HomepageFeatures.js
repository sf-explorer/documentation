import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
const FeatureList = [
  {
    title: 'Explore Omniscripts',
    Svg: require('../../static/img/undraw_programming.svg').default,
    description: (
      <>
        Get an overview of your omniscripts: how they are built and what <Link
            to={`/docs/omniscript/security`}>
            security requirements
          </Link> they need  
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
  {
    title: 'Reusable components',
    Svg: require('../../static/img/undraw_building_blocks.svg').default,
    description: (
      <>
        Built on components you can reuse for other use cases
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
