export interface Menu {
  id?: number;
  name: string;
  url?: string;
  icon?: string;
  children?: Menu[];
  isButton?: boolean;
}

export const MENU_ITEMS: Menu[] = [
  {
    id: 1,
    name: 'Jobs',
    icon: 'briefcase',
    children: [
      { id: 11, name: 'Job Listings', url: '/jobs/list' },
      { id: 12, name: 'Post a Job', url: '/jobs/post' },
      { id: 13, name: 'Job Applications', url: '/jobs/applications' },
    ],
  },
  {
    id: 2,
    name: 'About Us',
    icon: 'people',
    children: [
      { id: 21, name: 'Company Overview', url: '/about/overview' },
      { id: 22, name: 'Our Team', url: '/about/team' },
      { id: 23, name: 'Careers', url: '/about/careers' },
    ],
  },
  {
    id: 3,
    name: 'Profile',
    icon: 'person',
    children: [
      { id: 31, name: 'View Profile', url: '/profile/view' },
      { id: 32, name: 'Edit Profile', url: '/profile/edit' },
      { id: 33, name: 'Change Password', url: '/profile/password' },
    ],
  },
  {
    id: 4,
    name: 'Contact Us',
    icon: 'email',
    url: '/contact',
  },
  {
    id: 5,
    name: 'Blog',
    icon: 'book',
    url: '/blog',
  },
  {
    id: 6,
    name: 'Login',
    icon: 'log-in',
  },
  {
    id: 7,
    name: 'Logout',
    icon: 'log-out',
  },
];
