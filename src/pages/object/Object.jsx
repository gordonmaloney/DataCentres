import { Grid, Box } from '@mui/material'
import Prompts from '../Mailer/Prompts'
import { objectionTemplate, SLs } from '../../templates/ObjectionTemplates'

export default function ObjectPage() {
  const SubjectLine = SLs[Math.floor(Math.random() * SLs.length)];

  return (
    <main style={{ padding: '4rem 5%', minHeight: '60vh', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: '1200px' }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <div style={{ position: 'sticky' }}>
              <h2 style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--accent-teal)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Lodge an Objection</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Fill out the details below to generate a formal objection to the proposed data centre development in your area. Your story will help highlight the local impact.
              </p>
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
