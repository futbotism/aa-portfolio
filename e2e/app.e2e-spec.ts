import { AaPortfolioPage } from './app.po';

describe('aa-portfolio App', function() {
  let page: AaPortfolioPage;

  beforeEach(() => {
    page = new AaPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
