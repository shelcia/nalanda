export const topMenuList = [
  {
    title: "Dashboard",
    icon: "far fa-folder",
    path: "/student_dashboard",
  },
  {
    title: "Questions Corner",
    icon: "far fa-comment-dots",
    path: "/student_dashboard/questions-corner",
    children: [
      {
        subTitle: "All Questions",
        path: "/student_dashboard/questions-corner",
      },
    ],
  },
  {
    title: "Notes",
    icon: "far fa-file-alt",
    path: "/student_dashboard/notes",
    children: [
      {
        subTitle: "All Notes",
        path: "/student_dashboard/notes",
      },
    ],
  },
];
