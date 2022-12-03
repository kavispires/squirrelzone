function parseSetup(str: string) {
  let update: Record<string, number> = {};
  str.split(',').forEach((key) => {
    const entries: Record<string, Record<string, number>> = {
      stagePresence: { 'stats.general.stagePresence': 0 },
      visual: { 'stats.general.visual': 0 },
      charisma: { 'stats.general.charisma': 0 },
      rhetoric: { 'stats.general.rhetoric': 0 },
      leadership: { 'stats.general.leadership': 0 },
      learning: { 'stats.skills.learning': 0 },
      memory: { 'stats.skills.memory': 0 },
      sanity: { 'stats.skills.sanity': 0 },
      stamina: { 'stats.skills.stamina': 0 },
      adaptability: { 'stats.skills.adaptability': 0 },
      discipline: { 'stats.personality.discipline': 0 },
      curiosity: { 'stats.personality.curiosity': 0 },
      extroversion: { 'stats.personality.extroversion': 0 },
      sensitivity: { 'stats.personality.sensitivity': 0 },
      gentleness: { 'stats.personality.gentleness': 0 },
      sincerity: { 'stats.personality.sincerity': 0 },
      intelligence: { 'stats.personality.intelligence': 0 },
      happiness: { 'stats.personality.happiness': 0 },
      likeability: { 'stats.multipliers.likeability': 0 },
      notability: { 'stats.multipliers.notability': 0 },
      style: { 'stats.multipliers.style': 0 },
      luck: { 'stats.multipliers.luck': 0 },
    };
    const entry = entries?.[key] ?? {};

    update = { ...update, ...entry };
  });
  return update;
}

export function createTraits() {
  return TEMP.map((temp) => {
    const keyword = temp.Name.toUpperCase().split(' ').join('_');

    const update = parseSetup(temp.Setup);

    return {
      keyword: keyword,
      title: temp.Name,
      description: '',
      type: temp.Type,
      group: temp.Group,
      setup: {
        update,
      },
      effect: 'TDB',
    };
  });
}

export function createInterests() {
  return TEMP_INTEREST.map((temp) => {
    const keyword = temp.Name.toUpperCase().split(' ').join('_');

    const update = {
      ...parseSetup(temp.Personality),
      ...parseSetup(temp.Skills),
      ...parseSetup(temp.Multipliers),
    };

    return {
      keyword: keyword,
      title: temp.Name,
      description: '',
      type: temp.Type,
      group: temp.Group,
      setup: {
        update,
      },
      effect: 'TDB',
    };
  });
}

const TEMP = [
  {
    Name: 'Alcoholic',
    Type: 'secret',
    Group: 'health',
    Setup: 'likeability,discipline',
  },
];

const TEMP_INTEREST = [
  {
    Name: 'Talking on the phone',
    Type: 'interest',
    Group: 'action',
    Personality: 'sincerity',
    Skills: '',
    Multipliers: '',
  },
];
