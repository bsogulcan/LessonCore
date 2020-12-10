import { LessonTemplatePage } from './app.po';

describe('Lesson App', function() {
  let page: LessonTemplatePage;

  beforeEach(() => {
    page = new LessonTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
