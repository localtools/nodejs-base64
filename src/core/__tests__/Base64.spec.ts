import { Base64 } from '../Base64';

describe('Base64', () => {
  describe('encode', () => {
    it('should encode a text string as a Base64 string', () => {
      const text = 'hello world';
      const expectedEncoding = 'aGVsbG8gd29ybGQ=';
      expect(Base64.encode({ text })).toEqual(expectedEncoding);
    });

    it('should throw an error if no text is provided', () => {
      expect(() => {
        Base64.encode(1 as any);
      }).toThrow('Invalid text');
    });
  });

  describe('decode', () => {
    it('should decode a Base64 string as a text string', () => {
      const base64Text = 'aGVsbG8gd29ybGQ=';
      const expectedText = 'hello world';
      expect(Base64.decode({ base64Text })).toEqual(expectedText);
    });

    it('should throw an error if no base64Text is provided', () => {
      expect(() => {
        Base64.decode(1 as any);
      }).toThrow('Invalid text');
    });
  });
});
