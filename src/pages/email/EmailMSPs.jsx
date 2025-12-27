import Prompts from '../Mailer/Prompts'
import { mspEmailTemplate } from '../../templates/MSPEmailTemplates'

export default function EmailMSPs() {
  return (
    <main style={{ padding: '8rem 5%', minHeight: '60vh' }}>
      <h1>Email Your MSPs</h1>
     <Prompts
        issue="email"
        blankTemplate={mspEmailTemplate}
      />
    </main>
  )
}
