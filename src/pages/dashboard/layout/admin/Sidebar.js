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
  {
    title: "Faculty",
    icon: "far fa-address-book",
    path: "/admin_dashboard/faculty",
    children: [
      {
        subTitle: "All Faculties",
        path: "/admin_dashboard/faculty",
      },
      {
        subTitle: "Add Faculty",
        path: "/admin_dashboard/faculty/add-faculty",
      },
    ],
  },
  {
    title: "Notes",
    icon: "far fa-file-alt",
    path: "/admin_dashboard/notes",
    children: [
      {
        subTitle: "All Notes",
        path: "/admin_dashboard/notes",
      },
      {
        subTitle: "Add Notes",
        path: "/admin_dashboard/notes/add-note",
      },
    ],
  },
  {
    title: "Gallery",
    icon: "far fa-images",
    path: "/admin_dashboard/gallery",
    children: [
      {
        subTitle: "All Photos",
        path: "/admin_dashboard/gallery",
      },
      {
        subTitle: "Add Photo",
        path: "/admin_dashboard/gallery/add-media",
      },
    ],
  },
];
