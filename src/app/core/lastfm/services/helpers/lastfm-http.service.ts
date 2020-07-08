import { Injectable } from '@angular/core';
import * as md5 from 'md5';
import { LastfmHttp } from '../../models/last-fm-http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class LastfmHttpService {

  private readonly base = 'https://ws.audioscrobbler.com/2.0/';

  constructor() {
  }

  private get urlJSON() {
    return this.base + '?format=json&';
  }

  private encode(str: string) {
    return encodeURIComponent(str).replace(/%20/g, '+');
  }

  protected buildURL({ method, data = {}, encode = [] }: LastfmHttp) {
    const allHashData = Object.assign({}, data, { api_key: environment.apiKey, method });
    const hash = this.getHash(allHashData);
    const signature = md5(hash);
    const allUrlData = Object.assign({}, allHashData, { api_sig: signature });

    return this.urlJSON +
              Object
                .keys(allUrlData)
                .sort()
                .map(key => this.getKeyURL(key, allUrlData, encode))
                .join('&');
  }

  private getHash(allHashData): string {
    return Object
            .keys(allHashData)
            .sort()
            .map(key => key + allHashData[key])
            .join('') + environment.apiSecret;
  }

  private getKeyURL(key: string, allUrlData, encode) {
    const returnKey =
      (encode.indexOf(key) !== -1)
        ? this.encode(allUrlData[key])
        : allUrlData[key];

    return key + '=' + returnKey;
  }
}
