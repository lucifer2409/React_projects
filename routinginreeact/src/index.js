import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import About from './Components/About/About';
import Home from './Components/Home/home';
import Contact from './Components/Contact/Contactpage';
import User from './Components/User/User';
import Github from './Components/Github/Github';
import { githubInfoLoader } from './Components/Github/Github';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"" ,
        element: <Home/>
      } ,
       {
        path:"about",
        element: <About/>
       } , 
       {
        path:"Contact",
        element: <Contact/>
       } , 
       {
        path:"User/:userid",
        element: <User/>
       } , 
       {
        loader: githubInfoLoader,
        path: "Github",
        element: <Github/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
