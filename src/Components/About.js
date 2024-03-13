import React from 'react';

import Head from './Head';
import { Navigate, useNavigate } from 'react-router-dom';

function About() {

  const navigate = useNavigate();

  const click = () => {
    navigate('/Contact');
  }

  return (
    <>
      <Head></Head>
      <section>

        <h1>Himanshu monu</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quia corporis blanditiis dolor, placeat omnis soluta veniam optio repudiandae provident. Hic expedita distinctio adipisci praesentium placeat, facere quis odio vel!</p>
        <button onClick={click}>click me</button>
      </section>
    </>

  )
}

export default About;
