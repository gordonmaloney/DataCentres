import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import FetchTarget from '../Mailer/FetchTarget'
import { BtnStyle } from '../../../MUIStyles'
import { dummyData } from '../../data/DummyData'

export default function TakeAction() {
  const navigate = useNavigate()
  const [postcode, setPostcode] = useState("")
  const [adminDivisions, setAdminDivisions] = useState({})

  const handleAction = () => {
    // Check if user's council matches any data center location
    const userCouncil = adminDivisions.council
    const hasDataCenter = dummyData.some(site => site.localAuthority === userCouncil)
    
    if (hasDataCenter) {
      // Go to Object page
      navigate('/object', { state: { postcode, adminDivisions } })
    } else {
      // Go to Email MSPs page
      navigate('/email-msps', { state: { postcode, adminDivisions } })
    }
  }

  return (
    <div className="take-action-container">
      <div className="take-action-content">
        <h2>Ready to make a difference?</h2>
        <p>Enter your postcode below to find your local representatives and send them a message.</p>
        <div style={{ marginTop: '2rem', width: '100%', maxWidth: '500px' }}>
            <FetchTarget 
              postcode={postcode}
              setPostcode={setPostcode}
              adminDivisions={adminDivisions}
              setAdminDivisions={setAdminDivisions}
            />
            
            <div style={{ marginTop: '1.5rem' }}>
              <Button 
                onClick={handleAction}
                sx={BtnStyle}
              >
                Take Action
              </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
