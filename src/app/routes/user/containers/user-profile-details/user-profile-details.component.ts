import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UserProfileFacade } from '../../user-profile.facade';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetInfoTrackComponent } from '@shared/components/bottom-sheet-info-track/bottom-sheet-info-track.component';
import { RecentTrack } from '@core/profile/models/profile';
import { take } from 'rxjs/operators';
import { PeriodLastfm } from '@core/lastfm/models/periods';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.scss']
})
export class UserProfileDetailsComponent implements OnInit, OnDestroy {

  @ViewChild('matTabGroup') matTabGroup: MatTabGroup;

  constructor(
    public facade: UserProfileFacade,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.facade.setTabIndex(this.matTabGroup.selectedIndex);
  }

  public openTrackOptions(track: RecentTrack) {
    const ref = this.bottomSheet.open(BottomSheetInfoTrackComponent, { data: track });
    ref.instance.onClose.pipe(take(1)).subscribe(() => ref.dismiss());
  }

  public changeTopArtists(userName: string, limit: number, page: number, period: PeriodLastfm) {
    this.facade.getTopArtists(userName, limit, page, period).subscribe();
  }

  public changeTopAlbums(userName: string, limit: number, page: number, period: PeriodLastfm) {
    this.facade.getTopAlbums(userName, limit, page, period).subscribe();
  }

  public changeTopTracks(userName: string, limit: number, page: number, period: PeriodLastfm) {
    this.facade.getTopTracks(userName, limit, page, period).subscribe();
  }

  public changeRecentTracks(userName: string, limit: number, page: number) {
    this.facade.getRecentTracks(userName, limit, page).subscribe();
  }

}
