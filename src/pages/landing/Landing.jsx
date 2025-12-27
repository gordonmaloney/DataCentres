import { useRef } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import redBrush from '../../assets/red_brush.png'
import ScotlandMap from '../../components/ScotlandMap'
import './Landing.scss'
import TakeAction from './TakeAction'
import Headline from './Headline'

export default function Landing() {
  const { signatures } = useStore()
  const actionRef = useRef(null)

  const scrollToActions = () => {
    actionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <main className="landing-snap-wrapper">
      <section className="landing-container landing-section">
        <div className="landing-content">


            <Headline />
            
            <p className="landing-text">
              Data centres currently use about 2.5% of UK electricity, with demand projected to rise sharply to as much as 71 TWh by 2050, driven by AI expansion. Scotland could host up to 20% of future capacity due to lower land costs, and the Scottish Government currently has an action plan to encourage data centres.
            </p>
            

            <center>
            <div className="cta-wrapper">

                <div className="brush-btn-bg" style={{ backgroundImage: `url(${redBrush})` }}></div>
                <Button 
                    onClick={scrollToActions}
                    className="cta-brush-btn"
                    disableRipple
                >
                    Take action now
                </Button>

            </div></center>
            
        </div>
        
        <div className="landing-visual" style={{ minHeight: '400px', width: '100%' }}>
            <ScotlandMap />
        </div>

      </section>

      <section ref={actionRef} className="landing-section take-action-section">
        <TakeAction />
      </section>
    </main>
  )
}
