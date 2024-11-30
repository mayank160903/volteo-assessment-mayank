import React from "react";
import ProfileGrid from "./sections/ProfileGrid";
import FeedGrid from "./sections/FeedGrid";
import TaskList from "./sections/TaskList";

const Dashboard = () => {
  // Main Dashboard component
  return (
    <main className="flex-1 mr-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_5fr_4fr] gap-3">
        <ProfileGrid />
        <FeedGrid />
        <div className="md:col-span-2 lg:col-span-1">
          <TaskList />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
