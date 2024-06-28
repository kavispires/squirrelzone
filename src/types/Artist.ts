import { Build, Height, Species, Track } from './Enums';
import { ArtistUID, GroupUID, HSL } from './aliases';

/**
 * A artist
 */
export interface Artist {
  /**
   * The ID of the artist.
   */
  id: ArtistUID;
  /**
   * The type of the document.
   */
  type: 'artist';
  /**
   * The name of the artist.
   */
  name: string;
  /**
   * The DNA of the artist (used to determine SVG appearance)
   */
  dna: string;
  /**
   * The signature hsl color of the artist.
   */
  color: HSL;
  /**
   * The area of focus of the artist.
   */
  track: Track;
  /**
   * The sage of the artist.
   */
  age: number;
  /**
   * The species of the artist.
   */
  species: Species;
  /**
   * The height of the artist.
   */
  height: Height;
  /**
   * The build of the artist.
   */
  build: Build;
  /**
   * The full name of the artist.
   */
  fullName?: string;
  /**
   * The codename of the artist.
   */
  codename?: string;
  /**
   * The tagline of the artist.
   */
  tagLine?: string;
  /**
   * Linked groups.
   */
  groups?: GroupUID[];
}
