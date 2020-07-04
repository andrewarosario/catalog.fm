import { Component, OnInit } from '@angular/core';
import { UserProfileFacade } from '../../user-profile.facade';
import { PageEvent } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetInfoTrackComponent } from '@shared/components/bottom-sheet-info-track/bottom-sheet-info-track.component';
import { RecentTrack } from '@core/models/profile';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.scss']
})
export class UserProfileDetailsComponent implements OnInit {

  constructor(
    public facade: UserProfileFacade,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
  }

  public changeRecentTracksPagination(userName: string, event: PageEvent) {
    this.facade.getRecentTracks(userName, event.pageSize, event.pageIndex + 1).subscribe();
  }

  public changeTopTracksPagination(userName: string, event: PageEvent) {
    this.facade.getTopTracks(userName, event.pageSize, event.pageIndex + 1).subscribe();
  }

  public changeTopArtistsPagination(userName: string, event: PageEvent) {
    this.facade.getTopArtists(userName, event.pageSize, event.pageIndex + 1).subscribe();
  }

  public changeTopAlbumsPagination(userName: string, event: PageEvent) {
    this.facade.getTopAlbums(userName, event.pageSize, event.pageIndex + 1).subscribe();
  }

  public openTrackOptions(track: RecentTrack) {
    const ref = this.bottomSheet.open(BottomSheetInfoTrackComponent, { data: track });
    ref.instance.onScrobble.pipe(take(1)).subscribe(() => ref.dismiss());
  }

}
