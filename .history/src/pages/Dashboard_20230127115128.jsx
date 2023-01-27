

import { useState } from "react";
import Dashboard from "./Dash";
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">
        
        <Dashboard/>
        
        </h1>
      </div>
    </div>
  );
};
export default App;
