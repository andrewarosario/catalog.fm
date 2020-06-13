import { Component, Inject, EventEmitter } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ScrobbleMessageService } from '@shared/services/usecases/scrobble-message.service';

@Component({
  selector: 'app-bottom-sheet-info-track',
  templateUrl: './bottom-sheet-info-track.component.html',
  styleUrls: ['./bottom-sheet-info-track.component.scss']
})
export class BottomSheetInfoTrackComponent {

  public onScrobble = new EventEmitter();

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: TrackScrobble,
    private scrobbleMessageService: ScrobbleMessageService
  ) {}

  public scrobble(): void {
    this.scrobbleMessageService.scrobble(this.data).subscribe(
      res => this.onScrobble.emit()
    );
  }


}
