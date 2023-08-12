import { ArtistUID, DistributionUID, HSL, PartId } from './aliases';

/**
 * A distribution
 */
export interface Distribution {
  /**
   * The ID of the distribution.
   */
  id: DistributionUID;
  /**
   * The type of the record.
   */
  type: 'distribution';
  /**
   * The name of the distribution (original, cover, etc.)
   */
  name: string;
  /**
   * The title of the song it belongs to.
   */
  title: string;
  /**
   * The ID of the song this distribution belongs to. 1:1
   */
  songId: string;
  /**
   * The ID of the group this distribution belongs to. 1:1
   */
  groupId: string;
  /**
   * Stats with color and percentage
   */
  stats: DistributionStat[];
  /**
   * The parts assigned to each artist.
   */
  assignedParts: Record<PartId, ArtistUID[]>;
}

export interface DistributionStat {
  /**
   * The ID of the artist.
   */
  artistId: ArtistUID;
  /**
   * The signature hsl color of the artist.
   */
  color: HSL;
  /**
   * The absolute value in the distribution (TODO: of what? duration?)
   */
  value: number;
}
