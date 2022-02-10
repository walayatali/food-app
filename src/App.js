import React,{ useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import {CartContextProvider} from './Store/CartContext';

function App() {

    const[showModal, isShowModal] = useState(false);

    const closeModalHandler = () => {
        isShowModal(false);      
    }
    const openModalHandler = () => {
        isShowModal(true);      
    }
  
    return (
            <CartContextProvider>
                {showModal && <Cart onClose={closeModalHandler}/>}
                <Header onShowCart={openModalHandler}/>
                <main>
                    <Meals/>
                </main>
            </CartContextProvider>
        );
    }

export default App;
