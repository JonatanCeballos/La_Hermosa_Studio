import React from 'react'
import './banner.css'

export default function Banner() {
  return (
    // Banner 
    <section id="banner" style={{backgroundImage:'url(img/oracion.jpg)' }}>
      <div class="inner">
        <header>
          <p>Iglesia Evangelica LIbre Pentecostal</p>
          <hr style={{backgroundColor:'#FFF', border:'none', height:'3px' }} />
          <h1>La Hermosa</h1>
        </header>
      </div>
    </section>
  )
}

