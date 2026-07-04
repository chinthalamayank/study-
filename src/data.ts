import { User, Achievement, GlossaryItem, RegistrationRequest, Chapter } from './types';

export const PRE_SEEDED_USERS: User[] = [
  {
    id: 'student-mayank',
    name: 'Chinthala Mayank',
    email: 'chinthalamayank@school.edu',
    role: 'admin',
    status: 'Active',
    joinedDate: 'Aug 15, 2023',
    overallProgress: 0,
    biologyProgress: 0,
    physicsProgress: 0,
    chemistryProgress: 0,
    biologyMCQs: 0,
    physicsMCQs: 0,
    chemistryMCQs: 0,
    biologyAcc: 0,
    physicsAcc: 0,
    chemistryAcc: 0,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnMSFtgiNw4N8tEAp5nELDgzJ_autdfZ-kfzq9XfOf4_raBjdcpbqOssPENHoddAcxOa-VER7hnABS_DyRk4q5PtLiT6I028HaF9wHgRZUe4yr8ZtXF387Yzwd6Odm_AuZcdTWKl0489dRgwSeo86Bq57cMD_yRRSY4mDdyKrobJttUBI1Ig3Tsilwuj_DN_TnadDcm9i-byS_KTU-9xCzuB5UDqIsAHhiKk2FDeUyez7NSrwAQu12PaJ0CMcH2qYkHk1GIZIC3-R7'
  },
  {
    id: 'student-anush',
    name: 'Kasheti Anush',
    email: 'kashetianush@school.edu',
    role: 'student',
    status: 'Active',
    joinedDate: 'Oct 12, 2023',
    overallProgress: 0,
    biologyProgress: 0,
    physicsProgress: 0,
    chemistryProgress: 0,
    biologyMCQs: 0,
    physicsMCQs: 0,
    chemistryMCQs: 0,
    biologyAcc: 0,
    physicsAcc: 0,
    chemistryAcc: 0,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtMknCUG212vpnYDJOVp8adXuEqEdkzO-y8jjkbbe4mjjUAPs0KiHuKbKl1mLUIAyTkDdS1q6kxCyfgqxPlo-mlilhx20tkaF3CTSuQGf43GxtYbYcb2Qggkfszm1Fy3EMzhaa9m2sTV5Jg_gzDmeofZurMMiV2ipUUfkgSRFpwK7XoX6HUUdAug0Lvr7_ye9w5KxDsAyv6KpjPizlZffvIztINTCfeWbCsBD9X7Beei3NBzZ3WbMYtYSVQkEnmKgzH96yRU4MD_Op'
  },
  {
    id: 'student-dhruvan',
    name: 'Bomma Dhruvan',
    email: 'bommadhruvan@school.edu',
    role: 'student',
    status: 'Active',
    joinedDate: 'Oct 14, 2023',
    overallProgress: 0,
    biologyProgress: 0,
    physicsProgress: 0,
    chemistryProgress: 0,
    biologyMCQs: 0,
    physicsMCQs: 0,
    chemistryMCQs: 0,
    biologyAcc: 0,
    physicsAcc: 0,
    chemistryAcc: 0,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9lu4Ay7QmluxSaJup18GntJBn6HlCLe9wGxyZO_malfk21PuAHjd8ophDU-CZTGIUN7A3AvLAWs1zhnCMzdLP1gZINC1TdOw2sMMx1a4EzKOu-KYo2clxFF-jZNBMKah7RKaEthrc5iotWL2BxK7OcDLmpAfdBLkhR-nnTm9C4TWXxBAl1F3afFCCipkuP869bamrajZy1Td6mC3lQgKvnARl7RqNgpCMkI4P31F_ujjaPaCsS3HvnswsbK2J1IdpN_zE4K1-PSdM'
  },
  {
    id: 'student-vihaan',
    name: 'Bomma Vihaan',
    email: 'bommavihaan@school.edu',
    role: 'student',
    status: 'Active',
    joinedDate: 'Oct 15, 2023',
    overallProgress: 0,
    biologyProgress: 0,
    physicsProgress: 0,
    chemistryProgress: 0,
    biologyMCQs: 0,
    physicsMCQs: 0,
    chemistryMCQs: 0,
    biologyAcc: 0,
    physicsAcc: 0,
    chemistryAcc: 0,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhd_uZLvNLN7sVBdUbckdiD-B5lqGXLZE5O3WYuIgv_qFul8ZdG1ACXMgH4IjyxsJK3iaoT7sJcFDdB4jO6OlBGLUOQ4s_QfOfoyK8iirTM6EGG1paB2BB_89AZRFUQhN1j9Gg9xInvDbeia3V3DIfCawbO2RIGS-4ITLyNHDKP9Jz_ZiK5dakAesqV5ZluOLLIbbtgyN_VvNqWCGBfZTfpQQurx8kspLlOwaVjx3FKAgiT1JmmBa2zh49czJUknT5-TmGnYc5uCts'
  },
  {
    id: 'student-abhinav',
    name: 'Gatla Abhinav',
    email: 'gatlaabhinav@school.edu',
    role: 'student',
    status: 'Active',
    joinedDate: 'Oct 20, 2023',
    overallProgress: 0,
    biologyProgress: 0,
    physicsProgress: 0,
    chemistryProgress: 0,
    biologyMCQs: 0,
    physicsMCQs: 0,
    chemistryMCQs: 0,
    biologyAcc: 0,
    physicsAcc: 0,
    chemistryAcc: 0,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6E68J-UWxGVEq3W654izou2yyKtrdjiWktNwbVQNpyXMJLBsqEIRJICcaTm7odjKGhu5NB4h02e8GiU9rwPY8R88nVCRTqu7epRIVfR-FS4LyDWFzSdy_7EXEjb4YQl18IAHNpUCXTtcUc7-jNh5NqlI2GN-hX9qWqJ3WwgSZb0FduRGaIdSdwkNxnVcAeHUorQALoVj0U9l_jYNJKVIUfilLiRqUcLnX6JQpAhs_YA8I_0gYtortAxZ-xZXwbuA9GOyzstrX6IP0'
  },
  {
    id: 'student-abijith',
    name: 'Krishna Abijith',
    email: 'krishnaabijith@school.edu',
    role: 'student',
    status: 'Active',
    joinedDate: 'Oct 22, 2023',
    overallProgress: 0,
    biologyProgress: 0,
    physicsProgress: 0,
    chemistryProgress: 0,
    biologyMCQs: 0,
    physicsMCQs: 0,
    chemistryMCQs: 0,
    biologyAcc: 0,
    physicsAcc: 0,
    chemistryAcc: 0,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnMSFtgiNw4N8tEAp5nELDgzJ_autdfZ-kfzq9XfOf4_raBjdcpbqOssPENHoddAcxOa-VER7hnABS_DyRk4q5PtLiT6I028HaF9wHgRZUe4yr8ZtXF387Yzwd6Odm_AuZcdTWKl0489dRgwSeo86Bq57cMD_yRRSY4mDdyKrobJttUBI1Ig3Tsilwuj_DN_TnadDcm9i-byS_KTU-9xCzuB5UDqIsAHhiKk2FDeUyez7NSrwAQu12PaJ0CMcH2qYkHk1GIZIC3-R7'
  }
];

