import { Post } from 'src/app/post.model';

export const MockPostUk: Post[] = [
  {
    id: '1',
    username: 'Bikram Basnet',
    title: 'How can I apply to United Kingdom. I really want to study there ? ',
    subtitle:
      'I am a high school student and I was wondering how can I apply to USA ?. Moreover, I have decent Grade and 1400+ in SAT ',
    postUrl:
      'https://images.unsplash.com/photo-1600628597686-c0d2a90a6ac0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
    avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    timestamp: Date.now(),
    comments: [],
    like: 500,
    votes: 400,
  },
  {
    id: '2',
    username: 'Joban Pannu ',
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
    username: 'Ashmita Baral',
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
