import { graphql } from 'gatsby';
import * as React from 'react';
import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
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

export interface FellowshipProps {
  data: {
    shareImage: {
      childImageSharp: {
        fixed: any;
      };
    };
  }
}


const Fellowship: React.FunctionComponent<FellowshipProps> = props => {
  return (
    <IndexLayout>
      <Helmet>
        <title>Juan Gonzales Fellowship</title>
        <meta name="description" content="NAHJ Bay Area is proud to present the Juan Gonzales Fellowship, a 12-week paid summer fellowship at Accion Latina, Publisher of El Tecolote Newspaper." />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Juan Gonzales Fellowship" />
        <meta property="og:description" content="NAHJ Bay Area is proud to present the Juan Gonzales Fellowship, a 12-week paid summer fellowship at Accion Latina, Publisher of El Tecolote Newspaper." />
        <meta property="og:url" content={config.siteUrl + '/fellowship'} />
        <meta
          property="og:image" content={config.siteUrl + props.data.shareImage.childImageSharp.fixed.src} />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content="NAHJ Bay Area is proud to present the Juan Gonzales Fellowship, a 12-week paid summer fellowship at Accion Latina, Publisher of El Tecolote Newspaper." />
        <meta name="twitter:url" content={config.siteUrl + '/fellowship'} />
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
           
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYptQYQZQyOZRzSunk04VzdFnDCRuxcu1chnxsz7Jln_wbPA/viewform?embedded=true" width="100%" height="5247" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
              </div>
            </PostFullContent>
          </article>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Fellowship;


export const pageQuery = graphql`
  query {
    shareImage: file(relativePath: { eq: "img/2019/accionlatina/012418_meeting.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
