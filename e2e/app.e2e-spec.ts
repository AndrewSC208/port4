import { Port4Page } from './app.po';

describe('port4 App', function() {
  let page: Port4Page;

  beforeEach(() => {
    page = new Port4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
