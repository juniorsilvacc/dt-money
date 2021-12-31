import { useEffect } from 'react';
import { api } from '../../services/api';
import {Container} from './styles';

export default function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
    .then((data) => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$4.000</td>
            <td>Desenvolvimento</td>
            <td>20/11/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Camisas</td>
            <td className="withdraw">- R$2.000</td>
            <td>Roupas</td>
            <td>25/11/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Livros</td>
            <td className="withdraw">- R$500</td>
            <td>Livros</td>
            <td>27/02/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Desenvolvimento de aplicação mobile</td>
            <td className="deposit">R$10.000</td>
            <td>Desenvolvimento</td>
            <td>30/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
