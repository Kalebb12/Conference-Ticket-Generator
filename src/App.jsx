import Navbar from "./ui/Navbar";
import TicketForm from "./ui/TicketForm";

function App() {
  return (
    <>
      <Navbar />
      <main className="md:p-0 p-5">
        <TicketForm />
      </main>
    </>
  );
}

export default App;
