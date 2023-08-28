import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'July',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Dashboard Dashboard Dashboard',
          route: '/dashboard/nfts',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
      ],
    },
    {
      group: 'Aug',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Download',
          route: '/downloads',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Gift Card',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Users',
          route: '/users',
        },
      ],
    },
    {
      group: 'Sup',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },{
      group: 'Sup',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },{
      group: 'Sup',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },{
      group: 'Sup',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
