import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FetchTarget from '../Mailer/FetchTarget'
import { BtnStyle } from '../../../MUIStyles'
import { dummyData } from '../../data/DummyData'

export default function TakeAction() {
  const navigate = useNavigate()
  const [postcode, setPostcode] = useState("")
  const [adminDivisions, setAdminDivisions] = useState({})
  const [openNoSiteDialog, setOpenNoSiteDialog] = useState(false)

  const handleAction = () => {
    // Check if user's council matches any data center location
    const userCouncil = adminDivisions.council
    const hasDataCenter = dummyData.some(site => site.localAuthority === userCouncil)
    
    if (hasDataCenter) {
      // Go to Object page
      navigate('/object', { state: { postcode, adminDivisions } })
    } else {
      // Show guidance dialog
      setOpenNoSiteDialog(true)
    }
  }

  const handleContinueToEmail = () => {
    setOpenNoSiteDialog(false)
    navigate('/email-msps', { state: { postcode, adminDivisions } })
  }

  return (
    <>
      <div className="take-action-container">
        <div className="take-action-content">
          <h2>Ready to make a difference?</h2>
          <p>Enter your postcode below to see if there's a data centre planned in your area and take action.</p>
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

      <Dialog 
        open={openNoSiteDialog} 
        onClose={() => setOpenNoSiteDialog(false)}
        PaperProps={{
          style: {
            borderRadius: '1rem',
            padding: '1rem'
          }
        }}
      >
        <DialogTitle sx={{ fontFamily: 'var(--font-main)', fontWeight: 800, color: 'var(--accent-teal)' }}>
          No data centers found
        </DialogTitle>
        <DialogContent>
          <p style={{ fontFamily: 'var(--font-main)', fontSize: '1.1rem', lineHeight: '1.6', color: '#444' }}>
            It looks like there isn't a data centre currently planned in your local area.
          </p>
          <p style={{ fontFamily: 'var(--font-main)', fontSize: '1.1rem', lineHeight: '1.6', color: '#444', marginTop: '1rem' }}>
            However, you can still help by emailing your MSPs to urge the Scottish Government to regulate their expansion across the whole country.
          </p>
          <p style={{ fontFamily: 'var(--font-main)', fontSize: '1.1rem', lineHeight: '1.6', color: '#444', marginTop: '1rem', fontWeight: 600 }}>
            Would you like to email your MSPs instead?
          </p>
        </DialogContent>
        <DialogActions sx={{ padding: '1.5rem' }}>
          <Button 
            onClick={() => setOpenNoSiteDialog(false)} 
            sx={{ color: '#666', textTransform: 'none', fontWeight: 600 }}
          >
            No thanks
          </Button>
          <Button 
            onClick={handleContinueToEmail} 
            sx={{ ...BtnStyle, padding: '0.6rem 2rem' }}
          >
            Yes, let's do it
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
