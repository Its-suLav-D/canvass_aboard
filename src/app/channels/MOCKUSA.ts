import { Post } from 'src/app/post.model';

export const MockPostUsa: Post[] = [
  {
    id: '1',
    username: 'Anish Shahi',
    title:
      'I have four year gap and I want to resume my eduation. I was wondering if it is possible to Get Visa and pursue my american Degree ?',
    subtitle:
      'I am a high school student and I was wondering how can I apply to USA ?. Moreover, I have decent Grade and 1400+ in SAT ',
    postUrl:
      'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2564&q=80',
    avatar:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/68682889_1371783336318071_639296145318739968_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=1HoLUheNLlgAX9dyQc3&_nc_ht=scontent-sjc3-1.xx&oh=fbda8816c9d70984fb493343ba0566b8&oe=6069FE4A',
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
