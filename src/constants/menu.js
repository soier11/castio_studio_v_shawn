const data = [
  {
    id: "dashboards",
    icon: "iconsminds-shop-4",
    label: "menu.dashboards",
    to: "/studio/dashboards",
    subs: [{
      icon: "simple-icon-briefcase",
      label: "menu.default",
      to: "/studio/dashboards/default"
    },
    {
      icon: "simple-icon-pie-chart",
      label: "menu.analytics",
      to: "/studio/dashboards/analytics"
    },
    {
      icon: "simple-icon-basket-loaded",
      label: "menu.ecommerce",
      to: "/studio/dashboards/ecommerce"
    },
    {
      icon: "simple-icon-doc",
      label: "menu.content",
      to: "/studio/dashboards/content"
    }
    ]
  },
  {
    id: "storegepage",
    icon: "iconsminds-data-storage",
    label: "menu.storege",
    to: "/studio/storege"
  },
  {
    id: "channelpage",
    icon: "simple-icon-mustache",
    label: "menu.channel",
    to: "/studio/channel"
  },
  {
    id: "classpage",
    icon: "iconsminds-bucket",
    label: "menu.class",
    to: "/studio/class",
  },
  {
    id: "memberpage",
    icon: "simple-icon-people",
    label: "menu.member",
    to: "/app/blank-page"
  },
  {
    id: "surveys",
    icon: "simple-icon-organization",
    label: "menu.group",
    to: "/app/blank-page"
  },
  {
    id: "survey",
    icon: "iconsminds-shop-4",
    label: "menu.survey",
    to: "/app/applications",
    subs: [{
      icon: "simple-icon-briefcase",
      label: "menu.chat",
      to: "/app/applications/chat"
    },
    {
      icon: "simple-icon-pie-chart",
      label: "menu.survey",
      to: "/app/applications/survey"
    },
    ]
  },
];
export default data;
