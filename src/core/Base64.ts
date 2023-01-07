import NodeBuffer from 'buffer';

import type { EncodeArgs } from '../shared/types/Base64.type';
import type { DecodeArgs } from '../shared/types/Base64.type';

export class Base64 {
  public static encode(args: EncodeArgs): string {
    const { text } = args;
    if (!text) {
      throw new Error('Invalid text');
    }
    return NodeBuffer.Buffer.from(text).toString(args.encoding || 'base64', args.start, args.end);
  }

  public static decode(args: DecodeArgs): string {
    const { base64Text } = args;
    if (!base64Text) {
      throw new Error('Invalid text');
    }
    return NodeBuffer.Buffer.from(base64Text, args.fromEncoding || 'base64').toString(args.outputEncoding || 'utf8');
  }
}
export default Base64;
