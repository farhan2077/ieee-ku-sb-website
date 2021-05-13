export const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    children: [
      {
        label: 'About IEEE',
        href: '/about-ieee',
      },
      // {
      //   label: 'About region 10',
      //   href: '#',
      // },
      // {
      //   label: 'About Bangladesh section',
      //   href: '#',
      // },
      {
        label: 'About KU student branch',
        href: '/about-ku-student-branch',
      },
    ],
  },
  {
    label: 'Activities',
    children: [
      {
        label: 'Events',
        href: '/events',
      },
      {
        label: 'News',
        href: '/news',
      },
    ],
  },
  {
    label: 'Members',
    children: [
      {
        label: 'All members',
        href: '/members',
      },
      {
        label: 'Member benefits',
        href: '/member-benefits',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
