import { Injectable } from '@nestjs/common';

@Injectable()
export class StringUtils {
  public toUpperCase(text: string) {
    return text.toUpperCase();
  }

  public toLowerCase(text: string) {
    return text.toLocaleLowerCase();
  }
}
