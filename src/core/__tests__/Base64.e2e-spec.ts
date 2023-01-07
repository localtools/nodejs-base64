import { Base64 } from '../Base64';

describe('Base64', () => {
  it('should encode and decode text correctly', () => {
    const text = 'hello world';
    const encodedText = Base64.encode({ text });
    const decodedText = Base64.decode({ base64Text: encodedText });
    expect(decodedText).toEqual(text);
  });
});
