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
          route: '/chat/interaction/conv/fsdfsd',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Search for abc 123',
          route: '/chat/interaction/conv/23dsfsdf',
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
          route: '/chat/interaction/conv/fsfsfsfsd',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Gift Card',
          route: '/chat/interaction/conv/asdasdas',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Users',
          route: '/chat/interaction/conv/asdddsdasdas',
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
          route: '/chat/interaction/conv/asdddsdasdas',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Notifications',
          route: '/chat/interaction/conv/asdddsdasdas',
        },
        {
          icon: 'assets/icons/outline/message-text.svg',
          label: 'Folders',
          route: '/chat/interaction/conv/asdddsdasdas'
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
