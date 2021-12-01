import {GlobalStyle} from './styles/global';

import Header from './components/Header'
import Dashboard from './components/DashBoard';
import TransactionsTable from './components/TransactionsTable';

function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <TransactionsTable/>
      <GlobalStyle/>
    </>
  );
}

export default App;
