import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistAdapterService {

  public adaptLastfmArtist(response: ArtistInfoResponse): Artist {
    const artist = response.artist;
    return {
      name: artist.name,
      listeners: +artist.stats.listeners,
      playcount: +artist.stats.playcount,
      tags: artist.tags.tag.map(t => t.name),
      onTour: !!+artist.ontour,
      biography: artist.bio.summary
    };
  }
}