export const PRE_SEEDED_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'streak-7',
    title: '7 Day Streak',
    description: 'Maintained a revision streak for 7 consecutive days.',
    subject: 'General',
    unlocked: true,
    unlockedAt: 'Today',
    icon: 'local_fire_department',
    gradient: 'from-chemistry-amber to-tertiary-container'
  },
  {
    id: 'cell-master',
    title: 'Cell Master',
    description: 'Scored above 90% accuracy in the Cell Biology unit quiz.',
    subject: 'Biology',
    unlocked: true,
    unlockedAt: '2 days ago',
    icon: 'biotech',
    gradient: 'from-biology-leaf-green to-secondary-container'
  },
  {
    id: 'motion-pro',
    title: 'Motion Pro',
    description: 'Unlocked by finishing 5 different quizzes in Physics.',
    subject: 'Physics',
    unlocked: true,
    unlockedAt: '5 days ago',
    icon: 'speed',
    gradient: 'from-physics-deep-blue to-primary-container'
  },
  {
    id: 'atom-smasher',
    title: 'Atom Smasher',
    description: 'Score 100% on the Chemistry structure of atom test.',
    subject: 'Chemistry',
    unlocked: false,
    icon: 'lock',
    gradient: 'from-surface-variant to-outline'
  },
  {
    id: 'glossary-guru',
    title: 'Glossary Guru',
    description: 'Reviewed all terms in the biology glossary.',
    subject: 'General',
    unlocked: false,
    icon: 'menu_book',
    gradient: 'from-[#8ebdf9] to-[#0f4c81]'
  },
  {
    id: 'super-student',
    title: 'Precision Star',
    description: 'Maintained above 90% overall accuracy across 100 questions.',
    subject: 'General',
    unlocked: true,
    unlockedAt: '1 week ago',
    icon: 'stars',
    gradient: 'from-amber-400 to-orange-500'
  }
];

