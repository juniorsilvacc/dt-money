import { useState } from 'react';

import {GlobalStyle} from './styles/global';

import Modal from 'react-modal'
import Header from './components/Header'
import Dashboard from './components/DashBoard';

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

      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>Cadastrar transações</h2>
      </Modal>

      <GlobalStyle/>
    </>
  );
}

export default App;
