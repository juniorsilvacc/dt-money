import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps{
  onOpenNewTranslationModal: () => void;
}

export default function Header({onOpenNewTranslationModal}: HeaderProps) {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt-money" />

      <button 
        onClick={onOpenNewTranslationModal}
        type="button">Nova transsaão
      </button>

      </Content>
    </Container>
  )
}
