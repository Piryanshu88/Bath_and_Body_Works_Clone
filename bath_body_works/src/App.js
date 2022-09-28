import { Flex } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <AllRoutes/>
          {/* <Flex justifyContent='center' borderTop='3px solid #F2F2F2'>
                <Footer/>
            </Flex> */}
    </div>
  );
}

export default App;
