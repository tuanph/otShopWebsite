import { OtShopWebsitePage } from './app.po';

describe('ot-shop-website App', () => {
  let page: OtShopWebsitePage;

  beforeEach(() => {
    page = new OtShopWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
