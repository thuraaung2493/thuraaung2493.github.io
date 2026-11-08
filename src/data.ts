export const personalInfo = {
  name: 'Thura Aung',
  alias: 'Htet Minn Khant',
  title: 'Full Stack Developer',
  headline:
    'Building financial applications, payment integrations, and developer tools with Laravel, Node.js, and React.',
  opportunities: 'Open to full-time roles and freelance projects.',
  contactIntro:
    'I’m interested in full-time full-stack roles and freelance projects involving web applications, APIs, or payment integrations. Tell me about your team or what you’re building.',
  avatar: '/profile.jpg',
  location: 'Bangkok, Thailand',
  phone: '(+66) 92-856-0419',
  email: 'thuraaung2493@gmail.com',
  bio: 'I build web applications and APIs for financial services, with hands-on experience in offline field workflows and payment integrations. My work spans Laravel and MySQL backends, React interfaces, and Node.js services. I also create open-source tools for Laravel business rules, schema-driven forms, Myanmar data conversion, and TypeScript API scaffolding.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/thura-aung-018a5a183/',
    github: 'https://github.com/thuraaung2493',
    twitter: 'https://twitter.com/Thura_Aung2493',
    cv: 'https://thura-cv.s3.ap-southeast-1.amazonaws.com/Thura_Aung_CV.pdf'
  }
};

export const experience = [
  {
    role: 'Senior Full-stack Developer',
    company: 'Hana Microfinance Limited',
    period: 'Nov 2023 – Present',
    description: [
      'Restructured the field app’s download process from a single API into multiple focused Laravel endpoints to prepare interview data before field visits.',
      'Develop and maintain a React field app that lets field officers download interview data, conduct interviews offline, and upload completed interviews as compressed JSON when connected.',
      'Maintain the Laravel and MySQL backend, web interfaces, and admin dashboard that support field operations.'
    ]
  },
  {
    role: 'Full-stack Developer',
    company: 'Solinx Co., Ltd',
    period: 'May 2022 – Sep 2023',
    description: [
      'Developed APIs and admin dashboards for FoodMM, JDJR, and Movie Links using Laravel and MySQL.',
      'Built React interfaces with Ant Design for these startup projects, including CRUD workflows.',
      'Contributed to the Node.js-based You & ME project during development.'
    ]
  },
  {
    role: 'Senior Web Developer',
    company: 'Mother Finance Co., Ltd',
    period: 'May 2019 – Feb 2021',
    description: [
      'Took over a vendor-developed PHP finance platform and maintained its APIs, web interface, and admin dashboard.',
      'Integrated KBZ Pay, MPT Pay, and 2C2P payment services into the finance platform.',
      'Developed the Collection App and other internal tools using Node.js and React.'
    ]
  },
  {
    role: 'Junior Web Developer',
    company: 'Bagan Innovation Technology',
    period: 'May 2018 – May 2019',
    description: [
      'Independently developed Bagan OCR using Node.js, the Google OCR API, and queues to process OCR work.',
      'Developed and maintained ShweSuBoo APIs, web interfaces, and admin features using Laravel, MySQL, and Vue.js.'
    ]
  }
];

export const education = [
  {
    degree: 'Bachelor of Mechatronic Engineering',
    school: 'West Yangon Technology University',
    period: '2009 Dec - 2015 Feb',
    description: ''
  },
  {
    degree: 'Web Professional Foundation',
    school: 'Myanmar Links',
    period: '2017 June - 2017 Sep',
    description: 'Foodcr@zy Project · HTML, CSS(Bootstrap), Javascript'
  },
  {
    degree: 'Web Professional Advanced',
    school: 'Myanmar Links',
    period: '2017 Oct - 2018 June',
    description: 'Trippodise House Renting Laravel Project'
  }
];

export const certificates = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'View Credential',
    url: 'https://www.credly.com/badges/18f9a23f-7bbb-4bde-9137-4afb972bc829/public_url'
  },
  {
    title: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google Cloud',
    date: 'View Credential',
    url: 'https://www.credly.com/badges/98f9cb07-02fd-40c6-9580-d204bb557a93/public_url'
  }
];

