import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function About() {
  return (
    <Layout
      title="About Me"
      description="About Alex Fadeev">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <div className={styles.profileImageContainer}>
            <img src="/img/me.jpg" alt="Alex Fadeev" className={styles.profileImage} />
          </div>
          <Heading as="h1" className="hero__title">
            About Me
          </Heading>
          {/* <p className="hero__subtitle">
            Software Engineer & Tech Enthusiast
          </p> */}
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="markdown">
              <div className="card margin-bottom--md">
                <div className="card__header">
                  <h3>👨‍💻 Introduction</h3>
                </div>
                <div className="card__body">
                  <p>
                    Hi, I'm Alex — a tech leader with a versatile background spanning software engineering, product management, 
                    team leadership, and strategic development. <br />
                    I mostly reside in Europe, Germany 🇩🇪
                  </p>
                  <p>
                    📧 <a href="mailto:alex@afadeev.com">alex@afadeev.com</a>
                  </p>
                </div>
              </div>
              
              <div className="card margin-bottom--md">
                <div className="card__header">
                  <h3>🛣️ My Journey</h3>
                </div>
                <div className="card__body">
                  <p>
                    I've worked on a wide range of products — from fintech apps to games, media platforms, web3/blockchain and ad tech. 
                    I started in the payments industry, then shifted into IT management, building mobile apps and gradually expanding into 
                    game development — working on both gaming apps and actual games.
                  </p>
                </div>
              </div>

              <div className="card margin-bottom--md">
                <div className="card__header">
                  <h3>❤️‍🩹 Health & Lifestyle</h3>
                </div>
                <div className="card__body">
                  <p>
                    I try to eat simple and focus on staying healthy.<br/>
                    <em>"Your current body is exactly the one you need for the kind of work and lifestyle you've chosen."</em>
                  </p>
                </div>
              </div>

              <div className="card margin-bottom--md">
                <div className="card__header">
                  <h3>✍️ Writing</h3>
                </div>
                <div className="card__body">
                  <p>
                    I've enjoyed writing since childhood and even had some published stories. <br/>
                    Now I run <a href="https://t.me/digital_ponos" target="_blank" rel="noopener noreferrer">Telegram blog</a> where 
                    I share thoughts on my work in tech, learning, self-development, productivity, and health.
                  </p>
                  <p>
                    <em>It's basically a lifelog of things I learn and review. I believe I'm pretty good at sorting complex 
                    things out and making sense of them — for myself and others.</em>
                  </p>
                </div>
              </div>

              <div className="card margin-bottom--md">
                <div className="card__header">
                  <h3>🤸 Sports</h3>
                </div>
                <div className="card__body">
                  <ul>
                    <li>Gym 🏋️‍♂️ <em> If you're not squatting twice your bodyweight, what are you even doing there? 🙃</em></li>
                    <li>Tennis 🎾</li>
                    <li>Diving 🌊</li>
                    <li>More...</li>
                  </ul>
                </div>
              </div>

              <div className="card margin-bottom--md">
                <div className="card__header">
                  <h3>🚗 Cars</h3>
                </div>
                <div className="card__body">
                  <p>
                    I'm into driving, motorsport, and car tech.<br/>
                    My first car was the cheapest BMW available in town 🙃<br/>
                    <a href="https://t.me/JaguarFCBot?start=466715" target="_blank" rel="noopener noreferrer">Join Jaguar Fun Clan</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 