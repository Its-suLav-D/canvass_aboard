import { Post } from 'src/app/post.model';

export const MockPostGerman: Post[] = [
  {
    id: '1',
    username: 'Prajwol Poudel',
    title: 'How can I apply to Germany. I really want to study there ? ',
    subtitle:
      'I am a high school student and I was wondering how can I apply to Germany ?. Moreover, I have decent Grade and 1400+ in SAT ',
    postUrl:
      'https://images.unsplash.com/photo-1554072675-66db59dba46f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80',
    avatar:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/57604463_2276386379282606_418238980367056896_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Ht5D0IhZ81gAX_d6dab&_nc_ht=scontent-sjc3-1.xx&oh=b64e6a5fcab3d55cc1ef7b7eefffd541&oe=606B5A56',
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
