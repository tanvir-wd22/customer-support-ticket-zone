import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto my-6 lg:my-12">
        <Banner></Banner>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
