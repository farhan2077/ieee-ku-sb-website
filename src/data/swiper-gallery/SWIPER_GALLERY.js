import about from 'data/swiper-gallery/images/about.webp';
import event from 'data/swiper-gallery/images/event.webp';
import join from 'data/swiper-gallery/images/join.webp';

export const SWIPER_GALLERY = [
  {
    id: 3,
    title:
      'Join now Lorem ipsum dolor sit one two three four five six seven eight nine',
    summary:
      'Join now Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est harum provident voluptas vitae, namamet consectetur adipisicing elit. Beatae est harum provident voluptas vitae, nam',
    link: '#',
    linkText: 'More about joining',
    image: join,
  },
  {
    id: 2,
    title: 'Event now Lorem ipsum',
    summary: 'Event now',
    link: '#',
    linkText: 'See events',
    image: event,
  },
  {
    id: 1,
    title: 'About now Lorem ipsum dolor sit ok ok ok',
    summary: 'About now',
    link: '/about',
    linkText: 'See about',
    image: about,
  },
];
