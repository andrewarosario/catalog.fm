export enum PeriodLastfm {
  Week = '7day',
  OneMonth = '1month',
  ThreeMonths = '3month',
  SixMonths = '6month',
  OneYear = '12month',
  Overall = 'overall',
}

export const PERIODS_LAST_FM = [
  { value: PeriodLastfm.Week, text: 'Última semana' },
  { value: PeriodLastfm.OneMonth, text: 'Último mês' },
  { value: PeriodLastfm.ThreeMonths, text: 'Últimos 3 meses' },
  { value: PeriodLastfm.SixMonths, text: 'Últimos 6 meses' },
  { value: PeriodLastfm.Overall, text: 'Todo o período' },
];
