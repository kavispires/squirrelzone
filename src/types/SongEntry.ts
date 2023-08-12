import { Song } from './Song';

/**
 * A snippet of a song.
 * Used for lists of songs.
 */
export type SongEntry = Pick<Song, 'id' | 'type' | 'title' | 'version' | 'duration' | 'genre' | 'style'>;
