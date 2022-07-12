import AppContent from "./app.routes";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="flex text-slate-700">
      <SideBar />
      <AppContent />
    </div>
  );
}

export default App;
