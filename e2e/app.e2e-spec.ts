import { ComplexPortalViewPage } from './app.po';

describe('complex-portal-view App', function() {
  let page: ComplexPortalViewPage;

  beforeEach(() => {
    page = new ComplexPortalViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
