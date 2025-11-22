import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
const FeatureList = [
  {
    title: 'Multi org',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_dev_productivity_re_fylf.svg').default,
    description: (
      <>
        Connect to multiple orgs to browse and compare records across them.
      </>
    ),
  },
  {
    title: 'Object Manager',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_mind_map_re_nlb6.svg').default,
    description: (
      <>
        Retrieve key information on the objects you use the most.
      </>
    ),
  },

  {
    title: 'Explore Data',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_server_down_s4lk.svg').default,
    description: (
      <>
        Chain requests and query data across multiple orgs with ease
      </>
    ),
  },
  {
    title: 'Security',
    version: '0.3.0',
    Svg: require('../../static/img/undraw_security_on_re_e491.svg').default,
    description: (
      <>
       Explore your org security model with an interactive UI to make the bridge between theory and practice  
       
      </>
    ),
  },
  {
    title: 'Explore Code',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        Extract JSDoc information from your LWCs and your Apex to generate a status report
      </>
    ),
  },
  {
    title: 'Explore Omnistudio',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_dev_focus_re_6iwt.svg').default,
    description: (
      <>
        Get an overview of your omniscripts, DataRaptors and your flexcards
      </>
    ),
  },
  {
    title: 'Explore Products',
    version: '0.1.0',
    Svg: require('../../static/img/packaging.svg').default,
    description: (
      <>
        Explore Insurance Products with their coverage, attributes, rules and dependencies
      </>
    ),
  },
  {
    title: 'Interact with ChatGPT',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_firmware_re_fgdy.svg').default,
    description: (
      <>
        Get contextualized help with ChatGPT to facilitate your work.
      </>
    ),
  },
  {
    title: 'Compare records',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_split_testing_l1uw.svg').default,
    description: (
      <>
        Compare any other record in your orgs such as Flexipages, accounts or Flows.
      </>
    ),
  },
  {
    title: 'GraphQL',
    version: '0.3.0',
    Svg: require('../../static/img/graphQL.svg').default,
    description: (
      <>
        Browse your org using GraphQL and generate LWC starters accordingly
      </>
    ),
  },
 
  {
    title: 'Usage',
    version: '0.3.0',
    Svg: require('../../static/img/undraw_booked_re_vtod.svg').default,
    description: (
      <>
       Explore chosen records child relation at once
      </>
    ),
  },
  {
    title: 'Timeline',
    version: '0.2.0',
    Svg: require('../../static/img/undraw_time_management_re_tk5w.svg').default,
    description: (
      <>
        Find out <b>what happened</b> in your org while you were gone on vacation.
      </>
    ),
  },
  
  

];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--2 col--center')}>
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

export default function HomepageFeatures({version}) {

  return (
    <section className={styles.features}>

      <div className="container">
        <div className="row">
          {FeatureList.filter(feature=> !version || feature.version === version).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
