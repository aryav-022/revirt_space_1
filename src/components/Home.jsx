import React from 'react';
import "../css/Home.css";

export default function Home() {
  return (
    <>
    <a className="queries" href='https://revirt-space.netlify.app'>got queries? get in touch with us</a>

    <section className='first-section'>
      <div className="content">
        <div className='build-your-own-working-space-in-minutes'>build your own <span className='bold'>working space</span> in minutes</div>
        <div style={{fontSize: "25px"}}><span style={{fontSize: "35px"}}>revirt</span> for better</div>
        <div className='bold' style={{fontSize: "35px"}}>collaboration</div>
        <div className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fuga temporibus odio et quod numquam Lorem ipsum dolor si.
        </div>
        <button>get satrted &gt;</button>
      </div>
    </section>
    </>
  )
}
