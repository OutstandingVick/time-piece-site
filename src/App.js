import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import FAQs from './FAQs';
import Contact from './Contact';
import Entry from './Entry';
import Mid from './Mid';
import Classic from './Classic';
import High from './High';
import Casio1 from './Casio1';
import Oris7445 from './Oris7445';
import VintagePiaget from './VintagePiaget';
import SeikoDolce from './SeikoDolce';
import SeikoChariot from './SeikoChariot';
import OrisWorld from './OrisWorld';
import SeikoLady from './SeikoLady';
import Seiko7731 from './Seiko7731';
import OrisSmall from './OrisSmall';
import OrisPointer from './OrisPointer';
import CasioG from './CasioG';
import Timex1 from './Timex1';
import CasioVirtual from './CasioVirtual';
import TimexST from './TimexST';
import OrientB from './OrientB';
import CasioED from './CasioED';
import Pierre from './Pierre';
import SeikoD from './SeikoD';
import SeikoN from './SeikoN';
import TissotH from './TissotH';
import SeikoP from './SeikoP';
import Omega from './Omega';
import Hamilton from './Hamilton';
import OrientL from './OrientL';
import Vacheron from './Vacheron';
import AP from './AP';
import RM from './RM';
import PatekT from './PatekT';
import PatekG from './PatekG';
import Vache from './Vache';
import Rolex from './Rolex';
import Rolex2 from './Rolex2';
import Navbar from './Navbar';
import CartSidebar from './CartSidebar';
import { CartProvider } from './CartContext';
import { CartSidebarContextProvider } from './CartSidebarContext';
import Footer from './Footer';

function App() {
  return (
    <CartProvider>
      <CartSidebarContextProvider>
        <Router>
          <div className='min-h-screen bg-slate-300 bg-center'>
            <Navbar />
            <div className='p-0'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/faqs' element={<FAQs />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/entry' element={<Entry />} />
                <Route path='/mid' element={<Mid />} />
                <Route path='/classic' element={<Classic />} />
                <Route path='/high' element={<High />} />
                <Route path='/casio1' element={<Casio1 />} />
                <Route path='/oris7445' element={<Oris7445 />} />
                <Route path='/vintagepiaget' element={<VintagePiaget />} />
                <Route path='/seikodolce' element={<SeikoDolce />} />
                <Route path='/seikochariot' element={<SeikoChariot />} />
                <Route path='/orisworld' element={<OrisWorld />} />
                <Route path='/seikolady' element={<SeikoLady />} />
                <Route path='/seiko7731' element={<Seiko7731 />} />
                <Route path='/orissmall' element={<OrisSmall />} />
                <Route path='/orispointer' element={<OrisPointer />} />
                <Route path='/casiog' element={<CasioG />} />
                <Route path='/timex1' element={<Timex1 />} />
                <Route path='/casiovirtual' element={<CasioVirtual />} />
                <Route path='/timexst' element={<TimexST />} />
                <Route path='/orientb' element={<OrientB />} />
                <Route path='/casioed' element={<CasioED />} />
                <Route path='/pierre' element={<Pierre />} />
                <Route path='/seikod' element={<SeikoD />} />
                <Route path='/seikon' element={<SeikoN />} />
                <Route path='/tissoth' element={<TissotH />} />
                <Route path='/seikop' element={<SeikoP />} />
                <Route path='/omega' element={<Omega />} />
                <Route path='/hamilton' element={<Hamilton />} />
                <Route path='/orientl' element={<OrientL />} />
                <Route path='/vacheron' element={<Vacheron />} />
                <Route path='/ap' element={<AP />} />
                <Route path='/rm' element={<RM />} />
                <Route path='/patekt' element={<PatekT />} />
                <Route path='/patekg' element={<PatekG />} />
                <Route path='/vache' element={<Vache />} />
                <Route path='/rolex' element={<Rolex />} />
                <Route path='/rolex2' element={<Rolex2 />} />
              </Routes>
            </div>
            <CartSidebar />
            <Footer />
          </div>
        </Router>
      </CartSidebarContextProvider>
    </CartProvider>
  );
}

export default App;
