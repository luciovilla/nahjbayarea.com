export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'NAHJ Bay Area',
  description: 'NAHJ Bay Area is a chapter of The National Association of Hispanic Journalists who is dedicated to building a diverse community of journalism professionals and students.',
  coverImage: 'img/bg.jpg',
  logo: 'img/logo.jpg',
  lang: 'en',
  siteUrl: 'http://nahjbayarea.com',
  facebook: 'https://www.facebook.com/nahjbayarea',
  twitter: 'https://twitter.com/nahjbayarea',
  showSubscribe: true,
  mailchimpAction: 'https://nahjbayarea.us12.list-manage.com/subscribe/post?u=0f68d4f24eba3fbc7553b7981&amp;id=6a79d702f5',
  mailchimpName: 'b_0f68d4f24eba3fbc7553b7981_6a79d702f5',
};

export default config;
