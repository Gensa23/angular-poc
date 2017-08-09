import { APage } from './app.po';

describe('a App', () => {
  let page: APage;

  beforeEach(() => {
    page = new APage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
