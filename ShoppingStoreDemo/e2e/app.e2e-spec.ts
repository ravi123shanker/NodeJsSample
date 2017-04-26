import { ShoppingStoreDemoPage } from './app.po';

describe('shopping-store-demo App', () => {
  let page: ShoppingStoreDemoPage;

  beforeEach(() => {
    page = new ShoppingStoreDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
