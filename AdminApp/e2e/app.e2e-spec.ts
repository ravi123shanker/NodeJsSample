import { AdminAppPage } from './app.po';

describe('admin-app App', () => {
  let page: AdminAppPage;

  beforeEach(() => {
    page = new AdminAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
