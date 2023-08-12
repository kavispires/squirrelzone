import { SectionKind, Skill, SkillLevel } from './Enums';
import { LineId, PartId, SectionId, SongUID } from './aliases';

/**
 * A song
 */
export interface Song {
  /**
   * The ID of the song.
   */
  id: SongUID;
  /**
   * The type of the record.
   */
  type: 'song';
  /**
   * The title of the song.
   */
  title: string;
  /**
   * The version of the song (single, remix, radio edit, etc.)
   */
  version: string;
  /**
   * The YouTube video ID of the song.
   */
  videoId: string;
  /**
   * The duration of the song in seconds.
   */
  duration: number;
  /**
   * The genre of the song.
   */
  genre: string;
  /**
   * The style of the song (ballad, dance, etc.)
   */
  style: string;
  /**
   * The key of the song.
   */
  scale: string;
  /**
   * The tempo of the song.
   */
  tempo: number;
  /**
   * The date the record was created.
   */
  createdAt: Date;
  /**
   * The date the record was last updated.
   */
  updatedAt: Date;
  /**
   * A JSON stringified version of a song with sections, lines, and parts
   */
  data: Section[];
}

/**
 * A section of a song.
 * A section is composed of one or more lines.
 * A section is a verse, chorus, bridge, etc.
 */
export interface Section {
  /**
   * The ID of the section.
   */
  id: SectionId;
  /**
   * The type of the record.
   */
  type: 'section';
  /**
   * The kind of section it is.
   */
  kind: SectionKind;
  /**
   * Order list of lines in the section.
   */
  lines: Line[];
}

/**
 * A line of a song.
 * A line is composed of one or more parts.
 */
export interface Line {
  /**
   * The ID of the line.
   */
  id: LineId;
  /**
   * The type of the record.
   */
  type: 'line';
  /**
   * The child parts it contains.
   */
  parts: Part[];
  /**
   * Indicator if the line can be ignored during the distribution visualization.
   */
  dismissible?: boolean;
  /**
   *
   */
  skill?: {
    skill: Skill;
    level: SkillLevel;
    subtype: string;
  };
}

/**
 * A part of a song.
 */
export interface Part {
  /**
   * The ID of the part.
   */
  id: PartId;
  /**
   * The type of the record.
   */
  type: 'part';
  /**
   * The text of the part.
   */
  text: string;
  /**
   * The start time of the part in milliseconds.
   */
  startTime: number;
  /**
   * The end time of the part in milliseconds.
   */
  endTime: number;
}
