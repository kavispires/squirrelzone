import { ArtistEntry } from './ArtistEntry';
import { GroupUID } from './aliases';

/**
 * A performing group
 */
export interface Group {
  /**
   * The ID of the group.
   */
  id: GroupUID;
  /**
   * The name of the group.
   */
  name: string;
  /**
   * The type of the record.
   */
  type: 'group';
  /**
   * The year the group was formed.
   */
  debutYear: number;
  /**
   * The year the group disbanded.
   */
  disbandmentYear: number;
  /**
   * The members in the group.
   */
  members: ArtistEntry[];
}
