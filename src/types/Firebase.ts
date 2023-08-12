import { Artist } from './Artist';
import { ArtistEntry } from './ArtistEntry';
import { Distribution } from './Distribution';
import { DistributionEntry } from './DistributionEntry';
import { Group } from './Group';
import { GroupEntry } from './GroupEntry';
import { Song } from './Song';
import { SongEntry } from './SongEntry';
import { ArtistUID, DistributionUID, GroupUID, SongUID } from './aliases';

export interface FirestoreDatabase {
  /**
   * Collection of groups
   */
  groups: Record<GroupUID, Group>;
  /**
   * Collection of artists
   */
  artists: Record<ArtistUID, Artist>;
  /**
   * Collection of songs
   */
  songs: Record<SongUID, Song>;
  /**
   * Collection of distributions
   */
  distributions: Record<DistributionUID, Distribution>;
  /**
   * Collections of lists of artists, groups, and songs
   */
  listings: {
    artists: ArtistEntry[];
    groups: GroupEntry[];
    songs: SongEntry[];
  };
  /**
   * List of distributions per an artist with snippet details of each song
   */
  discography: Record<GroupUID, DistributionEntry[]>;
}
