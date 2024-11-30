import React, { useState } from "react";
import home from "../assets/home.png";
import heartbeat from "../assets/heartbeat.png";
import history from "../assets/history.png";
import insights from "../assets/insights.png";
import marpol from "../assets/marpol.png";
import settings from "../assets/settings.png";
import workspace from "../assets/workspace.png";
import apps from "../assets/apps.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Side Vertical Menu Bar, fixed for all the pages on Layout.jsx

  const [selected, setSelected] = useState("Home");

//   array of objects to store name, icon and the route of all the sidebar items used for navigation

  const sidebarItems = [
    { name: "Home", icon: home, route: "/" },
    { name: "Workspace", icon: workspace, route: "/workspace" },
    { name: "MARPOL", icon: marpol, route: "/marpol" },
    { name: "OH&S", icon: heartbeat, route: "/ohs" },
    { name: "Insights", icon: insights, route: "/insights" },
    { name: "History", icon: history, route: "/history" },
    { name: "Apps", icon: apps, route: "/apps" },
    { name: "Settings", icon: settings, route: "/settings" },
  ];

  return (
    // hiding the sidebar when screen size is small, else visible.
    <aside className="m-2 hidden sm:flex mr-1 text-sm bg-white border rounded-xl border-gray-300 flex-col items-center">
      <nav className="space-y-2">
        {/* mapping the sidebarItems array of objects to display all sidebar items and applying routes on them using Link tag */}
        {sidebarItems.map((item) => (
            // Used Link tag to call Virtual DOM and avoid reloading of application during navigation
          <Link
            key={item.name}
            to={item.route}
            onClick={() => setSelected(item.name)}
            className={`m-2 rounded-xl p-5 text-gray-600 flex flex-col justify-center items-center
                ${
                  selected === item.name
                    ? "bg-[#D8E6FF] font-semibold"
                    : "hover:bg-gray-100"
                }
                `}
          >
            <img src={item.icon} alt={item.name} className="size-8" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;