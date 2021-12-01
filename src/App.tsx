import {GlobalStyle} from './styles/global';

import Header from './components/Header'
import Dashboard from './components/DashBoard';

function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      
      <GlobalStyle/>
    </>
  );
}

export default App;
