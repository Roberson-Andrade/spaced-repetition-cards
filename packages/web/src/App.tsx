import { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { toast, ToastContainer } from "react-toastify";
import AppContent from "./app.routes";
import SideBar from "./components/Sidebar";
import { defaultToast } from "./constants/toastify";
import { useStore } from "./store";

function App() {
  const fetchDecks = useStore((state) => state.fetchDecks);
  const fetchRevisions = useStore((state) => state.fetchRevisions);
  const [loading, setLoading] = useState(true);

  const stopLoadingHandler = (error: string | null) => {
    setLoading(false);
    if (error) {
      toast.error(error || "Erro interno", defaultToast);
    }
  };
  useEffect(() => {
    fetchDecks(stopLoadingHandler);
    fetchRevisions((error: string | null) => {
      if (error) {
        toast.error(error || "Erro interno", defaultToast);
      }
    });
  }, []);
  return (
    <div className="flex text-slate-700">
      {loading ? (
        <div className="w-full min-h-[100vh] flex justify-center items-center">
          <VscLoading className="animate-spin" size="100px" />
        </div>
      ) : (
        <>
          <SideBar />
          <AppContent />
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
