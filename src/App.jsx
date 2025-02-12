import { Toaster } from "react-hot-toast";
import Navbar from "./ui/Navbar";
import TicketForm from "./ui/TicketForm";

function App() {
  return (
    <>
    <Toaster/>
      <Navbar />
      <main className="md:p-0 sm:p-5 p-2">
        <TicketForm />
      </main>
    </>
  );
}

export default App;
