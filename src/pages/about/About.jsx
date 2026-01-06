import './About.scss'

export default function About() {
  return (
    <div className="about-page container">
      <section className="about-hero">
        <h1 className="display-title">Why are we working on Data Centres?</h1>
        <p className="lead-text">
          Scotland is at a crossroads. While we strive for a green energy future, 
          a surge in "hyperscale" data centre proposals threatens to consume our 
          renewable progress before it can even reach our homes and businesses.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>The Energy Challenge</h2>
          <p>
            Data centres are the most power-hungry buildings on earth. Proposed projects 
            currently in the Scottish planning system could more than double Scotland's 
            total energy demand, threatening to derail our hard-won transition to net-zero.
          </p>
        </div>

        <div className="about-card">
          <h2>Resource Depletion</h2>
          <p>
            Beyond electricity, these silent giants are thirstier than ever. Since 2021, 
            tap water usage by Scottish data centres has quadrupled. They occupy vast 
            tracts of land with minimal long-term job creation for local communities.
          </p>
        </div>

        <div className="about-card">
          <h2>Planning Without Scrutiny</h2>
          <p>
            Currently, data centres are a "National Priority," allowing them to bypass 
            full Environmental Impact Assessments (EIAs). We are campaigning to ensure 
            these massive projects are subject to the same scrutiny as any other major development.
          </p>
        </div>
      </section>

      <section className="about-demands">
        <div className="demands-content">
          <h2>Our Demands</h2>
          <p className="demands-intro">Action to Protect Rural Scotland (APRS) is calling for an immediate shift in how we handle these developments:</p>
          <ul className="demands-list">
            <li>
              <strong>A Planning Pause:</strong> Stop new applications until stricter environmental standards are implemented.
            </li>
            <li>
              <strong>Mandatory EIAs:</strong> Compulsory Environmental Impact Assessments to reveal the true cost of every project.
            </li>
            <li>
              <strong>Strategic Strategy:</strong> A move away from developer-led chaos toward a plan that protects our grid capacity.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-cta-section">
        <h2>Protect Scotland's Future</h2>
        <p>
          We believe in a future for Scotland that prioritizes sustainable development and 
          preserves our natural heritage. Your voice can help make the difference.
        </p>
      </section>
    </div>
  )
}
