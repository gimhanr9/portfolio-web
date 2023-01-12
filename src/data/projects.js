const projects = [
  {
    icon: '',
    title: 'Contactless Doorbell',
    description:
      'A system consisting of a mobile application, Flask REST API and a Raspberry Pi device acting as the doorbell specializing in masked face recognition.',
    moreDetails: [
      'A contactless doorbell solution developed to improve home security while also taking into consideration the COVID-19 pandemic. This system includes a Rapberry Pi device equipped with a motion sensor and camera as the doorbell, a mobile application and a Flask API which mediates communication between the app and doorbell while also handling most of the functionalities.',
      'This system allows house owners to keep track of visitors and notifies the house owner through a push notification if a visitor arrives. It uses a convoltional neural network trained with a large number of preprocessed images to achieve a higher accuracy in masked and unmasked face recognition.',
      'The system is currently in the process of a feature upgrade that includes video communication using WebRTC technology for real time streaming. The house owner would be able to see and talk to the visitor while the visitor would only be able to hear and talk to the house owner.',
    ],

    technologies: [
      'Flask',
      'Tensorflow',
      'Keras',
      'Flutter',
      'Firebase',
      'OneSignal',
      'SendGrid',
      'JWT',
      'GCP',
      'Masked face recognition',
      'Image processing',
    ],
    link: 'https://github.com/gimhanr9/doorbell_app_flutter',
    completed: true,
    isPublic: true,
  },
  {
    icon: '',
    title: 'Shopping Website',
    description:
      'A modern ecommerce website being built using the MERN stack and includes payment gateway integration.',
    moreDetails: [],
    technologies: [
      'ReactJS',
      'MUI',
      'NodeJS',
      'Express',
      'MongoDB',
      'Redux',
      'SendGrid',
      'JWT',
    ],
    link: '',
    completed: false,
    isPublic: true,
  },
  {
    icon: '',
    title: 'Android Shopping Application',
    description: '',
    moreDetails: [],
    technologies: [
      'Android',
      'Java',
      'Biometric authentication',
      'Firebase',
      'Room library',
      'Navigation component',
    ],
    link: 'https://github.com/gimhanr9/lookgood-android',
    completed: true,
    isPublic: true,
  },
  {
    icon: '',
    title: 'Applocker',
    description:
      'An Android applocker being developed using the MVVM architecture and navigation components with enhanced fetures such as fingerprint authentication. The project uses android system APIs and currently lists all applications while the locking process is in progress.',
    moreDetails: [],
    technologies: [
      'Android',
      'Java',
      'Biometric authentication',
      'Firebase',
      'Room library',
      'Navigation component',
    ],
    link: '',
    completed: false,
    isPublic: false,
  },

  {
    icon: '',
    title: 'Flutter Shopping Application',
    description:
      'A flutter ecommerce mobile application that includes various features including Firebase auth and forgot password, cart, purchase rating and review, view and ask product related questions from seller, read product ratings and reviews, product variants and stock management.',
    moreDetails: [],
    technologies: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/gimhanr9/lookgood_flutter',
    completed: true,
    isPublic: true,
  },
  {
    icon: '',
    title: 'Student Enquiry Management System',
    description:
      'A student enquiry management system built using C++ and data structures to enable an university to maintain and update each enquiry from the time it is entered until it is resolved.',
    moreDetails: [],
    technologies: ['C++', 'Data structures'],
    link: 'https://github.com/gimhanr9/student-enquiry-management',
    completed: true,
    isPublic: true,
  },
];

export default projects;
