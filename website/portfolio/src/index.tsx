import React from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const LazyHome = lazy(()=> import('./Home/HomePage'));
const LazyCampFire = lazy(()=> import('./Campfire/CampfirePage'));

function LoadingComponent() {
  return (<div>
    Loading...
  </div>)
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent/>}>
        <Routes>
          <Route path="/" element={<LazyHome />}/>
          <Route path="/campfire" element={<LazyCampFire/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
