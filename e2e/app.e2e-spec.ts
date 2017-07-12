import { ImajnHomePage } from './app.po';

describe('imajn-home App', () => {
  let page: ImajnHomePage;

  beforeEach(() => {
    page = new ImajnHomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
