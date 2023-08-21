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
        Connect to multiple orgs to browse and compare records accross them.
      </>
    ),
  },
  {
    title: 'Review Org Details',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_mind_map_re_nlb6.svg').default,
    description: (
      <>
        Retrieve <Link to="/docs/OrgDetails/">key information</Link> on the objects you use. Visualize dependencies and which psets are required to access it.
      </>
    ),
  },
  {
    title: 'Explore Code',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        Extract JSDoc information <Link
          to={`/docs/Code/LWC`}>
          from your LWCs
        </Link> and  <Link
          to={`/docs/Code/Apex`}>your Apex</Link> to generate a status report
      </>
    ),
  },
  {
    title: 'Explore Data',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_server_down_s4lk.svg').default,
    description: (
      <>
        <Link
          to={`/docs/query/`}>
          Query any data
        </Link> accross multiple orgs using autocompletion and public templates
      </>
    ),
  },
  {
    title: 'Explore Omnistudio',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_dev_focus_re_6iwt.svg').default,
    description: (
      <>
        Get an overview of your <Link
          to={`/docs/omnistudio/omniscript`}>
          omniscripts
        </Link> and your  <Link
          to={`/docs/omnistudio/Flexcard`}>
          flexcards
        </Link>
      </>
    ),
  },
  {
    title: 'Explore Products',
    version: '0.1.0',
    Svg: require('../../static/img/packaging.svg').default,
    description: (
      <>
        Explore <Link to="/docs/Insurance%20Product/Getting%20started" >Insurance Products</Link> with their coverage, attributes, rules and dependencies
      </>
    ),
  },
  {
    title: 'Interact with ChatGPT',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_firmware_re_fgdy.svg').default,
    description: (
      <>
        Get <Link to="/docs/OpenAI/useCases">Contextualized help</Link> with ChatGPT to facilitate your work.
      </>
    ),
  },
  {
    title: 'Compare records',
    version: '0.1.0',
    Svg: require('../../static/img/undraw_split_testing_l1uw.svg').default,
    description: (
      <>
        Compare <Link to="/docs/OpenAI/useCases">Flexipages</Link> or any other record in your orgs.
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
  {
    title: 'Security',
    version: '0.2.0',
    Svg: require('../../static/img/undraw_security_on_re_e491.svg').default,
    description: (
      <>
       Explore your org  <Link to="/docs/Security/">security model</Link>: <ul><li>Compare psets or profile</li><li>Analyze OWD</li><li>...</li></ul>   
       
      </>
    ),
  },

];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4 col--center')}>
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
