import { Suspense, useState } from 'react';
import Banner from './components/Banner';
import CustomerTickets from './components/CustomerTickets';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ResolvedTask from './components/ResolvedTask';
import TaskStatus from './components/TaskStatus';
import { toast } from 'react-toastify';

const fetchTickets = async () => {
  const res = await fetch('/fakeData.json');
  return res.json();
};

const ticketsPromise = fetchTickets();

function App() {
  const [inProgessCount, setInProgressCount] = useState(0);
  const [status, setStatus] = useState([]);

  const handleTicketCardClick = (ticketItem) => {
    // console.log(ticketItem);
    setInProgressCount(inProgessCount + 1);
    setStatus([...status, ticketItem]);
    toast.success('Add to task status successfully');
  };
  // console.log(status);
  const handleStatusCompleteClick = () => {
    toast.success('Task status complete');
  };

  return (
    <>
      {/*  =========== NAVBAR START HERE ==================== */}
      <nav className="mb-6 lg:mb-12">
        <Navbar></Navbar>
      </nav>

      {/*  =========== BANNER START HERE ==================== */}
      <header className="w-11/12 mx-auto mb-6 lg:mb-12">
        <Banner inProgessCount={inProgessCount}></Banner>
      </header>

      {/*  =========== MAIN SECTION START HERE ==================== */}
      <main className="w-11/12 mx-auto mb-6 lg:mb-12">
        <section className="flex gap-6 justify-between flex-col sm:flex-row">
          <div>
            <Suspense>
              <CustomerTickets
                ticketsPromise={ticketsPromise}
                handleTicketCardClick={handleTicketCardClick}
              ></CustomerTickets>
            </Suspense>
          </div>
          <div className="flex flex-col gap-6">
            <TaskStatus
              status={status}
              handleStatusCompleteClick={handleStatusCompleteClick}
            ></TaskStatus>
            <ResolvedTask></ResolvedTask>
          </div>
        </section>
      </main>

      {/*  =========== FOOTER START HERE ==================== */}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
