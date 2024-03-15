import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Route from './components/root/Route.jsx'
import Home from './components/home/Home.jsx'
import ContactUs from './components/contact/ContactUs.jsx'
import AppliedJobs from './components/appliedJobs/AppliedJobs.jsx'
import JobDetails from './components/jibdetails/JobDetails.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Route></Route>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/jobdetails/:id',
        loader : () => fetch(`/jobs.json`),
        element: <JobDetails></JobDetails>
      },
       
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
