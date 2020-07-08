import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PERIODS_LAST_FM, PeriodLastfm } from '@core/models/periods';
import { InfoResult } from '@core/models/profile';

@Component({
  selector: 'app-user-periods',
  templateUrl: './user-periods.component.html',
  styleUrls: ['./user-periods.component.scss']
})
export class UserPeriodsComponent implements OnInit {

  @Input() public info: InfoResult;
  @Output() public changePeriod = new EventEmitter<PeriodLastfm>();
  public periods = PERIODS_LAST_FM;
  constructor() { }

  ngOnInit(): void {
  }

}
