import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from 'emotion';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background #fff;
    padding-bottom: 4vw;
  }
`;


const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper className={`${PageTemplate}`}>
      <header className={`${SiteHeader} ${outer} siteheader`}>
        <div className={`${inner}`}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
        <article className={`${PostFull} post page ${NoImage}`}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">

              <p>
                NAHJ Bay Area is a chapter of The National Association of Hispanic Journalists dedicated in building a diverse community of journalism professionals and students, help advance in their education and careers and to foster an accurate and fair portrayal of Latinos in the news media.
              </p>
              <p>
                We support journalists throughout their careers with community-building social events, scholarships, workshops and mentorships.
              </p>

              <p>
                Estamos aquí para ayudar!
              </p>

              <h4>Current board</h4>
              <p>
                President: <a href="https://twitter.com/luciovilla" target="_blank">Lucio Villa</a><br />
                Vice President: <a href="https://twitter.com/nateog" target="_blank">Nathan Olivarez-Giles</a><br />
                Secretary: <a href="https://twitter.com/EricaArgueta" target="_blank">Erica Argueta</a><br />
                Treasurer: <a href="https://twitter.com/SantiagoMejia" target="_blank">Santiago Mejia</a>
              </p>
              
              <p><a href="http://nahj.org/membership-2/">Become a member!</a></p>

            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
