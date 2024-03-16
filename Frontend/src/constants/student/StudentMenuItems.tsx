import { MdOutlineLogout, MdOutlineSettings } from "react-icons/md";

export const studentMenuItems = [
  {
    path: "/",
    icon: <MdOutlineSettings size={20} />,
    text: "Settings",
    key: "settings",
  },
  {
    path: "/",
    icon: <MdOutlineLogout size={20} />,
    text: "Logout",
    key: "logout",
  },
];