export const PRE_SEEDED_GLOSSARY: GlossaryItem[] = [
  {
    id: 'g1',
    term: 'Cell',
    definition: 'The fundamental structural and functional unit of all living organisms.',
    subject: 'Biology'
  },
  {
    id: 'g2',
    term: 'Organelle',
    definition: 'A specialized subunit within a cell that has a specific function.',
    subject: 'Biology'
  },
  {
    id: 'g3',
    term: 'Acceleration',
    definition: 'The rate of change of velocity with respect to time.',
    subject: 'Physics'
  },
  {
    id: 'g4',
    term: 'Inertia',
    definition: 'The inherent property of an object to resist any change in its state of rest or motion.',
    subject: 'Physics'
  },
  {
    id: 'g5',
    term: 'Matter',
    definition: 'Anything that occupies space and has mass is called matter.',
    subject: 'Chemistry'
  },
  {
    id: 'g6',
    term: 'Sublimation',
    definition: 'The transition of a substance directly from the solid to the gas state without passing through the liquid state.',
    subject: 'Chemistry'
  },
  {
    id: 'g7',
    term: 'Mitochondria',
    definition: 'Known as the powerhouses of the cell. They generate chemical energy in the form of ATP.',
    subject: 'Biology'
  },
  {
    id: 'g8',
    term: 'Plasmolysis',
    definition: 'Shrinkage of cell contents away from the cell wall when placed in a hypertonic solution.',
    subject: 'Biology'
  },
  {
    id: 'g9',
    term: 'Velocity',
    definition: 'The speed of an object in a given direction.',
    subject: 'Physics'
  }
];

export const PRE_SEEDED_REQUESTS: RegistrationRequest[] = [
  {
    id: 'req1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@student.edu',
    institution: 'Kendriya Vidyalaya No. 1',
    classGroup: 'Class 9A',
    submittedAt: 'Oct 23, 2023, 09:30 AM',
    status: 'Pending'
  },
  {
    id: 'req2',
    name: 'Marcus Patel',
    email: 'mpatel@student.edu',
    institution: 'Delhi Public School',
    classGroup: 'Class 9B',
    submittedAt: 'Oct 23, 2023, 11:15 AM',
    status: 'Pending'
  },
  {
    id: 'req3',
    name: 'Siddharth Sen',
    email: 'sid.sen@student.edu',
    institution: 'Army Public School',
    classGroup: 'Class 9C',
    submittedAt: 'Oct 22, 2023, 04:20 PM',
    status: 'Approved'
  }
];

