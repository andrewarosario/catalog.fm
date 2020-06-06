type Images = {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge';
}[];

interface CorrectedObject {
  corrected: '0' | '1';
  '#text': string;
}
