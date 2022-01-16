export const topMenuList = [
  {
    title: "Dashboard",
    icon: "far fa-folder",
    path: "/admin_dashboard",
  },
  {
    title: "Users",
    icon: "far fa-user",
    children: [
      {
        subTitle: "User list",
        path: "/admin_dashboard/users",
      },
      {
        subTitle: "Add User",
        path: "/admin_dashboard/users/add-user",
      },
    ],
  },
  {
    title: "Announcements",
    icon: "far fa-bell",
    children: [
      {
        subTitle: "All Announcement",
        path: "/admin_dashboard/announcements",
      },
      {
        subTitle: "Add Announcement",
        path: "/admin_dashboard/announcements/add-announcement",
      },
    ],
  },
  {
    title: "Questions Corner",
    icon: "far fa-comment-dots",
    path: "/admin_dashboard/questions-corner",
    children: [
      {
        subTitle: "All Questions/Note",
        path: "/admin_dashboard/questions-corner",
      },
      {
        subTitle: "Add Questions/Note",
        path: "/admin_dashboard/questions-corner/add-questions-corner",
      },
    ],
  },
];
