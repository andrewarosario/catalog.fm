interface TrackScrobble {
  id?: string;
  album: string;
  artist: string;
  song: string;
}

interface ScrobbleResponse {
  scrobbles: {
    '@attr': {
      accepted: number;
      ignored: number;
    };
    scrobble: {
      album: CorrectedObject;
      albumArtist: CorrectedObject;
      artist: CorrectedObject;
      ignoredMessage: {
        code: string;
        '#text': string;
      };
      timestamp: string;
      track: CorrectedObject;
    };
  };
}
