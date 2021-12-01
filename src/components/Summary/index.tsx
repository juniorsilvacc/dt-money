import { Container } from './styles';

import IconImage from '../../assets/income.svg';
import OutCome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

export default function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IconImage} alt="Entradas" />
        </header>
        <strong>R$14.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutCome} alt="Saídas" />
        </header>
        <strong>- R$1200,00</strong>
      </div>

      <div className="highlight-backgorund">
        <header>
          <p>Total</p>
          <img src={Total} alt="Total" />
        </header>
        <strong>R$12.500,00</strong>
      </div>
    </Container>
  )
}
