import { Component } from '@angular/core';
import { ScrobbleCacheFacade } from '../../scrobble-cache.facade';

@Component({
  selector: 'app-scrobble-cache',
  templateUrl: './scrobble-cache.component.html',
  styleUrls: ['./scrobble-cache.component.scss']
})
export class ScrobbleCacheComponent {

  constructor(public facade: ScrobbleCacheFacade) { }

}
