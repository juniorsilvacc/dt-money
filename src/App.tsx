import { useState } from 'react';

import {GlobalStyle} from './styles/global';

import Modal from 'react-modal'
import Header from './components/Header'
import Dashboard from './components/DashBoard';
import NewTransactionModal from './components/NewTransactionModal'

Modal.setAppElement('#root');

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTranslationModal={handleOpenTransactionModal} />

      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle/>
    </>
  );
}

export default App;
