export interface TempTrait {
  keyword: string;
  title: string;
  description: string;
  type: string;
  group: string;
  setup: {
    update: Record<string, string>;
  };
  effect: string;
}

const parseEntries = (list: Record<string, string>[]): TempTrait[] => {
  return list.map((temp) => {
    const keyword = temp.Name.toUpperCase().split(' ').join('_');

    const update = parseUpdate(temp);

    return {
      keyword: keyword,
      title: temp.Name,
      description: '',
      type: temp.Type,
      group: temp.Group,
      track: temp.Track,
      setup: {
        update,
      },
      effect: 'TDB',
    };
  });
};

function parseValues(keys: string, values: string, keyPrefix: string, valueKeyCode: Record<string, string>) {
  const keyList = keys.split(',').map((k: string) => `${keyPrefix}.${k}`);
  const valueList = values.split(',').map((v: string) => valueKeyCode[v]);

  return keyList.reduce((acc: Record<string, string>, e, index) => {
    acc[e] = valueList[index];
    return acc;
  }, {});
}

function parseUpdate(e: Record<string, any>) {
  const update = {
    // Stage
    ...parseValues(e.Stage, e.Stage_value, 'stats.stage', {
      '+': 'D6.ADD',
      '-': 'D6.SUBTRACT',
    }),
    // Personality
    ...parseValues(e.Personality, e.Personality_value, 'stats.personality', {
      '+++': 'RANGE.MOST',
      '++': 'RANGE.MORE',
      '+': 'RANGE.SOME',
      '-': 'RANGE.BIT',
      '--': 'RANGE.LESS',
      '---': 'RANGE.LEAST',
    }),
    // Skills
    ...parseValues(e.Skills, e.Skills_value, 'stats.skills', {
      '-': 'PERCENTAGE.DOWN',
      '+': 'PERCENTAGE.UP',
      '+++': 'PERCENTAGE.MAX',
      '---': 'PERCENTAGE.MIN',
    }),
    // Multipliers
    ...parseValues(e.Multipliers, e.Multipliers_value, 'stats.multipliers', {
      '-': 'MULTIPLIER.NEGATIVE',
      '+': 'MULTIPLIER.POSITIVE',
      u: 'MULTIPLIER.ULTRA',
    }),
  };

  return update;
}

