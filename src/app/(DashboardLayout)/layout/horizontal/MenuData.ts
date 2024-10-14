import {
  IconHome,
  IconPoint,
  IconApps,
  IconClipboard,
  IconFileDescription,
  IconBorderAll,
  IconZoomCode,
  IconRotate,
  IconUserPlus,
  IconLogin,
  IconAlertCircle,
  IconSettings,
} from '@tabler/icons-react';
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: 'Sample page',
    icon: "solar:widget-3-line-duotone",
    href: '/',
  },
  {
    id: uniqueId(),
    title: 'Menu Level',
    icon: "solar:align-left-line-duotone",
    href: '/menulevel/',
    column:1,
    children: [
      {
        id: uniqueId(),
        title: "Level 1",
        icon: 'tabler:circle',
        href: "/l1",
      },
      {
        id: uniqueId(),
        title: "Level 1.1",
        icon: 'tabler:circle',
        href: "/l1.1",
      },
      {
        id: uniqueId(),
        title: "Level 2",
        icon: 'tabler:circle',
        href: "l2",
      },
      {
        id: uniqueId(),
        title: "Level 2.1",
        icon: 'tabler:circle',
        href: "l2.1",
      },
      {
        id: uniqueId(),
        title: "Level 3",
        icon: 'tabler:circle',
        href: "l2.1",
      },
      {
        id: uniqueId(),
        title: "Level 3.1",
        icon: 'tabler:circle',
        href: "l2.1",
      },
    ],
  },

];
export default Menuitems;