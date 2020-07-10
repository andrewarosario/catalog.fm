import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistAdapterService {

  public adaptLastfmArtist(
    lastfmResponse: ArtistInfoResponse,
    theAudioDbResponse: TheAudioDbArtist
  ): Artist {
    const artist = lastfmResponse.artist;
    return {
      name: artist.name,
      listeners: +artist.stats.listeners,
      playcount: +artist.stats.playcount,
      tags: artist.tags.tag.map(t => t.name),
      onTour: !!+artist.ontour,
      biography: artist.bio.summary,
      image: theAudioDbResponse?.strArtistThumb,
      imageWithLogo: theAudioDbResponse?.strArtistWideThumb
    };
  }
}
