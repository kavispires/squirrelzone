import { Artist } from './Artist';

/**
 * Snippet data an artist.
 * Used in lists of artists
 */
export type ArtistEntry = Pick<Artist, 'id' | 'type' | 'name' | 'color' | 'dna' | 'track' | 'age'>;
