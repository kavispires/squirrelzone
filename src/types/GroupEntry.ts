import { Group } from './Group';

/**
 * Snippet of a group
 * Used in lists
 */
export type GroupEntry = Pick<Group, 'id' | 'type' | 'name' | 'debutYear' | 'disbandmentYear'>;
