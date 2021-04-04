import { Post } from 'src/app/post.model';

export const MockPostAustralia: Post[] = [
  {
    id: '1',
    username: 'Dharma Chhetri',
    title: 'How can I apply to Australia. I really want to study there ? ',
    subtitle:
      'I am a high school student and I was wondering how can I apply to Australia ?.It has been like more than six months that I prepared for IELTS examination, and now I really want to make most out of it. So can Please anyone help me to land into Australian University!! 😑 ',
    postUrl:
      'https://images.unsplash.com/photo-1526958977630-bc61b30a2009?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80',
    avatar:
      'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
    timestamp: Date.now(),
    comments: [],
    like: 500,
    votes: 400,
  },
  {
    id: '2',
    username: 'Avinash Kumar ',
    title: 'What is SEVIS? I always get Confused ',
    subtitle:
      'I am a newbee and I dont know what is SEVIS. Can anyone please tell me ? ',
    postUrl:
      'https://studyinthestates.dhs.gov/sites/default/files/SEVIS%20I-901%20Video%20image.png',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    timestamp: Date.now(),
    comments: [],
    like: 500,
    votes: 400,
  },
  {
    id: '3',
    username: 'Reju Poudel',
    title:
      'I always get get confused. Please tell me how can I go to United Kingdom ? ',
    subtitle:
      'I am a newbee and I dont know what is SEVIS. Can anyone please tell me ? ',
    postUrl: '',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    timestamp: Date.now(),
    comments: [],
    like: 500,
    votes: 400,
  },
];
