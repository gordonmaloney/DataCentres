import { Grid, Box } from '@mui/material'
import Prompts from '../Mailer/Prompts'
import { objectionTemplate, SLs } from '../../templates/ObjectionTemplates'

export default function ObjectPage() {
  const SubjectLine = SLs[Math.floor(Math.random() * SLs.length)];

  return (
    <main className="mailer-page-container">
      <Box sx={{ width: '100%', maxWidth: '1200px' }}>
        <Grid container spacing={{ xs: 2, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }} sx={{ px: { xs: 2.5, md: 0 } }}>
            <div style={{ position: 'sticky' }}>
              <h2 style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--accent-teal)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Lodge an Objection</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Submit a formal objection to the planning application for the new data centre development in your area.
              </p>
              
              <div style={{ backgroundColor: 'rgba(15, 113, 115, 0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-teal)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.8rem', color: 'var(--accent-teal)' }}>How it works</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Answer a few quick questions on this page about how the proposed development will affect you. 
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '0.8rem' }}>
                  We'll use your answers to build a professional, structured planning objection. After filling everything out, you'll be able to review the final draft and send it off.
                </p>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Prompts
              issue="object"
              blankTemplate={objectionTemplate}
              initialSubject={SubjectLine}
            />
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}
