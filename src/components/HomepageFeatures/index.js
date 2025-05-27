import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Telegram Channel [RU]',
    url: 'https://t.me/digital_ponos',
    Svg: require('@site/static/img/undraw_social_sharing.svg').default,
    description: (
      <>
        Follow my <a href="https://t.me/digital_ponos" target="_blank" rel="noopener noreferrer">Telegram channel</a> where 
        I share thoughts on my work in 💻 tech, 📚 learning, 🌱 self-development, 🕒 productivity, and 🏥 health. <br />
        Web version of the channel is <a href="https://blog.afadeev.com" target="_blank" rel="noopener noreferrer">available on Teletype</a>.
      </>
    ),
  },
  {
    title: 'Goal Setting Guide [RU]',
    url: 'https://gs.afadeev.com',
    Svg: require('@site/static/img/undraw_goals.svg').default,
    description: (
      <>
        <div className={styles.paidBadge}>💎 Paid Content</div> <br />
        <a href="https://gs.afadeev.com" target="_blank" rel="noopener noreferrer">Практикум простых инструментов</a>, которые помогут 
        не откладывать дела и не тратить время на ожидание удобного момента 🎯
      </>
    ),
  },
  {
    title: 'Tech Blog [EN]',
    url: 'https://afadeev.substack.com',
    Svg: require('@site/static/img/undraw_blog.svg').default,
    description: (
      <>
        Follow my <a href="https://afadeev.substack.com" target="_blank" rel="noopener noreferrer">Substack blog</a> where 
        I write about software engineering, system architecture, infrastructure, and building things that scale 📝
      </>
    ),
  },
];

function Feature({Svg, title, description, url}) {
  const TitleComponent = () => (
    url ? (
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
        <Heading as="h3">{title}</Heading>
      </a>
    ) : (
      <Heading as="h3">{title}</Heading>
    )
  );

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
            <Svg className={styles.featureSvg} role="img" />
          </a>
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <TitleComponent />
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
