import {
  MdOutlineMessage,
  MdOutlineLeaderboard,
  MdOutlineCompress,
  MdOutlineManageSearch,
  MdOutlineAnalytics,
  MdOutlineGrade,
  MdOutlineAnnouncement,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { SiStudyverse } from "react-icons/si";
import { CiCalculator1 } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
export const sidebarAdminItems = [
  {
    path: "/admin/",
    icon: <MdOutlineDashboard size={18} />,
    text: "Dashboard",
    key: "dash",
  },
  {
    path: "/admin/users",
    icon: <SiStudyverse size={18} />,
    text: "Users Management",
    key: "users",
  },
  {
    path: "/admin/ViewItems",
    icon: <MdOutlineLibraryBooks size={18} />,
    text: "Library Management",
    key: "library",
  },
  {
    path: "/admin/courses",
    icon: <CiCalculator1 size={20} />,
    text: "Course Management",
    key: "course",
  },
  
  // {
  //   path: "/",
  //   icon: <MdOutlineCompress size={18} />,
  //   text: "Attendance Management",
  //   key: "attendance",
  // },
  // {
  //   path: "/",
  //   icon: <MdOutlineMessage size={18} />,
  //   text: "Progress tracking",
  //   key: "progress",
  // },
  {
    path: "/admin/Leaderboard",
    icon: <MdOutlineLeaderboard size={20} />,
    text: "LeaderBoard",
    key: "leaderboard",
  },
  {
    path: "/admin/Analytics",
    icon: <MdOutlineAnalytics size={20} />,
    text: "Analytics",
    key: "analytics",
  },
  // {
  //   path: "/",
  //   icon: <MdOutlineMessage size={18} />,
  //   text: "System Maintenance",
  //   key: "system",
  // },
  // {
  //   path: "/",
  //   icon: <MdOutlineAnnouncement size={18} />,
  //   text: "Announcements",
  //   key: "announcement",
  // },
  {
    path: "/admin/TasksYaman",
    icon: <MdOutlineManageSearch size={18} />,
    text: "To do list",
    key: "todo",
  },
];
