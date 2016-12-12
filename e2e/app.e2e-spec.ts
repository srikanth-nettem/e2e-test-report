import { E2eTestReportPage } from './app.po';

describe('e2e-test-report App', function() {
  let page: E2eTestReportPage;

  beforeEach(() => {
    page = new E2eTestReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
