import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Nav />
        <main className="container mx-3">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
