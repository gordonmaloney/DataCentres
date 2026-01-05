import { Grid, Box } from '@mui/material'
import Prompts from '../Mailer/Prompts'
import { mspEmailTemplate, SLs } from '../../templates/MSPEmailTemplates'

export default function EmailMSPs() {
  const SubjectLine = SLs[Math.floor(Math.random() * SLs.length)];

  return (
    <main className="mailer-page-container">
      <Box sx={{ width: '100%', maxWidth: '1200px' }}>
        <Grid container spacing={{ xs: 2, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }} sx={{ px: { xs: 2.5, md: 0 } }}>
            <div style={{ position: 'sticky' }}>
              <h2 style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--accent-teal)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Email Your MSPs</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Write to your representatives in the Scottish Parliament to demand stricter regulations on the expansion of data centres.
              </p>
              
              <div style={{ backgroundColor: 'rgba(15, 113, 115, 0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-teal)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.8rem', color: 'var(--accent-teal)' }}>How it works</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Simply answer the questions on this page (to the right on desktop, or below on mobile) with your details and your personal story. 
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '0.8rem' }}>
                  We'll automatically incorporate your responses into a personalized email template. Once you're done, you can review the message and send it directly to all your local MSPs.
                </p>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Prompts
              issue="email"
              blankTemplate={mspEmailTemplate}
              initialSubject={SubjectLine}
            />
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}
