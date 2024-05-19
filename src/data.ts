export const habitSeed = [
  {
    name: 'Exercise',
    category: 'body',
    variants: [
      {
        name: 'Push up',
        levels: [
          { level: 'gold', name: '15 times' },
          { level: 'silver', name: '10 times' },
          { level: 'bronze', name: '5 times' },
        ],
      },
      {
        name: 'Jogging',
        levels: [
          { level: 'gold', name: '5 km' },
          { level: 'silver', name: '2.5 km' },
          { level: 'bronze', name: '1 km' },
        ],
      },
      {
        name: 'Cycling',
        levels: [
          { level: 'gold', name: '60 minutes' },
          { level: 'silver', name: '30 minutes' },
          { level: 'bronze', name: '15 minutes' },
        ],
      },
    ],
    status: '',
    habitDone: {
      variantName: 'Jogging',
      selectedLevel: {
        level: 'bronze',
        name: '1 km',
      },
    },
  },
  {
    name: 'Study',
    category: 'mind',
    variants: [
      {
        name: 'Read book',
        levels: [
          { level: 'gold', name: '60 minutes' },
          { level: 'silver', name: '30 minutes' },
          { level: 'bronze', name: '15 minutes' },
        ],
      },
      {
        name: 'Leetcode',
        levels: [
          { level: 'gold', name: '3 questions' },
          { level: 'silver', name: '2 questions' },
          { level: 'bronze', name: '1 questions' },
        ],
      },
      {
        name: 'English',
        levels: [
          { level: 'gold', name: '60 minutes' },
          { level: 'silver', name: '30 minutes' },
          { level: 'bronze', name: '15 minutes' },
        ],
      },
    ],
    status: 'skip',
    habitDone: {
      variantName: 'Leetcode',
      selectedLevel: {
        level: 'silver',
        name: '2 questions',
      },
    },
  },
  {
    name: 'Ritual',
    category: 'soul',
    variants: [
      {
        name: 'Meditation',
        levels: [
          { level: 'gold', name: '30 minutes' },
          { level: 'silver', name: '15 minutes' },
          { level: 'bronze', name: '5 minutes' },
        ],
      },
      {
        name: 'Yoga',
        levels: [
          { level: 'gold', name: '60 minutes' },
          { level: 'silver', name: '30 minutes' },
          { level: 'bronze', name: '15 minutes' },
        ],
      },
    ],
    status: 'done',
    habitDone: {
      variantName: 'Meditation',
      selectedLevel: {
        level: 'gold',
        name: '30 minutes',
      },
    },
  },
];
