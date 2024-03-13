import React from 'react';

import Head from './Components/Head';

import { Navigate, useNavigate } from 'react-router-dom';

function Contact() { 
 
     const navigate= useNavigate();
     
      const btnclick=()=>{
        navigate('/');
      }

    return (
   
    <>
    
   <Head></Head>

     <section>
             <h1>this is your contact page</h1>
             <button onClick={btnclick}>click me</button>
        </section>
    </>
    
  )
}

export default Contact;