export const projects = [
  {
    id: 'laravel-rulecraft',
    name: 'Laravel Rulecraft',
    image: {
      src: '/projects/laravel-rulecraft.jpg',
      alt: 'Laravel Rulecraft banner with its branching R logo.'
    },
    category: 'Laravel package',
    description:
      'A Laravel package for database-backed business rules, nested policy groups, and conditional role permissions, with an embeddable visual rule builder.',
    problem:
      'Business conditions and permission checks can become scattered across controllers and services. Rulecraft brings them into reusable policies evaluated against application data.',
    highlights: [
      'Combine database-backed rules with nested ALL/ANY groups and Symfony expressions.',
      'Evaluate policies separately from explicitly running registered actions.',
      'Add conditional role permissions through optional Spatie Laravel Permission integration and Blade directives.',
      'Edit rules visually, preview decisions, and transfer policies with versioned JSON import/export.'
    ],
    exampleLabel: 'Create and evaluate a business rule',
    example: `use Thuraaung\\Rulecraft\\Facades\\Rulecraft;
use Thuraaung\\Rulecraft\\Models\\RuleGroup;

$group = RuleGroup::create([
    'name' => 'order-discount',
    'match' => 'all',
]);
$group->rules()->create([
    'name' => 'minimum-total',
    'expression' => 'order_total >= 100',
]);

$result = Rulecraft::group('order-discount')
    ->evaluate(['order_total' => 150]);

$result->passed(); // true`,
    url: 'https://packagist.org/packages/thuraaung2493/laravel-rulecraft',
    registry: 'Packagist',
    github: 'https://github.com/thuraaung2493/laravel-rulecraft',
    tags: ['PHP', 'Laravel', 'Symfony', 'Blade', 'Open Source']
  },
  {
    id: 'dynamix-forms',
    name: 'Dynamix Forms',
    image: {
      src: '/projects/dynamix-forms.jpg',
      alt: 'Dynamix Forms banner with its branching-field logo.'
    },
    category: 'Form platform',
    description:
      'A JSON-driven form platform with a framework-independent engine, reusable React packages, and a visual builder backed by an Express API and PostgreSQL.',
    problem:
      'Forms with changing requirements often duplicate field logic, validation, and UI code. A shared JSON schema keeps the form engine, renderer, and builder working from one definition.',
    highlights: [
      'Define 14 field types with nested conditional fields, calculations, and validation.',
      'Render schemas in React with reusable hooks and native, Bootstrap, or shadcn/ui adapters.',
      'Create forms visually, preview their behavior, and import or export JSON schemas.',
      'Manage private forms with authenticated access, draft saves, and immutable published versions.'
    ],
    exampleLabel: 'Install the beta React packages',
    example: `npm install @thuraaung2493/dynamic-form-core@beta
npm install @thuraaung2493/dynamic-form-react@beta`,
    url: 'https://www.npmjs.com/package/@thuraaung2493/dynamic-form-react',
    registry: 'npm',
    github: 'https://github.com/thuraaung2493/dynamix-forms',
    tags: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'npm', 'Open Source']
  },
  {
    id: 'mm-nrc-converter',
    name: 'mm-nrc-converter',
    image: {
      src: '/projects/mm-nrc-converter.jpg',
      alt: 'mm-nrc-converter banner with its ID-card conversion logo.'
    },
    category: 'JavaScript package',
    description:
      'A reusable npm package for converting Myanmar National Registration Card (NRC) formats and numerals between English and Myanmar.',
    problem:
      'Applications accepting NRC details need to work with both English and Myanmar formats, including different numeral systems.',
    highlights: [
      'Convert NRC formats in both directions between English and Myanmar.',
      'Detect the input format and select the conversion automatically.',
      'Use numeral conversion helpers independently of NRC conversion.'
    ],
    exampleLabel: 'Convert Myanmar numerals',
    example: `const converter = require('mm-nrc-converter');

converter.converNumbers('၁၂၃', 'mm', 'eng');
// Returns '123'`,
    url: 'https://www.npmjs.com/package/mm-nrc-converter',
    registry: 'npm',
    github: 'https://github.com/thuraaung2493/mm-nrc-converter',
    tags: ['JavaScript', 'npm', 'Open Source']
  },
  {
    id: 'ts-expressor',
    name: 'ts-expressor',
    image: {
      src: '/projects/ts-expressor.jpg',
      alt: 'ts-expressor banner with its code-bracket and forward-arrow logo.'
    },
    category: 'Developer CLI',
    description:
      'A CLI for generating TypeScript Express applications and the controllers, repositories, and validation schemas used to build APIs.',
    problem:
      'Starting an API often means repeating project setup and creating the same application structure before feature development can begin.',
    highlights: [
      'Scaffold a TypeScript Express application with a single command.',
      'Generate controller and repository classes for API features.',
      'Create validation schemas with dedicated file-generation commands.'
    ],
    exampleLabel: 'Scaffold an API and a controller',
    example: `npx ts-expressor new my-api
cd my-api
npx ts-expressor make:controller user`,
    url: 'https://www.npmjs.com/package/ts-expressor',
    registry: 'npm',
    github: 'https://github.com/thuraaung2493/ts-expressor',
    tags: ['TypeScript', 'Express.js', 'Node.js', 'npm', 'Open Source']
  }
];

export const skills = [
  'PHP',
  'Node.js',
  'JavaScript',
  'TypeScript',
  'Laravel',
  'React',
  'Tailwind CSS',
  'Bootstrap',
  'MySQL',
  'Git'
];

export const workflow = [
  'Mobile-First, Responsive Design',
  'Cross Browser Testing & Debugging',
  'Cross Functional Teams',
  'Agile Development & Scrum'
];
