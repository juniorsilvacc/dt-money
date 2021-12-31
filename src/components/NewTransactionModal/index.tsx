import Modal from 'react-modal';

import { Container, TransactionsTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >

      <button type="button" onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transações</h2>

        <input 
          placeholder="Título"
        />

        <input 
          type="number"
          placeholder="Valor"
        />

        <TransactionsTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionsTypeContainer>

        <input 
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}