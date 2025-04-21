import React from 'react'
import NestedNav from './NestedNav'
import Scroll from './Scroll'; // Import the scroll handler
import "./Services.css";

function Services() {
  return (
    <div className="services-container">
    <Scroll />
    <NestedNav />
      <div className="info-page">
        <h1 id="personal-line">Personal Line Policies</h1>
        <section id="automobile">
          <h2>Automobile Coverage</h2>
          <p>Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. </p>
        </section>
        <section id="travel">
          <h2>Travel Insurance</h2>
          <p>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to. </p>
        </section>
        <section id="life">
          <h2>Life Insurance</h2>
          <p>Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but. </p>
        </section>
        <h1 id="commerical-lines">Commerical Lines Policies</h1>
        <section id="group-health">
          <h2>Group Health</h2>
          <p>Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. </p>
        </section>
        <section id="workers">
          <h2>Workers' Compensation</h2>
          <p>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to. </p>
        </section>
        <section id="general-liability">
          <h2>General Liability</h2>
          <p>Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but. </p>
        </section>
        <section id="building">
          <h2>Building</h2>
          <p>Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but. </p>
        </section>
        <section id="commerical">
          <h2>Commerical Auto/Garage</h2>
          <p>Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but. </p>
        </section>
      </div>
  </div>
  )
}

export default Services;