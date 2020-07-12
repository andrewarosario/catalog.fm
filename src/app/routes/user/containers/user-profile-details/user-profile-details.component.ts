import { Component, ViewChild, OnDestroy } from '@angular/core';
import { UserProfileFacade } from '../../user-profile.facade';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetInfoTrackComponent } from '@shared/components/bottom-sheet-info-track/bottom-sheet-info-track.component';
import { RecentTrack } from '@core/profile/models/profile';
import { take } from 'rxjs/operators';
import { PeriodLastfm } from '@core/lastfm/models/periods';
import { MatTabGroup } from '@angular/material/tabs';
import { UserInfo } from '../../interfaces/user-resources';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.scss']
})
export class UserProfileDetailsComponent implements OnDestroy {

  @ViewChild('matTabGroup') matTabGroup: MatTabGroup;

  constructor(
    public facade: UserProfileFacade,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnDestroy(): void {
    this.facade.setTabIndex(this.matTabGroup.selectedIndex);
    this.facade.setProfileItens();
  }

  public openTrackOptions(track: RecentTrack) {
    const ref = this.bottomSheet.open(BottomSheetInfoTrackComponent, { data: track });
    ref.instance.onClose.pipe(take(1)).subscribe(() => ref.dismiss());
  }

  public changeTopArtists(userName: string, userInfo: UserInfo) {
    this.facade.getTopArtists(userName, userInfo).subscribe();
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
