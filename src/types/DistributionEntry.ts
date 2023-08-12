import { Distribution } from './Distribution';

export type DistributionEntry = Pick<
  Distribution,
  'id' | 'type' | 'name' | 'title' | 'songId' | 'groupId' | 'stats'
>;
