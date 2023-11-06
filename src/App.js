import React from 'react'
import HomeLayout from './components/HomeLayout/HomeLayout.js';
import Footer from './components/Footer/Footer.jsx'
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter as Router ,Route , Routes} from "react-router-dom";

const App = () => {
    return (
        <ChakraProvider>

            <div className="App" style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                height:'100vh',
                width:'100%'
            }}>
                <Router>
                    <Routes>
                        <Route path='/home' element={<HomeLayout />} />
                        <Route path='/' element={<HomeLayout />} />
                    </Routes>
                </Router>
                <Footer />
            </div>
        </ChakraProvider>
    )
}

export default App
