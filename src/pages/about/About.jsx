import './About.scss'

export default function About() {
  return (
    <div className="about-page container">
      <section className="about-hero">
        <h1 className="display-title">About the Campaign</h1>
        <p className="lead-text">
          Action to Protect Rural Scotland (APRS) is leading the fight to ensure Scotland's 
          precious landscapes and resources are not sacrificed for unnecessary data centre expansion.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To protect Scotland's countryside and environment from inappropriate development, 
            starting with the urgent threat posed by massive data centre projects that threaten 
            our local energy grids and land use.
          </p>
        </div>

        <div className="about-card">
          <h2>The Threat</h2>
          <p>
            Data centres are silent giants that consume vast amounts of electricity and water. 
            Proposed projects in Scotland could consume up to 20% of our future energy capacity, 
            driving up costs for residents and threatening our net-zero targets.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Scotland?</h2>
          <p>
            Lower land costs and a cool climate make Scotland an attractive target for global 
            tech giants. However, these developments often provide few long-term jobs while 
            irreparably altering the rural landscape.
          </p>
        </div>
      </section>

      <section className="about-cta-section">
        <h2>Join the Movement</h2>
        <p>
          We believe in a future for Scotland that prioritizes sustainable development and 
          preserves our natural heritage for generations to come.
        </p>
      </section>
    </div>
  )
}
