import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createServer, Model} from 'miragejs';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Web Site',
          amount: '10000',
          category: 'Dev',
          type: 'deposit',
          createdAt: new Date('2021-12-31 17:51:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: '6000',
          category: 'Casa',
          type: 'withdraw',
          createdAt: new Date('2021-12-20 10:30:00')
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

