import { Ng2VideoChatPage } from './app.po';

describe('ng2-video-chat App', function() {
  let page: Ng2VideoChatPage;

  beforeEach(() => {
    page = new Ng2VideoChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