export const PRE_SEEDED_CHAPTERS: Chapter[] = [
  {
    id: 'ch5-bio',
    subject: 'Biology',
    chapterNumber: 5,
    title: 'The Fundamental Unit of Life',
    subtitle: 'An introduction to cells, their structure, and functions in living organisms.',
    quickFact: 'Robert Hooke discovered cells in 1665 while examining a thin slice of cork through a self-designed microscope.',
    contents: [
      {
        title: '1. Introduction',
        content: `While examining a thin slice of cork, Robert Hooke saw that the cork resembled the structure of a honeycomb consisting of many little compartments. Cork is a substance which comes from the bark of a tree. This was in the year 1665 when Hooke made this chance observation through a self-designed microscope. Robert Hooke called these boxes **cells**.

Cell is a Latin word for 'a little room'. This may seem to be a very small and insignificant incident but it is very important in the history of science. This was the very first time that someone had observed that living things appear to consist of separate units. The use of the word 'cell' to describe these units is used till this day in biology.`
      },
      {
        title: '2. What are Living Organisms Made Up Of?',
        content: `All living organisms are made up of tiny cells. If we prepare a temporary mount of peel of an onion, we can see cells of onion peel under a microscope. These cells look similar to each other, regardless of the size of the onion they came from!

The structures we see are onion cells. They all look similar and together they form a big structure like an onion bulb.

Some organisms can also be single-celled, called **Unicellular Organisms** (e.g., Amoeba, Chlamydomonas, Paramecium, and bacteria). Others consist of many cells, called **Multicellular Organisms** (e.g., fungi, plants, and animals). Every multicellular organism has come from a single cell through cell division.`
      },
      {
        title: '3. What is a Cell Made Up Of?',
        content: `If we study a cell under a microscope, we would come across three features in almost every cell:
*   **Plasma Membrane**
*   **Nucleus**
*   **Cytoplasm**

All activities inside the cell and interactions of the cell with its environment are possible due to these features.`
      },
      {
        title: '4. Plasma Membrane or Cell Membrane',
        content: `This is the outermost covering of the cell that separates the contents of the cell from its external environment. The plasma membrane allows or permits the entry and exit of some materials in and out of the cell. It also prevents movement of some other materials. The cell membrane, therefore, is called a **selectively permeable membrane**.

Some substances like carbon dioxide or oxygen can move across the cell membrane by a process called **diffusion**. Water also obeys the law of diffusion. The movement of water molecules through such a selectively permeable membrane is called **osmosis**.`
      },
      {
        title: '5. Cell Wall',
        content: `Plant cells, in addition to the plasma membrane, have another rigid outer covering called the **cell wall**. The cell wall lies outside the plasma membrane. The plant cell wall is mainly composed of **cellulose**. Cellulose is a complex substance and provides structural strength to plants.

When a living plant cell loses water through osmosis, there is shrinkage or contraction of the contents of the cell away from the cell wall. This phenomenon is known as **plasmolysis**.`
      },
      {
        title: '6. Nucleus',
        content: `The nucleus has a double-layered covering called a **nuclear membrane**. The nuclear membrane has pores which allow the transfer of material from inside the nucleus to its outside, that is, to the cytoplasm.

The nucleus contains **chromosomes**, which are visible as rod-shaped structures only when the cell is about to divide. Chromosomes contain information for inheritance of features from parents to next generation in the form of **DNA** (Deoxyribonucleic Acid) molecules. Chromosomes are composed of DNA and protein. Functional segments of DNA are called **genes**.`
      },
      {
        title: '7. Cytoplasm',
        content: `The cytoplasm is the fluid content inside the plasma membrane. It also contains many specialized **cell organelles**. Each of these organelles performs a specific function for the cell.

Cell organelles are enclosed by membranes. In prokaryotes, beside the absence of a defined nuclear region, the membrane-bound cell organelles are also absent. On the other hand, eukaryotic cells have nuclear membrane as well as membrane-enclosed organelles.`
      }
    ],
    quizQuestions: [
      {
        id: 'q-bio-1',
        question: 'Who discovered the cell in 1665 while observing a slice of cork?',
        options: ['Robert Brown', 'Antony van Leeuwenhoek', 'Robert Hooke', 'Purkinje'],
        correctIndex: 2,
        explanation: 'Robert Hooke discovered cells in 1665 by examining a thin slice of cork under a self-designed crude microscope.'
      },
      {
        id: 'q-bio-2',
        question: 'Which organelle is widely known as the powerhouse of the cell?',
        options: ['Golgi Apparatus', 'Lysosome', 'Mitochondria', 'Plastids'],
        correctIndex: 2,
        explanation: 'Mitochondria are called the powerhouses of the cell because they synthesize energy-rich ATP molecules during cellular respiration.'
      },
      {
        id: 'q-bio-3',
        question: 'The process of shrinkage of plant cell contents away from the cell wall due to water loss is called:',
        options: ['Dehydration', 'Plasmolysis', 'Endosmosis', 'Diffusion'],
        correctIndex: 1,
        explanation: 'Plasmolysis is the shrinkage or contraction of the protoplasm of a plant cell away from its cell wall as a result of water loss from osmosis.'
      }
    ]
  },
  {
    id: 'ch8-phys',
    subject: 'Physics',
    chapterNumber: 8,
    title: 'Motion',
    subtitle: 'Understanding distance, displacement, speed, velocity, and equations of motion.',
    quickFact: 'In physics, speed is a scalar quantity (has only magnitude), while velocity is a vector quantity (has both magnitude and direction).',
    contents: [
      {
        title: '1. Introduction to Motion',
        content: `In everyday life, we see some objects at rest and others in motion. Birds fly, fish swim, blood flows through veins and arteries, and cars move. Atoms, molecules, planets, stars, and galaxies are all in motion.

An object is said to be in motion when its position changes with time, relative to a reference point.`
      },
      {
        title: '2. Distance vs Displacement',
        content: `*   **Distance** is the total length of the path covered by an object during its motion. It is a **scalar quantity**.
*   **Displacement** is the shortest straight-line distance measured from the initial to the final position of the object. It is a **vector quantity** and can be zero even if distance is non-zero (e.g., in a complete circular trip).`
      },
      {
        title: '3. Speed and Velocity',
        content: `*   **Speed** is the distance travelled by the object in unit time. SI unit is m/s (meters per second). It is scalar.
*   **Velocity** is the speed of an object moving in a definite direction. It is vector. It changes if either speed or direction changes.`
      },
      {
        title: '4. Acceleration',
        content: `**Acceleration** is defined as the measure of the change in velocity of an object per unit time. 
SI unit: m/s² (meters per second squared).

Formula: a = (v - u) / t, where 'v' is final velocity, 'u' is initial velocity, and 't' is time taken.`
      }
    ],
    quizQuestions: [
      {
        id: 'q-phys-1',
        question: 'Which of the following describes the rate of change of velocity?',
        options: ['Speed', 'Displacement', 'Acceleration', 'Momentum'],
        correctIndex: 2,
        explanation: 'Acceleration is defined as the rate of change of velocity with time. If velocity changes, there is acceleration.'
      },
      {
        id: 'q-phys-2',
        question: 'A car travels 100 meters in 5 seconds. What is its average speed?',
        options: ['10 m/s', '20 m/s', '50 m/s', '500 m/s'],
        correctIndex: 1,
        explanation: 'Average speed is total distance divided by total time: 100 meters / 5 seconds = 20 m/s.'
      },
      {
        id: 'q-phys-3',
        question: 'Which of these is a scalar quantity?',
        options: ['Velocity', 'Force', 'Distance', 'Acceleration'],
        correctIndex: 2,
        explanation: 'Distance has only magnitude and no specific direction, which makes it a scalar quantity. The others are vector quantities.'
      }
    ]
  },
  {
    id: 'ch1-chem',
    subject: 'Chemistry',
    chapterNumber: 1,
    title: 'Matter in Our Surroundings',
    subtitle: 'Characteristics of particles, physical nature of matter, and states of matter.',
    quickFact: 'Sublimation is the process where a solid changes directly into gas (or vice-versa) without turning into a liquid first.',
    contents: [
      {
        title: '1. Physical Nature of Matter',
        content: `As we look at our surroundings, we see a large variety of things with different shapes, sizes and textures. Everything in this universe is made up of material which scientists have named **matter**. The air we breathe, the food we eat, stones, clouds, stars, plants and animals, even a small drop of water or a particle of sand — everything is matter.

Matter is made up of extremely tiny particles that are constantly moving, have space between them, and attract each other.`
      },
      {
        title: '2. States of Matter',
        content: `Matter around us exists in three different states:
1.  **Solid**: Has definite shape, distinct boundaries, and fixed volume. Negligible compressibility.
2.  **Liquid**: Has no fixed shape but has a fixed volume. Liquids flow and change shape, so they are not rigid but are fluid.
3.  **Gas**: Has no fixed shape or volume. Highly compressible compared to solids and liquids.`
      },
      {
        title: '3. Evaporation',
        content: `The phenomenon of change of a liquid into vapours at any temperature below its boiling point is called **evaporation**. Evaporation always causes a cooling effect because the particles of liquid absorb energy from the surroundings to regain the energy lost during evaporation.`
      }
    ],
    quizQuestions: [
      {
        id: 'q-chem-1',
        question: 'What is the physical transition of a solid directly into a gaseous state called?',
        options: ['Condensation', 'Fusing', 'Sublimation', 'Vaporization'],
        correctIndex: 2,
        explanation: 'Sublimation is the direct transition of a substance from solid to gas phase without passing through the intermediate liquid phase.'
      },
      {
        id: 'q-chem-2',
        question: 'Which of the following states of matter has the highest kinetic energy of particles?',
        options: ['Solid', 'Liquid', 'Gas', 'All have the same'],
        correctIndex: 2,
        explanation: 'Gaseous state particles have the highest kinetic energy because they are far apart and move rapidly in random directions.'
      },
      {
        id: 'q-chem-3',
        question: 'Evaporation of a liquid always causes:',
        options: ['Boiling', 'Heating effect', 'Cooling effect', 'No temperature change'],
        correctIndex: 2,
        explanation: 'Evaporation causes cooling because the evaporating particles absorb latent heat of vaporization from the surrounding surface.'
      }
    ]
  }
];
