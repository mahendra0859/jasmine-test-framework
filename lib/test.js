describe('Hello World', () => {
  beforeEach(() => {
    expected = 'Hello World!';
  });
  afterEach(() => {
    expected = '';
  });
  it('says Hello', () => {
    expect(helloworld()).toEqual(expected);
  });
});
