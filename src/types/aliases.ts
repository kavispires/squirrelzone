/**
 * The id of the firebase document.
 */
export type DocumentId = string;

/**
 * The id of the artist.
 */
export type ArtistUID = DocumentId;

/**
 * The id of the group.
 */
export type GroupUID = DocumentId;

/**
 * The id of the song.
 */
export type SongUID = DocumentId;

/**
 * The id of the distribution.
 */
export type DistributionUID = DocumentId;

/**
 * The id of the part in a song.
 */
export type PartId = string;

/**
 * The id of the line in a song.
 * A line is composed of one or more parts.
 */
export type LineId = string;

/**
 * The id of the section in a song.
 * A section is composed of one or more lines.
 */
export type SectionId = string;

/**
 * A color value alias with hue, saturation, and lightness, separated by `:`.
 * For example, `0:0:40`.
 */
export type HSL = string;
