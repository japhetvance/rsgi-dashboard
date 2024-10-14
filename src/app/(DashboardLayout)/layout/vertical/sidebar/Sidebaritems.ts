export interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
  collapsedMenu?: boolean;
  dropdownItem?: boolean;
}


import { uniqueId } from "lodash";

const SidebarContent: MenuitemsType[] = [

  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Sample page",
    icon: 'solar:widget-3-line-duotone',
    href: "/",
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Other",
  },
  {
    id: uniqueId(),
    title: "Menu Level",
    icon: "solar:align-left-line-duotone",
    href: "/menulevel/",
    children: [
      {
        id: uniqueId(),
        title: "Level 1",
        icon: "solar:stop-circle-line-duotone",
        href: "/l1",
        dropdownItem:true
      },
      {
        id: uniqueId(),
        title: "Level 1.1",
        icon: "solar:stop-circle-line-duotone",
        href: "/l1.1",
        dropdownItem:true,
        children: [
          {
            id: uniqueId(),
            title: "Level 2",
            icon: "solar:stop-circle-line-duotone",
            href: "/l2",
            dropdownItem:true,
          },
          {
            id: uniqueId(),
            title: "Level 2.1",
            icon: "solar:stop-circle-line-duotone",
            href: "/l2.1",
            dropdownItem:true,
            children: [
              {
                id: uniqueId(),
                title: "Level 3",
                icon: "solar:stop-circle-line-duotone",
                href: "/l3",
                dropdownItem:true
              },
              {
                id: uniqueId(),
                title: "Level 3.1",
                icon: "solar:stop-circle-line-duotone",
                href: "/l3.1",
                dropdownItem:true
              },
            ],
          },
        ],
      },
    ],
  },
  

];

export default SidebarContent;
