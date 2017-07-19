import { AngularTodoExamplePage } from './app.po';

describe('angular-todo-example App', () => {
  let page: AngularTodoExamplePage;

  beforeEach(() => {
    page = new AngularTodoExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
