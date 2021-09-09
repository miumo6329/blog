import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h3>当サイトについて</h3>
                <p>
                  日々の作業記録、コードの覚書等を掲載します。<br></br>
                  基本的には自分用ですが、どこかで誰かの役に立てば幸いです。<br></br>
                  GitHub：
                  <Link to={`https://github.com/miumo2020`}>https://github.com/miumo2020</Link>
                </p>

                <h3>免責事項</h3>
                <p>
                  当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、
                  必ずしもそれらの正確性や安全性を保障するものではありません。
                  当サイトをご利用することで発生したトラブルや損害に関しては一切の責任を負いかねますので、あらかじめご了承ください。
                  <br></br>
                  本免責事項、および当サイトに掲載しているすべての記事は、予告なく変更・削除されることがあります。
                </p>
                <h3>著作権・肖像権について</h3>
                <p>
                  当サイトに掲載されている文章・画像・動画等の著作物の情報を無断で転載・使用することを禁止します。
                  引用する際は、引用元を明示いただくようお願い致します。
                </p>

                <h3>リンクについて</h3>
                <p>
                  当サイトはリンクフリーですが、画像への直リンクやインラインフレームの使用はお断り致します。
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
