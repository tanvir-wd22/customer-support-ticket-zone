import { Suspense } from 'react';
import Banner from './components/Banner';
import CustomerTickets from './components/CustomerTickets';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ResolvedTask from './components/ResolvedTask';
import TaskStatus from './components/TaskStatus';

const fetchTickets = async () => {
  const res = await fetch('/fakeData.json');
  return res.json();
};

const ticketsPromise = fetchTickets();

function App() {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto my-6 lg:my-12">
        <section>
          <Banner></Banner>
        </section>

        <section className="mt-6 lg:mt-12 flex gap:6 justify-between flex-col sm:flex-row">
          <div className="">
            <Suspense>
              <CustomerTickets
                ticketsPromise={ticketsPromise}
              ></CustomerTickets>
            </Suspense>
          </div>
          <div className="">
            <TaskStatus></TaskStatus>
            <ResolvedTask></ResolvedTask>
          </div>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
