import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './services';

import './assets/css/reset.css';
import './assets/css/global.css';

import { ToastContainer } from 'react-toastify';
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter> 
  <ScrollToTop />
   <Provider store={store}>
    <ToastContainer />
    <App />
   </Provider>
  </BrowserRouter>
);

