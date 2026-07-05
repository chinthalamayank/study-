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
    email: 'kashettianush@school.edu',
    password: 'kashettianush',
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

export const PRE_SEEDED_REQUESTS: RegistrationRequest[] = [];

export const PRE_SEEDED_CHAPTERS: Chapter[] = [
  {
    id: 'ch5-bio',
    subject: 'Biology',
    chapterNumber: 5,
    title: 'The Fundamental Unit of Life (Cell)',
    subtitle: 'Expanded foundation study notes extending to Intermediate level cell biology.',
    quickFact: 'Prokaryotic cells do not have membrane-bound organelles or a nuclear membrane, but they do have ribosomes (70S) and genetic material (DNA in a nucleoid region).',
    contents: [
      {
        title: '1. Discovery of the Cell and Cell Theory',
        content: `•   **Robert Hooke (1665):** First observed and named 'cells' while examining a thin slice of cork under a self-designed crude microscope. He saw empty, honeycomb-like box structures, which he called 'cellulae' (Latin for 'small rooms').
•   **Anton van Leeuwenhoek (1674):** First to observe and describe a **LIVE** cell (free-living cells in pond water, including bacteria and protozoa) using a simple microscope of his own design.
•   **Robert Brown (1831):** Discovered the **nucleus** in orchid root cells.
•   **Purkinje (1839):** Coined the term **'protoplasm'** for the living fluid substance inside the cell.
•   **Schleiden (1838, botanist) & Schwann (1839, zoologist):** Together proposed the **Cell Theory**, stating that all plants and animals are composed of cells and that the cell is the basic unit of life.
•   **Rudolf Virchow (1855):** Expanded/modified the Cell Theory by adding **"Omnis cellula-e cellula"** — stating that all cells arise only from the division of pre-existing cells, refuting spontaneous generation.

**Modern Cell Theory (Three Postulates):**
1. All living organisms are composed of cells and cell products.
2. The cell is the basic structural and functional unit of life.
3. New cells arise only from the division of pre-existing cells.`
      },
      {
        title: '2. Overview: Why is the Cell Called the Fundamental Unit?',
        content: `Every function necessary to sustain life — nutrition, respiration, excretion, growth, reproduction, and response to stimuli — is carried out at the level of the individual cell. 

Organisms can be:
•   **Unicellular:** A single cell performs all life functions independently (e.g., Amoeba, Paramecium, bacteria, Chlamydomonas).
•   **Multicellular:** A division of labour exists among groups of specialized cells (e.g., humans, plants, fungi). In both cases, the cell remains the smallest unit capable of independent existence.`
      },
      {
        title: '3. Prokaryotic and Eukaryotic Cells',
        content: `Cells are broadly classified into two types based on the presence/absence of a membrane-bound nucleus and organelles:

**Prokaryotic Cell:**
•   **Nucleus:** Absent (no nuclear membrane); genetic material lies in a region called the **nucleoid**.
•   **Size:** Generally smaller (1-10 µm).
•   **Membrane-bound Organelles:** Absent (no mitochondria, endoplasmic reticulum, Golgi body, etc.).
•   **Cell Division:** Simple (binary fission), no mitosis or meiosis.
•   **Ribosomes:** Smaller **70S** type.
•   **Chromosomal DNA:** Circular, single, naked (no histones).
•   **Examples:** Bacteria, blue-green algae (cyanobacteria).

**Eukaryotic Cell:**
•   **Nucleus:** True, membrane-bound nucleus present with a double membrane.
•   **Size:** Generally larger (5-100 µm).
•   **Membrane-bound Organelles:** Present (mitochondria, ER, Golgi body, etc.).
•   **Cell Division:** Complex (mitosis and meiosis occur).
•   **Ribosomes:** Larger **80S** type in cytoplasm; 70S inside mitochondria and chloroplasts.
•   **Chromosomal DNA:** Linear, multiple, associated with histone proteins, enclosed inside the nucleus.
•   **Examples:** Protists, fungi, plants, animals.

*TRAP POINT:* Prokaryotes are **NOT** devoid of genetic material or ribosomes — they simply lack a nuclear membrane and membrane-bound organelles. They have 70S ribosomes and a circular DNA nucleoid.`
      },
      {
        title: '4. Structural Organisation of a (Eukaryotic) Cell',
        content: `A generalized cell consists of three fundamental parts: the plasma membrane, the cytoplasm, and the nucleus. Plant cells additionally possess a cell wall outside the plasma membrane.

**(a) Plasma Membrane (Cell Membrane):**
•   Outermost boundary of animal cells; separates cell contents from the external environment.
•   Composed mainly of lipids (a phospholipid bilayer) and proteins. Described by the **Fluid Mosaic Model** (Singer & Nicolson, 1972) — the membrane is 'fluid' because lipid molecules move laterally, and a 'mosaic' because proteins are embedded at various points.
•   **Selectively Permeable:** Allows only certain substances to pass through, restricting others.

**Diffusion and Osmosis (Transport Processes):**
•   **Diffusion:** Movement of any substance (solid, liquid, or gas) from a region of higher concentration to a region of lower concentration until equilibrium is reached (e.g., exchange of O2 and CO2 during respiration).
•   **Osmosis:** A special type of diffusion representing the movement of **water** molecules specifically, from a region of higher water concentration (hypotonic solution) to a region of lower water concentration (hypertonic solution) through a semi-permeable membrane.
•   **Endosmosis:** When a cell is placed in a **hypotonic** solution, water moves **into** the cell, causing it to swell (animal cells may burst/lyse; plant cells become turgid but do not burst due to their rigid cell wall).
•   **Exosmosis:** When a cell is placed in a **hypertonic** solution, water moves **out** of the cell, causing it to shrink. In plant cells, this causes **plasmolysis** (the protoplasm shrinks away from the cell wall).
•   **Isotonic Solution:** When solute concentration outside equals that inside — no net movement of water.

*TRAP POINT:* Blood cells placed in distilled water (strongly hypotonic) undergo endosmosis and burst (haemolysis) — this is why intravenous (IV) fluids must be isotonic (e.g., normal saline) and not pure water.`
      },
      {
        title: '5. Cell Wall & Cytoplasm',
        content: `**(b) Cell Wall:**
•   Found **ONLY** in plant cells, fungi, algae, and bacteria (completely absent in animal cells). It is a rigid, non-living, fully permeable outer covering.
•   Composed of **cellulose** in plants (provides structural strength); **chitin** in fungi; and **peptidoglycan (murein)** in most bacteria.
•   Provides mechanical support, rigidity, and prevents bursting in a hypotonic medium.
•   **Plasmodesmata:** Fine cytoplasmic channels passing through the cell wall that connect adjacent plant cells for communication and transport.

**(c) Cytoplasm and Organelles:**
•   The cytoplasm is the jelly-like, semi-fluid substance between the plasma membrane and the nucleus. It is the site of many vital metabolic (biochemical) reactions.
•   Specialized structures suspended within the cytoplasm are **cell organelles**.`
      },
      {
        title: '6. Endoplasmic Reticulum (ER) and Golgi Apparatus',
        content: `**Endoplasmic Reticulum (ER):**
•   A vast network of membranous tubules and sacs (cisternae) extending throughout the cytoplasm, connecting the nuclear membrane to the plasma membrane.
•   Acts as a cytoplasmic skeletal framework providing mechanical support.
•   **Rough ER (RER):** Studded with ribosomes on its outer surface; site of active protein synthesis, folding, and transport.
•   **Smooth ER (SER):** Lacks ribosomes; site of lipid (fat) synthesis, carbohydrate metabolism, and detoxification of drugs and poisons (prominent in liver cells).

**Golgi Apparatus (Golgi Body / Golgi Complex):**
•   Discovered by Camillo Golgi. Consists of a system of membrane-bound, flattened, stacked sac-like structures called cisternae, along with associated vesicles.
•   Functions as the **'shipping and packaging department'** or **'post office'** of the cell.
•   Modifies, packages, sorts, and dispatches materials (especially proteins received from the ER) to destinations inside or outside the cell. It is also involved in forming lysosomes and the cell plate during plant cell division.`
      },
      {
        title: '7. Lysosomes and Powerhouse Mitochondria',
        content: `**Lysosomes:**
•   Small, membrane-bound, spherical vesicles formed by the Golgi apparatus containing powerful digestive (**hydrolytic**) enzymes capable of breaking down almost all organic materials.
•   Responsible for intracellular digestion — breaking down foreign material (e.g., bacteria) and worn-out cell organelles (**autophagy**).
•   Popularly called the **'suicide bags'** of the cell because if the cell is damaged, lysosomes may burst and their enzymes will digest the cell's own contents, leading to autolysis.

**Mitochondria (Singular: Mitochondrion):**
•   Cigar-shaped, double-membrane-bound organelles. The outer membrane is smooth, while the inner membrane is folded deeply inward to form finger-like projections called **cristae**, which vastly increase surface area for respiratory reactions.
•   Site of cellular (aerobic) respiration, where energy is stored in the form of **ATP** (Adenosine Triphosphate) — the **'energy currency'** of the cell. Hence, they are called the **'powerhouses of the cell'**.
•   They possess their own **circular DNA** and **70S ribosomes** (similar to prokaryotes) and can divide independently. This is major evidence supporting the **Endosymbiotic Theory** (mitochondria originated from engulfed free-living bacteria).`
      },
      {
        title: '8. Plastids, Ribosomes and Vacuoles',
        content: `**Plastids:**
•   Double-membrane-bound organelles found **ONLY** in plant cells and some protists (e.g., algae). Absent in animal cells. Like mitochondria, they contain their own DNA and 70S ribosomes.
•   **Chloroplasts:** Contain the green pigment chlorophyll; site of photosynthesis. Contain internal membrane stacks called **grana** (site of light reaction) suspended in fluid matrix called **stroma** (site of dark reaction).
•   **Chromoplasts:** Contain pigments other than chlorophyll (e.g., carotenoids), giving vivid colors to flowers and fruits.
•   **Leucoplasts:** Colourless plastids storing nutrients: *amyloplasts* store starch; *elaioplasts* store oils/fats; *aleuroplasts* store proteins.

**Ribosomes:**
•   The smallest cell organelles; non-membrane-bound. Composed of ribosomal RNA (rRNA) and proteins. Found free in cytoplasm or attached to RER.
•   Known as the **'protein factories'** of the cell (site of protein synthesis).

**Vacuoles:**
•   Membrane-bound (tonoplast-bound in plants), fluid-filled sac-like storage structures.
•   In plant cells, there is typically one massive, permanent central vacuole occupying up to 90% of cell volume, providing turgidity/rigidity and storing cell sap.
•   In animal cells, vacuoles are small, temporary, and few (e.g., food vacuoles for digestion in Amoeba, contractile vacuoles for osmoregulation).`
      },
      {
        title: '9. Nucleus — The Control Center',
        content: `•   The largest organelle; typically spherical and centrally located. Enclosed by a double-layered, porous **nuclear membrane (nuclear envelope)** with pores allowing material exchange with the cytoplasm.
•   Contains **nucleoplasm** (dense fluid), chromatin material, and the nucleolus.
•   **Nucleolus:** A dense, non-membrane-bound body inside the nucleus; site of ribosomal RNA (rRNA) synthesis and ribosome assembly.
•   **Chromatin Material:** A loosely coiled, thread-like network of DNA and associated histone proteins seen in non-dividing cells. It condenses and organizes into rod-shaped **chromosomes** during cell division.
•   Chromosomes carry **genes** — the hereditary units of information made of DNA, responsible for transmitting characteristics from parents to offspring.
•   Acts as the control center of all cellular activities, directing metabolism, growth, and cell division.`
      },
      {
        title: '10. Summary Tables: Comparisons',
        content: `**Plant Cell vs Animal Cell Comparison:**
•   **Cell Wall:** Present (made of cellulose) | Absent
•   **Shape:** Fixed, rectangular/regular | Irregular/round, no fixed shape
•   **Plastids:** Present | Absent
•   **Vacuole:** Large, single, prominent central vacuole | Small, temporary, if present
•   **Lysosomes:** Rare (less prominent) | Common, abundant
•   **Centrosome/Centriole:** Generally absent (except lower plants) | Present (helps in spindle formation)
•   **Mode of Nutrition:** Autotrophic (photosynthesis) | Heterotrophic

**Unicellular vs Multicellular Organisms:**
•   **Number of Cells:** Single cell | Many cells
•   **Division of Labour:** Absent (one cell does all functions) | Present (specialized cells/tissues)
•   **Complexity:** Simple internal organization | Complex (cells -> tissues -> organs -> systems)
•   **Efficiency:** Limited, generalist cell | High efficiency of specific functions`
      }
    ],
    quizQuestions: [
      {
        id: 'q-bio-1',
        question: "Robert Hooke observed 'cells' in cork under a microscope, but what he actually saw were:",
        options: [
          'Living cytoplasm-filled cells',
          'Empty, dead cell walls of non-living cork tissue',
          'Chloroplasts',
          'Nuclei'
        ],
        correctIndex: 1,
        explanation: 'Cork is dead tissue. Robert Hooke observed the empty, box-like cell walls remaining after the living contents had died; hence he described them as cellulae (small rooms).'
      },
      {
        id: 'q-bio-2',
        question: 'Which scientist is credited with observing a LIVE cell for the first time?',
        options: ['Robert Hooke', 'Robert Brown', 'Anton van Leeuwenhoek', 'Rudolf Virchow'],
        correctIndex: 2,
        explanation: 'Anton van Leeuwenhoek examined pond water and observed free-living cells (bacteria, protozoa) that were alive and moving, unlike Hooke who saw dead cork cells.'
      },
      {
        id: 'q-bio-3',
        question: 'Which of the following organelles is found in BOTH prokaryotic and eukaryotic cells?',
        options: ['Golgi apparatus', 'Mitochondria', 'Ribosomes', 'Endoplasmic reticulum'],
        correctIndex: 2,
        explanation: 'Ribosomes are non-membrane-bound and found in both cell types (70S in prokaryotes; 80S in eukaryotic cytoplasm). The other organelles are membrane-bound and absent in prokaryotes.'
      },
      {
        id: 'q-bio-4',
        question: 'A red blood cell placed in distilled water will:',
        options: [
          'Shrink due to exosmosis',
          'Remain unaffected as blood cells are impermeable',
          'Swell and possibly burst due to endosmosis',
          'Immediately convert into a plant cell'
        ],
        correctIndex: 2,
        explanation: 'Distilled water is strongly hypotonic relative to the cell interior. Water rushes into the cell (endosmosis) and since animal red blood cells lack a rigid cell wall, they swell and burst (haemolysis).'
      },
      {
        id: 'q-bio-5',
        question: 'A plant cell placed in a concentrated salt (hypertonic) solution shows plasmolysis, in which:',
        options: [
          'The cell wall dissolves completely',
          'The protoplasm shrinks and pulls away from the cell wall due to loss of water',
          'The cell bursts due to excess water intake',
          'The nucleus disintegrates'
        ],
        correctIndex: 1,
        explanation: 'In a hypertonic solution, water moves out of the cell via exosmosis. The flexible plasma membrane and protoplasm shrink inward, pulling away from the rigid cell wall. This is plasmolysis.'
      },
      {
        id: 'q-bio-6',
        question: "Which organelle is correctly described as the 'suicide bag' of the cell, and why?",
        options: [
          'Mitochondria — releases toxic ATP',
          "Lysosome — its digestive enzymes can break down the cell's own contents if released",
          'Golgi apparatus — stops protein transport',
          'Ribosome — stops protein synthesis'
        ],
        correctIndex: 1,
        explanation: "Lysosomes contain powerful hydrolytic enzymes. If the cell is damaged or disturbed, lysosomes may rupture and digest the cell's own organelles, leading to cell death (autolysis)."
      },
      {
        id: 'q-bio-7',
        question: 'The presence of their own DNA and 70S-type ribosomes in mitochondria and chloroplasts is the strongest evidence for which theory?',
        options: ['Cell Theory', 'Endosymbiotic Theory', 'Germ Theory', 'Theory of Evolution by Natural Selection'],
        correctIndex: 1,
        explanation: 'The Endosymbiotic Theory proposes that mitochondria and chloroplasts originated from free-living prokaryotes engulfed by ancestral eukaryotes. Having their own prokaryote-like circular DNA and 70S ribosomes supports this.'
      },
      {
        id: 'q-bio-8',
        question: 'Which of these is NOT a function of the smooth endoplasmic reticulum (SER)?',
        options: [
          'Synthesis of lipids',
          'Detoxification of drugs and poisons (notably in liver cells)',
          'Synthesis of proteins via attached ribosomes',
          'Providing a membranous transport network'
        ],
        correctIndex: 2,
        explanation: 'Protein synthesis is performed by ribosomes attached to the ROUGH Endoplasmic Reticulum (RER). The SER lacks ribosomes and specializes in lipid synthesis and detoxification.'
      },
      {
        id: 'q-bio-9',
        question: 'A cell is found to have a large central vacuole, a cell wall, and chloroplasts. It is most likely:',
        options: ['An animal muscle cell', 'A bacterial cell', 'A plant cell', 'A human liver cell'],
        correctIndex: 2,
        explanation: 'A large central vacuole, rigid cellulose cell wall, and chlorophyll-containing chloroplasts are defining characteristic features of plant cells.'
      },
      {
        id: 'q-bio-10',
        question: 'Which statement about prokaryotic cells is FALSE?',
        options: [
          'They lack a nuclear membrane',
          'They lack membrane-bound organelles like mitochondria',
          'They completely lack ribosomes and genetic material',
          'Their genetic material lies in a region called the nucleoid'
        ],
        correctIndex: 2,
        explanation: 'This statement is false. Prokaryotes DO possess ribosomes (70S) and genetic material (DNA). They simply lack a membrane-bound nucleus and membrane-bound organelles.'
      },
      {
        id: 'q-bio-11',
        question: 'Osmosis is best defined as:',
        options: [
          'Movement of any solute from high to low concentration',
          'Movement of water molecules from a region of higher water concentration to lower water concentration through a semi-permeable membrane',
          'Movement of proteins across the Golgi apparatus',
          'Random movement of ribosomes in the cytoplasm'
        ],
        correctIndex: 1,
        explanation: 'Osmosis is specifically the movement of solvent (water) molecules across a selectively permeable membrane, from a region of higher water concentration to lower water concentration.'
      },
      {
        id: 'q-bio-12',
        question: 'The nucleolus inside the nucleus is primarily the site of:',
        options: [
          'DNA replication only',
          'Ribosomal RNA (rRNA) synthesis and ribosome assembly',
          'Protein digestion',
          'Lipid storage'
        ],
        correctIndex: 1,
        explanation: 'The nucleolus is a dense, non-membrane-bound structure in the nucleus dedicated to synthesizing ribosomal RNA (rRNA) and assembling ribosomal subunits.'
      }
    ]
  },
  {
    id: 'ch8-phys',
    subject: 'Physics',
    chapterNumber: 8,
    title: 'Motion',
    subtitle: 'Mechanics core and equations of motion, expanded to Intermediate depth.',
    quickFact: 'Acceleration can be non-zero even when speed is constant, if direction changes — this is exactly the case in uniform circular motion (centripetal acceleration).',
    contents: [
      {
        title: '1. Rest and Motion — The Concept of a Reference Frame',
        content: `An object is said to be in **motion** if its position changes continuously with respect to a fixed point called the origin, over a period of time. An object is at **rest** if its position does not change with respect to the surroundings.

*NOTE:* Rest and motion are **NOT absolute** — they are relative to the observer / frame of reference. A passenger appears at rest to a co-passenger but in motion to a person standing on the ground. There is no such thing as 'absolute rest' in the universe (every object, including the Earth, is moving relative to the Sun, galaxy, etc.).

**Frame of Reference:**
•   A coordinate system (coupled with a clock) with respect to which the position, velocity, and acceleration of an object are measured.
•   **Inertial Frame:** A frame moving with constant velocity (or at rest); Newton's laws of motion hold directly.
•   **Non-Inertial Frame:** An accelerating or rotating frame; pseudo (fictitious) forces must be introduced to apply Newton's laws.`
      },
      {
        title: '2. Distance and Displacement',
        content: `**Distance:**
•   Total length of the actual path travelled by an object, irrespective of the direction of motion.
•   A **scalar quantity** — has magnitude only.
•   Always positive; never decreases with time. SI unit: metre (m).

**Displacement:**
•   The shortest straight-line distance between the initial and final positions of an object, directed from initial to final position.
•   A **vector quantity** — has both magnitude and direction.
•   Can be positive, negative, or zero (zero when the object returns to its starting point).
•   Magnitude of displacement ≤ Distance travelled. They are equal only for motion along a straight line without any reversal of direction.

*TRICK POINT:* If a body moves in a closed loop (e.g., one full round of a circular track), distance = circumference, but displacement = 0.

**Scalars vs Vectors — Quick Comparison Table:**
•   **Definition:** Has magnitude only | Has magnitude and direction
•   **Examples:** Distance, speed, mass, time, energy | Displacement, velocity, acceleration, force
•   **Addition Rule:** Simple algebraic addition | Follows vector addition laws (triangle/parallelogram law)
•   **Can be negative?:** No (magnitude always +ve) | Yes, component can be negative (direction dependent)`
      },
      {
        title: '3. Types of Motion',
        content: `**(a) Based on Path:**
•   **Translatory Motion:** Every particle of the body covers the same distance in the same time along parallel paths.
    *   **Rectilinear Motion:** Motion along a straight line (e.g., a car on a straight road, a freely falling body).
    *   **Curvilinear Motion:** Motion along a curved path (e.g., a car turning a bend, a projectile).
•   **Rotatory (Rotational) Motion:** The body spins about a fixed axis passing through itself; every particle moves in a circle about that axis (e.g., a spinning top, Earth's rotation).
•   **Circular Motion:** A special curvilinear motion where the body moves along a circular path around a fixed external point (e.g., Earth's revolution around the Sun).
•   **Oscillatory / Vibratory Motion:** To-and-fro motion about a fixed mean position (e.g., a simple pendulum, a vibrating guitar string).
•   **Periodic Motion:** Motion that repeats itself after equal intervals of time (all oscillatory motion is periodic, but not all periodic motion is oscillatory — e.g., uniform circular motion is periodic but not oscillatory).

**(b) Based on Speed/Velocity Pattern:**
•   **Uniform Motion:** Equal distances covered in equal intervals of time, however small the interval (velocity is constant, acceleration = 0).
•   **Non-Uniform Motion:** Unequal distances in equal intervals of time (velocity changes; acceleration ≠ 0).
•   **Uniformly Accelerated Motion:** Velocity changes by equal amounts in equal intervals of time (acceleration is constant).
•   **Non-Uniformly Accelerated Motion:** Acceleration itself keeps changing (e.g., motion with jerk).`
      },
      {
        title: '4. Speed',
        content: `Speed is the distance travelled by a body per unit time. It is a **scalar quantity**.

**Types of Speed:**
•   **Uniform Speed:** Equal distances covered in equal intervals of time.
•   **Variable (Non-Uniform) Speed:** Unequal distances covered in equal intervals of time.
•   **Average Speed:** Total distance travelled / Total time taken (defined even if speed is variable throughout the journey).
•   **Instantaneous Speed:** The speed of a body at a particular instant of time; it is the limiting value of average speed as the time interval Δt → 0. Given by the magnitude of the derivative of position with respect to time (|dx/dt|).

*NOTE:* Instantaneous speed = |instantaneous velocity|. This equivalence is a favorite conceptual MCQ trap — average speed is **NOT** always equal to the magnitude of average velocity, but instantaneous speed **IS** always equal to the magnitude of instantaneous velocity.`
      },
      {
        title: '5. Velocity',
        content: `Velocity is the rate of change of displacement — the displacement covered per unit time, in a specified direction. It is a **vector quantity**.

**Types of Velocity:**
•   **Uniform Velocity:** Equal displacements in equal intervals of time, in the same direction (both magnitude AND direction are constant).
•   **Variable Velocity:** Velocity changes if either its magnitude changes, or its direction changes, or both change (e.g., uniform circular motion has variable velocity even though speed is constant, because direction keeps changing).
•   **Average Velocity:** Total displacement / Total time taken = (Final position - Initial position) / time.
•   **Instantaneous Velocity:** limit of (Δx/Δt) as Δt → 0 = dx/dt — represented by the slope of the tangent to the position-time graph at that instant.

*NOTE:* Average velocity for uniformly accelerated motion = (u + v)/2, where u = initial velocity and v = final velocity. This shortcut only works when acceleration is **CONSTANT**.`
      },
      {
        title: '6. Acceleration',
        content: `Acceleration is the rate of change of velocity with time. It is a **vector quantity** with SI unit: m/s².

•   If velocity increases with time → positive acceleration.
•   If velocity decreases with time → negative acceleration, called **retardation** or **deceleration**.
•   **Uniform Acceleration:** Velocity changes by equal amounts in equal intervals of time (e.g., a freely falling body under gravity, g = 9.8 m/s²).
•   **Non-Uniform Acceleration:** Rate of change of velocity itself varies with time.
•   **Instantaneous Acceleration:** dv/dt = d²x/dt² — the second derivative of displacement with respect to time; also the slope of the velocity-time graph.

*NOTE:* Acceleration can be non-zero even when speed is constant, if direction changes — this is exactly the case in uniform circular motion (centripetal acceleration), a classic conceptual trick.`
      },
      {
        title: '7. Graphical Representation of Motion',
        content: `**(a) Distance/Position–Time Graphs:**
•   Slope of a position–time graph = **velocity**.
•   A straight line graph (non-zero, non-vertical slope) → uniform velocity.
•   A horizontal line (zero slope) → object at rest.
•   A curved graph → non-uniform velocity (accelerated motion); slope increasing → speeding up, slope decreasing → slowing down.
•   A straight line with steeper slope represents greater speed.
•   A vertical line is physically impossible (would mean infinite velocity — commonly used as a trick 'which graph is NOT possible' MCQ).

**(b) Velocity–Time Graphs:**
•   Slope of a velocity–time graph = **acceleration**.
•   Area enclosed between the v–t graph and the time axis = **displacement** (magnitude of area below the axis represents displacement in the negative direction, and must be subtracted, not added, when the object reverses direction).
•   A horizontal line parallel to the time axis → uniform velocity, zero acceleration.
•   A straight line with constant positive slope → uniformly accelerated motion.
•   A straight line with constant negative slope → uniform retardation.
•   A line passing through the origin with positive slope → object starts from rest and accelerates uniformly.

*TRICK POINT:* Total distance travelled uses the **TOTAL** area (treating all areas as positive/summed), while displacement uses **NET** area (areas below axis subtracted). If a v–t graph shows velocity going negative, the object has reversed direction — a very common exam trap.

**(c) Acceleration–Time Graphs:**
•   Area under an acceleration–time graph = change in velocity (Δv).
•   A horizontal line above the time axis → uniform (constant) positive acceleration.`
      },
      {
        title: '8. Equations of Motion (For Uniformly Accelerated, Rectilinear Motion)',
        content: `Let u = initial velocity, v = final velocity, a = uniform acceleration, t = time taken, s = displacement.

**Derivation 1 — First Equation of Motion (v = u + at):**
•   *Graphical Method:* Consider a velocity–time graph — a straight line from (0, u) to (t, v).
    Slope of the v–t graph = acceleration => a = (v - u) / (t - 0) => at = v - u => v = u + at.
•   *Calculus Method:* a = dv/dt (constant) => ∫dv from u to v = ∫a dt from 0 to t => v - u = at => v = u + at.

**Derivation 2 — Second Equation of Motion (s = ut + ½at²):**
•   *Graphical Method:* Displacement s = Area under the v–t graph = Area of rectangle + Area of triangle
    s = Area of rectangle (base t, height u) + Area of triangle (base t, height (v - u) = at)
    s = ut + ½ × t × at = ut + ½at².
•   *Calculus Method:* v = dx/dt = u + at => ∫dx from 0 to s = ∫(u + at)dt from 0 to t => s = ut + ½at².

**Derivation 3 — Third Equation of Motion (v² = u² + 2as):**
•   *Graphical Method:* From the v–t graph, s = Area of trapezium = ½(sum of parallel sides)(height) = ½(u + v)(t)
    From equation 1: t = (v - u)/a. Substituting this:
    s = ½(u + v) * (v - u)/a = (v² - u²) / 2a => 2as = v² - u² => v² = u² + 2as.
•   *Calculus Method:* a = v(dv/dx) (chain rule, since a = dv/dt = dv/dx · dx/dt = v dv/dx)
    ∫v dv from u to v = ∫a dx from 0 to s => (v² - u²)/2 = as => v² = u² + 2as.

**Displacement in the nth Second (Advanced/Inter-level result):**
•   The distance covered in the nth second of motion: s_n = u + a(2n - 1)/2 = u + a(n - ½).
•   *Derivation:* s_n = s_n - s_(n-1) = [un + ½an²] - [u(n-1) + ½a(n-1)²] = u + a(2n-1)/2.

*NOTE:* These 3 (or 4) equations apply **ONLY** when acceleration is uniform (constant) and motion is along a straight line. For non-uniform acceleration, calculus must be used instead.`
      },
      {
        title: '9. Motion Under Gravity (Free Fall) & Uniform Circular Motion',
        content: `**Motion Under Gravity (Free Fall) — A Special Case of Uniform Acceleration:**
•   Acceleration due to gravity, g ≈ 9.8 m/s² (taken as 10 m/s² for quick calculations), directed vertically downward towards the center of the Earth.
•   For a body falling freely from rest: u = 0, a = +g. Equations become: v = gt, h = ½gt², v² = 2gh.
•   For a body thrown vertically upward: initial velocity u is upward (taken positive), acceleration is g acting downward (taken negative, i.e., a = −g).
•   Time to reach maximum height: t = u/g. Maximum height: H = u²/2g.
•   Total time of flight (thrown up and returning to same point) = 2u/g.
•   At maximum height, the instantaneous velocity is **ZERO**, but acceleration is **NOT** zero — it continues to be g downward (a common trap).
•   Motion under gravity is symmetric: time of ascent = time of descent, and speed of projection = speed on return to the same point.

**Uniform Circular Motion (UCM):**
•   When a body moves in a circular path with constant speed, its motion is called uniform circular motion.
•   Even though speed is constant, velocity is **NOT** constant because the direction of motion is continuously changing → hence UCM is an accelerated motion.
•   This acceleration is directed towards the center of the circle and is called **centripetal acceleration**: ac = v²/r = ω²r.
•   Angular displacement (θ), angular velocity ω = dθ/dt = 2π/T = 2πn (T = time period, n = frequency).
•   Relation between linear and angular velocity: v = rω.
•   The force causing this acceleration is the centripetal force: Fc = mv²/r, always directed towards the center (not an independent force — provided by tension, gravity, friction, etc.).

*NOTE:* 'Centrifugal force' pushing an object outward is a pseudo/fictitious force that appears only in the rotating non-inertial frame. In the ground inertial frame, only the real centripetal force acts, directed inward.`
      },
      {
        title: '10. Relative Velocity & Master Formula Table',
        content: `**Relative Velocity:**
The relative velocity of object A with respect to object B is the rate of change of position of A as observed from B.
•   Formula (1-D motion): v(AB) = v(A) − v(B).
•   If two objects move in the **SAME** direction, their relative velocity = difference of their velocities.
•   If two objects move in **OPPOSITE** directions, their relative velocity = sum of their velocities.
•   Relative velocity of rain with respect to a moving observer is found by vector subtraction (classic umbrella-tilt problems).

**MASTER FORMULA TABLE — MOTION:**
•   **Speed:** Speed = Distance / Time (Scalar; SI unit: m/s)
•   **Average Speed:** v_avg = Total distance / Total time (Always ≥ 0)
•   **Velocity:** Velocity = Displacement / Time (Vector; direction required)
•   **Average Velocity (const a):** v_avg = (u + v) / 2
•   **Acceleration:** a = (v − u) / t (Vector; SI unit: m/s²)
•   **Instantaneous Velocity:** v = dx/dt (Slope of position–time graph)
•   **Instantaneous Acceleration:** a = dv/dt = d²x/dt² (Slope of velocity–time graph)
•   **Equations of Motion:** v = u + at | s = ut + ½at² | v² = u² + 2as
•   **Distance in nth second:** s_n = u + a(2n − 1)/2
•   **Free fall from rest:** v = gt | h = ½gt² | v² = 2gh (u = 0, a = g ≈ 9.8 m/s²)
•   **Body thrown upward:** t_rise = u/g | H_max = u²/2g | T_flight = 2u/g
•   **Angular Velocity:** ω = θ/t = 2π/T = 2πn
•   **Linear–angular velocity link:** v = rω
•   **Centripetal Acceleration:** a_c = v²/r = ω²r
•   **Centripetal Force:** F_c = mv²/r = mω²r
•   **Relative Velocity (1-D):** v_AB = v_A − v_B
•   **Area under v–t graph:** Displacement = Area (signed)`
      }
    ],
    quizQuestions: [
      {
        id: 'q-phys-1',
        question: 'A cyclist completes one round of a circular track of radius 7 m in 2 minutes. What is her displacement at the end of 2 minutes?',
        options: ['44 m', '0 m', '22 m', '14 m'],
        correctIndex: 1,
        explanation: 'One full round returns the cyclist to the starting point, so displacement is 0, even though the distance travelled is the circumference (44 m).'
      },
      {
        id: 'q-phys-2',
        question: 'The displacement of a body is directly proportional to the square of time elapsed. What can you conclude about its acceleration?',
        options: ['Zero', 'Constant, non-zero', 'Increasing with time', 'Cannot be determined'],
        correctIndex: 1,
        explanation: 's ∝ t² matches the second equation of motion s = ½at² (with u=0), which means the acceleration is uniform (constant) and non-zero.'
      },
      {
        id: 'q-phys-3',
        question: 'A body is thrown vertically upward. At the highest point, which statement is TRUE?',
        options: [
          'Both velocity and acceleration are zero',
          'Velocity is zero, acceleration is g downward',
          'Velocity is maximum, acceleration is zero',
          'Velocity is zero, acceleration is zero momentarily'
        ],
        correctIndex: 1,
        explanation: 'At the topmost point, the velocity momentarily becomes zero, but gravity continues to act, so acceleration remains g, directed downward.'
      },
      {
        id: 'q-phys-4',
        question: "Which of the following can be zero, even when the corresponding physical quantity that measures 'total path covered' is not zero?",
        options: ['Distance', 'Speed', 'Displacement', 'Average speed'],
        correctIndex: 2,
        explanation: 'Displacement can be zero for a round trip (returning to the starting position) while the total distance travelled and average speed remain non-zero.'
      },
      {
        id: 'q-phys-5',
        question: 'A particle moves in a straight line such that its velocity–time graph is a straight line passing through the origin, sloping upward. The corresponding position–time graph will be:',
        options: ['A straight line', 'A parabola', 'A horizontal line', 'A circle'],
        correctIndex: 1,
        explanation: 'v = at (sloping upward from origin) implies s = ½at², which is a parabolic (quadratic) relationship between position s and time t.'
      },
      {
        id: 'q-phys-6',
        question: 'In uniform circular motion, which of these remains constant?',
        options: ['Velocity', 'Acceleration', 'Speed', 'Displacement per second'],
        correctIndex: 2,
        explanation: 'In uniform circular motion, only the speed (magnitude of velocity) remains constant. Velocity and acceleration continuously change direction.'
      },
      {
        id: 'q-phys-7',
        question: 'The area under an acceleration–time graph gives:',
        options: ['Distance travelled', 'Displacement', 'Change in velocity', 'Change in acceleration'],
        correctIndex: 2,
        explanation: 'The area under an acceleration-time graph is the integral ∫a dt, which represents the change in velocity (Δv).'
      },
      {
        id: 'q-phys-8',
        question: 'A train travels from A to B at 60 km/h and returns from B to A along the same route at 40 km/h. The average speed for the entire journey is:',
        options: ['50 km/h', '48 km/h', '20 km/h', '100 km/h'],
        correctIndex: 1,
        explanation: 'For equal distance intervals, average speed is the harmonic mean: 2v1v2/(v1+v2) = 2×60×40/(60+40) = 48 km/h. (A very common trap!)'
      },
      {
        id: 'q-phys-9',
        question: 'A body starts from rest and moves with uniform acceleration. The ratio of distances covered in the 1st, 2nd, and 3rd seconds is:',
        options: ['1 : 1 : 1', '1 : 2 : 3', '1 : 3 : 5', '1 : 4 : 9'],
        correctIndex: 2,
        explanation: 'Using the formula for distance in the nth second: s_n = u + a(2n-1)/2. With u=0, the distances are proportional to (2n-1), giving the ratio 1:3:5.'
      },
      {
        id: 'q-phys-10',
        question: 'Two cars A and B move in the same direction with speeds 80 km/h and 60 km/h respectively. The relative velocity of A with respect to B is:',
        options: ['140 km/h', '20 km/h', '60 km/h', '80 km/h'],
        correctIndex: 1,
        explanation: 'For same-direction motion, the relative velocity is the difference of their velocities: v_AB = v_A - v_B = 80 - 60 = 20 km/h.'
      },
      {
        id: 'q-phys-11',
        question: 'A position–time graph is a straight vertical line. This situation represents:',
        options: [
          'The object is at rest',
          'The object moves with uniform velocity',
          'The object has infinite velocity — physically impossible',
          'The object is uniformly accelerated'
        ],
        correctIndex: 2,
        explanation: 'A vertical line implies the object changes position in zero time, which would mean an infinite and physically impossible velocity.'
      },
      {
        id: 'q-phys-12',
        question: 'For a body under free fall, which quantity–time graph is a straight line NOT passing through the origin if the body is dropped from rest?',
        options: ['Velocity–time', 'Displacement–time', 'Acceleration–time', 'Both velocity–time and acceleration–time'],
        correctIndex: 2,
        explanation: 'For free fall from rest, v=gt (passes through origin) and s=½gt² (parabola). The acceleration-time graph is a horizontal line at a=g, which is a straight line that does NOT pass through the origin (starts at a=g on the y-axis at t=0).'
      },
      {
        id: 'q-phys-13',
        question: 'A stone dropped from a height reaches the ground with velocity v. To double this striking velocity by dropping from the same location (ignore air resistance), the height must be:',
        options: ['Doubled', 'Made 4 times', 'Made √2 times', 'Made 8 times'],
        correctIndex: 1,
        explanation: 'From v² = 2gh, v is proportional to √h. To double the velocity v, the height h must be made 4 times larger.'
      },
      {
        id: 'q-phys-14',
        question: "A car's velocity–time graph shows the line dropping below the time-axis after t = 5 s. Physically this means:",
        options: [
          'The car has stopped',
          'The car has reversed its direction of motion',
          "The car's speedometer is faulty",
          'The graph is invalid'
        ],
        correctIndex: 1,
        explanation: 'A negative velocity on a velocity-time graph indicates that the object has reversed its direction and is moving in the opposite direction.'
      },
      {
        id: 'q-phys-15',
        question: 'Assertion: Average velocity can never be greater in magnitude than average speed, for the same time interval. Reason: Displacement magnitude can never exceed distance travelled.',
        options: [
          'Both true, Reason correctly explains Assertion',
          'Both true, Reason does NOT correctly explain Assertion',
          'Assertion true, Reason false',
          'Both false'
        ],
        correctIndex: 0,
        explanation: 'Since the magnitude of displacement is always less than or equal to the total distance travelled, dividing both by time t preserves the inequality, making |average velocity| ≤ average speed.'
      }
    ]
  },
  {
    id: 'ch1-chem',
    subject: 'Chemistry',
    chapterNumber: 1,
    title: 'Matter in Our Surroundings',
    subtitle: 'Inter-particle physical properties and states of matter, extended to Intermediate rigor.',
    quickFact: 'Sublimation is the process where a solid changes directly into gas without turning into a liquid first. Dry ice (solid carbon dioxide) is stored under high pressure and sublimes directly to gas at 1 atm.',
    contents: [
      {
        title: '1. What is Matter?',
        content: `Anything that occupies space, has mass, and can be perceived by our senses (directly or indirectly) is called **matter**. Matter is made up of extremely tiny particles.

**Ancient & Modern Classification of Matter:**
•   **Ancient Indian Philosophers:** Classified all matter into five basic elements — the **'Panch Tatva'** (air, earth, fire, sky, and water).
•   **Modern Science Classification:**
    1.  **Physical Classification:** Based on physical states — Solid, Liquid, Gas (with plasma and Bose-Einstein condensate at advanced levels).
    2.  **Chemical Classification:** Based on composition — Elements, Compounds, Mixtures.`
      },
      {
        title: '2. Characteristics of Particles of Matter',
        content: `Three fundamental characteristics define the microscopic particles of matter:
•   **Particles of matter have space between them** (inter-particle space).
•   **Particles of matter are continuously moving** — they possess kinetic energy. As temperature increases, the kinetic energy of particles increases (this is the core of the Kinetic Molecular Theory).
•   **Particles of matter attract each other** — there exist inter-particle forces of attraction keeping particles bound together; the strength of this force varies from one substance to another.

**Diffusion:**
•   The intermixing of particles of two different types of matter on their own, due to their random motion.
•   Diffusion is fastest in gases, slower in liquids, and slowest in solids because inter-particle space and kinetic energy are greatest in gases and least in solids.
•   Diffusion rates increase with temperature since particles gain more kinetic energy.`
      },
      {
        title: '3. The Three States of Matter',
        content: `Matter around us exists in solid, liquid, or gaseous states, arising from differences in inter-particle characteristics:

**Solids:**
•   Have a definite shape, distinct boundaries, and a fixed (definite) volume with negligible compressibility.
•   Particles are extremely closely packed (minimum inter-particle space) due to very strong forces of attraction.
•   Particles have fixed positions and can only vibrate about their mean positions; they cannot translate or flow. Very rigid and high density.

**Liquids:**
•   Have no fixed shape but have a fixed (definite) volume; they take the shape of the container they are poured into.
•   Inter-particle space is greater than solids; force of attraction is weaker than solids but stronger than gases.
•   Particles have fluidity and can flow. Almost incompressible under ordinary conditions.

**Gases:**
•   Have neither a fixed shape nor a fixed volume; they completely occupy any container they are kept in.
•   Inter-particle space is maximum; force of attraction is negligible/minimum.
•   Particles move randomly at high speeds in all directions, exerting uniform pressure on the walls of their container due to continuous collisions.`
      },
      {
        title: '4. Comparison Table — States of Matter',
        content: `**Detailed comparison of Solid, Liquid and Gas states:**
•   **Shape:** Definite | Takes container's shape | No definite shape
•   **Volume:** Definite | Definite | No definite volume
•   **Compressibility:** Negligible | Very low | High
•   **Inter-particle Space:** Least | Intermediate | Maximum
•   **Force of Attraction:** Strongest | Intermediate | Weakest (negligible)
•   **Kinetic Energy of Particles:** Least | Intermediate | Maximum
•   **Density:** Generally highest | Generally intermediate | Lowest
•   **Fluidity (Ability to flow):** Rigid (cannot flow) | Can flow | Can flow easily
•   **Rate of Diffusion:** Extremely slow | Slow | Very fast`
      },
      {
        title: '5. Change of State of Matter — Interconversion',
        content: `Matter can change from one state to another by altering temperature and/or pressure. This is a physical change (no new substance is formed and it is fully reversible).

**(a) Effect of Change of Temperature:**
•   **Melting (Fusion):** Solid → Liquid. The temperature at which a solid melts at atmospheric pressure is called its **melting point**. Melting point is a characteristic purity test — a pure substance has a sharp, fixed melting point, whereas an impure substance melts over a range of temperatures.
•   **Freezing (Solidification):** Liquid → Solid on cooling. For a pure substance, freezing point = melting point.
•   **Vaporisation (Boiling):** Liquid → Gas on heating. Occurs at a specific boiling point (a bulk property).
•   **Condensation (Liquefaction):** Gas → Liquid on cooling.
•   **Sublimation:** Solid → Gas directly on heating, without passing through the liquid state (and the reverse process, Gas → Solid directly, is **deposition**). Examples: camphor, naphthalene balls, ammonium chloride, dry ice (solid CO₂), iodine.`
      },
      {
        title: '6. Latent Heat & Pressure Effects',
        content: `**Latent Heat:**
During a change of state, the temperature of the substance remains completely **CONSTANT** even though heat is continuously being supplied. This is because the supplied heat is used entirely to overcome the forces of attraction between particles (to change the state), and not to raise the kinetic energy/temperature.
•   **Latent Heat of Fusion:** The amount of heat energy required to change 1 kg of a solid completely into liquid at its melting point and 1 atm pressure, without any temperature change.
•   **Latent Heat of Vaporisation:** The amount of heat energy required to convert 1 kg of a liquid completely into vapour/gas at its boiling point and 1 atm pressure, without any temperature change.
•   *Note:* Latent heat of vaporisation is much greater than latent heat of fusion because vaporisation requires overcoming inter-particle forces almost completely to create widely separated gases.
•   *Syllabus Note:* A temperature-time graph of ice being heated to steam shows two completely flat (plateau) regions (at 0°C and 100°C) representing latent heat.

**(b) Effect of Change of Pressure:**
•   Increasing pressure forces particles closer together, which can liquefy gases even without lowering the temperature much.
•   **Dry Ice (Solid CO₂):** Manufactured by compressing and cooling CO₂ gas. It is stored under extremely high pressure. When pressure is released to atmospheric pressure (1 atm), solid CO₂ sublimes directly to CO₂ gas without turning into liquid.`
      },
      {
        title: '7. Evaporation',
        content: `Evaporation is the phenomenon of a liquid changing into vapour at any temperature **BELOW** its boiling point. It is a slow, surface phenomenon (unlike boiling, which occurs throughout the bulk of the liquid and is rapid).

**Microscopic Explanation (Kinetic Theory):**
Not all particles in a liquid have the same kinetic energy. Some particles at the surface, possessing higher kinetic energy than average, are able to overcome the forces of attraction of surrounding particles and escape into the vapour state.

**Factors Affecting the Rate of Evaporation:**
1.  **Surface Area (Increases rate):** More surface area exposes more particles to escape (e.g., spreading clothes out to dry).
2.  **Temperature (Increases rate):** More particles acquire enough kinetic energy to escape.
3.  **Humidity (Decreases rate):** If the surrounding air is already saturated with water vapour, it has less capacity to accommodate more, slowing evaporation.
4.  **Wind Speed (Increases rate):** Moves water vapour molecules away from the surface, reducing local humidity.

**Evaporation Causes Cooling:**
During evaporation, high-KE particles escape, leaving behind particles with lower average kinetic energy. This lowers the temperature of the liquid.
•   *Applications:* Sweating cools the body; water in earthen pots (matkas) stays cool as water seeps through pores and evaporates; wearing cotton clothes in summer; applying spirit/alcohol on skin gives a cooling sensation.`
      },
      {
        title: '8. Boiling vs Evaporation & Master Term Table',
        content: `**Boiling vs Evaporation — Direct Comparison:**
•   **Occurs at:** Fixed temperature (boiling point) | Any temperature below boiling point
•   **Where it occurs:** Throughout the bulk (bubbles form) | Only from the exposed surface
•   **Speed:** Rapid | Slow, gradual
•   **Heat Requirement:** Requires continuous, external heat supply | Occurs naturally using ambient energy
•   **Surface Area Dependence:** Independent | Highly dependent

**MASTER TERM TABLE — MATTER IN OUR SURROUNDINGS:**
•   **Sublimation:** Solid changes directly to gas on heating, bypassing liquid.
•   **Deposition:** Gas changes directly to solid on cooling, bypassing liquid.
•   **Melting Point:** Fixed temperature at which a solid changes to liquid at 1 atm.
•   **Boiling Point:** Fixed temperature at which a liquid rapidly changes to gas throughout its bulk.
•   **Latent Heat of Fusion:** Heat required to convert 1 kg of solid to liquid at its melting point.
•   **Latent Heat of Vaporisation:** Heat required to convert 1 kg of liquid to gas at its boiling point.
•   **Evaporation:** Surface conversion of liquid to vapour below boiling point; causes cooling.
•   **Diffusion:** Intermixing of particles of two different substances on their own.
•   **Compressibility:** Extent to which volume is reduced under pressure (Gases > Liquids > Solids).`
      }
    ],
    quizQuestions: [
      {
        id: 'q-chem-1',
        question: 'A few crystals of potassium permanganate placed at the bottom of water in a beaker, without stirring, colour the entire water purple after some time. This is direct evidence for:',
        options: [
          'Particles of matter attract each other',
          'Particles of matter have space between them and are continuously moving',
          'Particles of matter have a fixed shape',
          'Water is a compound'
        ],
        correctIndex: 1,
        explanation: 'The spontaneous, gradual spreading of colour (diffusion) without stirring proves that particles of matter are continuously moving and there is space between water particles for KMnO4 particles to diffuse into.'
      },
      {
        id: 'q-chem-2',
        question: 'Which of the following correctly explains why the temperature does NOT rise while ice at 0°C is melting into water at 0°C, even on continuous heating?',
        options: [
          'The specific heat of ice is infinite',
          'The heat supplied is used entirely to overcome forces of attraction between particles (latent heat), not to raise kinetic energy',
          'Ice is a poor conductor of heat',
          'Water absorbs heat faster than ice releases it'
        ],
        correctIndex: 1,
        explanation: 'During a change of state, all supplied heat energy (latent heat) is used to weaken and break the inter-particle forces of attraction, rather than raising the kinetic energy (which would raise temperature).'
      },
      {
        id: 'q-chem-3',
        question: 'Dry ice (solid CO₂) placed in an open container at room temperature and atmospheric pressure will:',
        options: [
          'Melt into liquid CO₂ first, then evaporate',
          'Sublime directly into CO₂ gas',
          'Remain solid indefinitely',
          'Explode due to high internal pressure'
        ],
        correctIndex: 1,
        explanation: 'At normal atmospheric pressure (1 atm), carbon dioxide cannot exist in liquid form. Solid CO₂ sublimes directly into gas, which is why it is called dry ice.'
      },
      {
        id: 'q-chem-4',
        question: 'Clothes dry faster on a windy day mainly because:',
        options: [
          'Wind increases the temperature of the clothes',
          'Wind removes the water vapour molecules accumulated near the cloth surface, allowing faster evaporation',
          'Wind increases atmospheric pressure',
          'Wind decreases the surface area of clothes'
        ],
        correctIndex: 1,
        explanation: 'Increased wind speed blows away the accumulated water vapour molecules near the cloth surface, reducing local humidity and allowing more water molecules to evaporate rapidly.'
      },
      {
        id: 'q-chem-5',
        question: 'Sweating cools the human body because:',
        options: [
          'Sweat has a very low specific heat',
          'Only high-kinetic-energy water particles escape as vapour, leaving behind lower-energy particles, thereby lowering the average temperature of what remains',
          'Sweat reacts chemically with the skin, releasing cold',
          'Sweat increases the boiling point of the skin surface'
        ],
        correctIndex: 1,
        explanation: 'Evaporation is selective; only the most energetic water particles escape as vapour. This reduces the average kinetic energy (and thus temperature) of the remaining sweat, producing a cooling effect.'
      },
      {
        id: 'q-chem-6',
        question: 'On a humid rainy day, clothes take longer to dry. This is because:',
        options: [
          'Humidity increases wind speed',
          'The air is already saturated (or close to it) with water vapour, reducing the driving force for further evaporation',
          'High humidity increases the boiling point of water in clothes',
          'Humidity increases the surface tension of water'
        ],
        correctIndex: 1,
        explanation: 'When the surrounding air already contains a high concentration of water vapour (high humidity), its capacity to accept more moisture is extremely low, heavily slowing the rate of evaporation.'
      },
      {
        id: 'q-chem-7',
        question: 'Which pair of processes are exact opposites of each other in terms of direction of state change?',
        options: [
          'Melting and Evaporation',
          'Sublimation and Deposition',
          'Boiling and Melting',
          'Freezing and Evaporation'
        ],
        correctIndex: 1,
        explanation: 'Sublimation is the direct transition from solid to gas, while deposition is the direct transition from gas to solid, making them true exact opposites.'
      },
      {
        id: 'q-chem-8',
        question: 'A pure substance shows a sharp, fixed melting point, while an impure sample of the same substance:',
        options: [
          'Melts at exactly the same fixed point as the pure form',
          "Melts over a range of temperature, usually below the pure substance's melting point",
          'Does not melt at all',
          'Boils before it melts'
        ],
        correctIndex: 1,
        explanation: 'Impurities disrupt the regular packing and bonds of particles in a crystal lattice, lowering the melting point and causing the substance to melt over a wider range of temperatures.'
      },
      {
        id: 'q-chem-9',
        question: 'Boiling differs fundamentally from evaporation because boiling:',
        options: [
          'Can occur at any temperature',
          'Occurs only from the surface of the liquid',
          'Occurs throughout the bulk of the liquid at one fixed temperature, with bubble formation',
          'Does not require any heat energy'
        ],
        correctIndex: 2,
        explanation: 'Boiling is a rapid, bulk phenomenon that occurs at a specific fixed temperature (boiling point) with bubbles forming throughout the entire liquid volume, unlike evaporation which is a slow surface-only process.'
      },
      {
        id: 'q-chem-10',
        question: 'Increasing pressure on a gas, while keeping temperature low, favours a change of state towards:',
        options: [
          'Gas remaining unchanged',
          'Liquid or solid state (particles pushed closer, increasing effective attraction)',
          'Plasma state',
          'Higher compressibility'
        ],
        correctIndex: 1,
        explanation: 'High pressure forces gas particles closer together (reducing inter-particle space) which increases the effective intermolecular forces of attraction, promoting condensation into liquid or solid states.'
      },
      {
        id: 'q-chem-11',
        question: 'Assertion: Latent heat of vaporisation of water is greater than its latent heat of fusion. Reason: To convert liquid into vapour, the particles must almost completely overcome the forces of attraction, unlike in melting where partial freedom is enough.',
        options: [
          'Both true, Reason correctly explains Assertion',
          'Both true, Reason does not correctly explain Assertion',
          'Assertion true, Reason false',
          'Both false'
        ],
        correctIndex: 0,
        explanation: 'Vaporisation requires separating particles completely into widely dispersed gas molecules, which demands overcoming almost all cohesive forces. Melting only requires loosening the lattice structure slightly, needing much less energy.'
      },
      {
        id: 'q-chem-12',
        question: 'Ice floats on water. This is an exception to the general trend that:',
        options: [
          'Gases are less dense than liquids',
          'Solids are generally denser than their corresponding liquid state',
          'Liquids diffuse faster than solids',
          'Solids have a fixed shape'
        ],
        correctIndex: 1,
        explanation: 'Normally, the solid form of a substance is denser than its liquid form. Ice is a rare exception, being less dense than liquid water due to its open, cage-like hydrogen-bonded crystal structure.'
      }
    ]
  }
];
