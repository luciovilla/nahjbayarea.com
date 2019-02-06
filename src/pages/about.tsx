import { graphql } from 'gatsby';
import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from 'emotion';
import config from '../website-config';

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

export interface AboutProps {
  data: {
    shareImage: {
      childImageSharp: {
        fixed: any;
      };
    };
  }
}



const About: React.FunctionComponent<AboutProps> = props => {
  return (
    <IndexLayout>
      <Helmet>
        <title>About NAHJ Bay Area</title>
        <meta name="description" content="NAHJ Bay Area is a chapter of The National Association of Hispanic Journalists dedicated in building a diverse community of journalism professionals and students, help advance in their education and careers and to foster an accurate and fair portrayal of Latinos in the news media." />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About NAHJ Bay Area" />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl + '/about'} />
        <meta
          property="og:image" content={config.siteUrl + props.data.shareImage.childImageSharp.fixed.src} />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content="{config.description}" />
        <meta name="twitter:url" content={config.siteUrl + '/about'} />
        <meta name="twitter:image" content={config.siteUrl + props.data.shareImage.childImageSharp.fixed.src} />
        {config.twitter && (
          <meta name="twitter:site" content={`@${config.twitter.split('https://twitter.com/')[1]}`}/>
        )}
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
};

export default About;

export const pageQuery = graphql`
  query {
    shareImage: file(relativePath: { eq: "img/2018/madoak/group1.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
