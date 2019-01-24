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


const Fellowship: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Juan Gonzales Fellowship</title>
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
            <PostFullTitle>Juan Gonzales Fellowship</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                NAHJ Bay Area is proud to offer a 12-week paid summer fellowship at El Tecolote. The selected fellow will receive a stipend of $4,800 over the course of the program.
              </p> 
              <p>
                The fellowship is named after Juan Gonzales, the founder of El Tecolote and a 2009 NAHJ Hall of Fame Honoree.</p>
              <p>
                The Juan Gonzales Fellowship supports diverse journalists who are deeply interested in reporting the most urgent issues the Latino community faces.
              </p>
              <ul>
                <li>To challenge misinformation and disinformation</li>
                <li>To hold the powerful accountable</li>
                <li>To fight bias, intolerance and injustice</li>
              </ul>
              
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Fellowship;
