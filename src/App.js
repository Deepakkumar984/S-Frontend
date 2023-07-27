import React from 'react';
import { Nav } from './Componets/Navbar/Nav';
import { WhoCard } from "./Componets/Cards/WhoCard";
import {OurClient} from './Componets/OurClient/OurClient.jsx'
import {Team} from './Componets/Cards/Team.jsx'
import {I} from './Componets/I'
import {New} from './Componets/Careers/New.jsx'
import {Contact1} from './Componets/Contact/Contact1.jsx'
import {Footer} from './Componets/Footer/Footer.jsx'
function App() {
  return (
    <div className='App'>
    <Nav></Nav>
    <I></I>
   
    <OurClient></OurClient>
    <WhoCard></WhoCard>
    <Team></Team>
    <New></New>
    <Contact1></Contact1>
    <Footer></Footer>
    
</div> 
  );
}

export default App;
