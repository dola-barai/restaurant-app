import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'aos/dist/aos.css'
import reportWebVitals from './reportWebVitals';
import MenuItems from './components/MenuItems';
import AddMenuItems from './components/AddMenuItems';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuItems></MenuItems>
    <AddMenuItems></AddMenuItems>
  </React.StrictMode>
);


reportWebVitals();
