export type Encoding = BufferEncoding | undefined;
export type EncodeArgs = {
  text: string;
  encoding?: Encoding;
  start?: number | undefined;
  end?: number | undefined;
};
export type DecodeArgs = { base64Text: string; fromEncoding?: Encoding; outputEncoding?: Encoding };
