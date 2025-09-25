import type {ReactNode} from 'react';
import clsx from 'clsx';

import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Intelligent Code Assistance',
    description: (
      <>
        Real-time coding feedback and AI-powered smart contract generation.
        Get instant suggestions and improvements as you build.
      </>
    ),
  },
  {
    title: 'Security First',
    description: (
      <>
        Automated vulnerability scanning and security auditing.
        Catch issues before deployment with continuous security checks.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    description: (
      <>
        Works with your favorite tools - Cursor, VS Code, Claude Code, and more.
        MCP-powered for the latest Web3 documentation.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
