import { useEffect } from "react";
import AppContent from "./app.routes";
import SideBar from "./components/Sidebar";
import { useStore } from "./store";

function App() {
  const fetchDecks = useStore((state) => state.fetchDecks);

  useEffect(() => {
    fetchDecks();
  }, []);
  return (
    <div className="flex text-slate-700">
      <SideBar />
      <AppContent />
    </div>
  );
}

export default App;
