import { EventEmitter } from '@angular/core';
import { PeriodLastfm } from '@core/lastfm/models/periods';

export interface UserInfo {
  limit: number;
  page: number;
  period?: PeriodLastfm;
}

export interface UserResources {
  change: EventEmitter<UserInfo>;
}
