export interface LastfmHttp {
  method: string;
  data?: { [key: string]: string };
  encode?: string[];
}
