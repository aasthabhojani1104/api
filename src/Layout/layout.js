import React from 'react'

import Header from '../parts/header'

import { Outlet } from 'react-router-dom'
import Footer from '../parts/Footer'


function Layout() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col">
            <Header/>
                
            </div>
        </div>
        
        
        <div className="row">
           <Outlet/>
        </div>
        <div className="row">
            <div className="col">
                
            </div>
        </div>
        {/* <div className="row">
            <div className="col">
            <Footer/>
                
            </div>
        </div> */}
        

        

      </div>
      
    </>
  )
}

export default Layout