const personalities = [
  {
    Name: 'Action Figure Collector',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion',
    Personality_value: '--',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Anime',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion',
    Personality_value: '---',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Baking',
    Type: 'interest',
    Group: 'activity',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline',
    Personality_value: '++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Basketball',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: 'style',
    Multipliers_value: '+',
  },
  {
    Name: 'Board Games',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion,gentleness,intelligence',
    Personality_value: '--,-,+',
    Skills: 'adaptability',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Bowling',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Calligraphy',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Can collector',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,extroversion',
    Personality_value: '+,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Card collector',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,extroversion',
    Personality_value: ',--',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Chatting',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion',
    Personality_value: '++',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '+',
  },
  {
    Name: 'Chewing gum',
    Type: 'interest',
    Group: 'habit',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability,likeability',
    Multipliers_value: '+,-',
  },
  {
    Name: 'Chill',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'style',
    Multipliers_value: '+',
  },
  {
    Name: 'Coin collector',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,extroversion',
    Personality_value: '+,---',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Comics',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion,intelligence',
    Personality_value: '--,-',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Cooking',
    Type: 'interest',
    Group: 'activity',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Cracking joints',
    Type: 'interest',
    Group: 'habit',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability,likeability',
    Multipliers_value: '+,-',
  },
  {
    Name: 'Crossword puzzles',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion,intelligence',
    Personality_value: '+,+++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Cycling',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Doodling',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity,sensitivity',
    Personality_value: '+,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Drawing',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Drinking',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Fashion design',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity,gentleness',
    Personality_value: '++,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Fishing',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline',
    Personality_value: '+++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Foodie',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '+',
  },
  {
    Name: 'Gambling',
    Type: 'interest',
    Group: 'activity',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline',
    Personality_value: '---',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Gardening',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'gentleness',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Going to the beach',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '-',
  },
  {
    Name: 'Graphic Designer',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Gym',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion,gentleness,intelligence,discipline',
    Personality_value: '++,--,--,++',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Had a band',
    Type: 'interest',
    Group: 'music',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,curiosity',
    Personality_value: '+,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Jogging',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'happiness,discipline',
    Personality_value: '+,+',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Journaling',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion,gentleness,intelligence',
    Personality_value: '--,+,+',
    Skills: 'sanity',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Karate',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Knitting',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'LEGO sets',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion',
    Personality_value: '--',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Magic',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity,extroversion',
    Personality_value: '+++,-',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Movies',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '-',
  },
  {
    Name: 'Music producer',
    Type: 'interest',
    Group: 'music',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Nap',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '-',
  },
  {
    Name: 'Origami',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity,discipline,gentleness',
    Personality_value: '+,++,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Painting',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity,sensitivity',
    Personality_value: '+,++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Party planning',
    Type: 'interest',
    Group: 'activity',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion,discipline',
    Personality_value: '+,++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Photography',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity,gentleness',
    Personality_value: '+,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Playing cards',
    Type: 'interest',
    Group: 'activity',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'luck',
    Multipliers_value: '+',
  },
  {
    Name: 'Playing darts',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion',
    Personality_value: '++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Plays bass',
    Type: 'interest',
    Group: 'music',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion,discipline',
    Personality_value: '--,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Plays drums',
    Type: 'interest',
    Group: 'music',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,curiosity',
    Personality_value: '-,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Plays guitar',
    Type: 'interest',
    Group: 'music',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,curiosity',
    Personality_value: '+,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Plays piano',
    Type: 'interest',
    Group: 'music',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,curiosity',
    Personality_value: '++,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Plays violin',
    Type: 'interest',
    Group: 'music',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,curiosity',
    Personality_value: ',+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Poetry writing',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Puzzle',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'intelligence',
    Personality_value: '',
    Skills: 'memory',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Reading',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'sensitivity,intelligence',
    Personality_value: '+,++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Rock Climbing',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Running',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'happiness',
    Personality_value: '++',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Sculpture',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity,discipline',
    Personality_value: '+,+++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Shoe collector',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,extroversion',
    Personality_value: ',+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Sleeping',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline',
    Personality_value: '-',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '-',
  },
  {
    Name: 'Sports',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'extroversion,gentleness,intelligence,happiness',
    Personality_value: '+,--,-,+',
    Skills: 'stamina,adaptability',
    Skills_value: '+,+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Stretching',
    Type: 'interest',
    Group: 'habit',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '+',
  },
  {
    Name: 'Sunbathing',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '-',
  },
  {
    Name: 'Surfing',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Swimming',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'T-shirt making',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity,gentleness',
    Personality_value: '++,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Table tennis',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Talking on the phone',
    Type: 'interest',
    Group: 'action',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'sincerity,extroversion,discipline',
    Personality_value: '++,+,--',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Traveling',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'curiosity',
    Personality_value: '+',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '-',
  },
  {
    Name: 'Tutoring',
    Type: 'interest',
    Group: 'nerd',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'intelligence',
    Personality_value: '+++',
    Skills: 'learning',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'TV Shows',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '-',
  },
  {
    Name: 'Vinyl collector',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,curiosity',
    Personality_value: '+,+',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Volunteering',
    Type: 'interest',
    Group: 'activity',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'gentleness',
    Personality_value: '++',
    Skills: '',
    Skills_value: '',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Walking',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: 'stamina',
    Skills_value: '',
    Multipliers: 'notability',
    Multipliers_value: '-',
  },
  {
    Name: 'Watches collector',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'discipline,extroversion',
    Personality_value: ',+',
    Skills: '',
    Skills_value: '',
    Multipliers: 'style',
    Multipliers_value: '',
  },
  {
    Name: 'Wine tasting',
    Type: 'interest',
    Group: 'basic',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: '',
    Personality_value: '',
    Skills: '',
    Skills_value: '',
    Multipliers: 'style',
    Multipliers_value: '+',
  },
  {
    Name: 'Yoga',
    Type: 'interest',
    Group: 'sport',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'gentleness',
    Personality_value: '++',
    Skills: 'stamina',
    Skills_value: '+',
    Multipliers: '',
    Multipliers_value: '',
  },
  {
    Name: 'Video Games',
    Type: 'interest',
    Group: 'hobby',
    Track: '',
    Stage: '',
    Stage_value: '',
    Personality: 'gentleness',
    Personality_value: '-',
    Skills: 'adaptability',
    Skills_value: '-',
    Multipliers: '',
    Multipliers_value: '',
  },
];

export const result = parseEntries(personalities);
