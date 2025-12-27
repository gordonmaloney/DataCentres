import Prompts from '../Mailer/Prompts'
import { objectionTemplate } from '../../templates/ObjectionTemplates'

export default function ObjectPage() {
  return (
    <main style={{ padding: '8rem 5%', minHeight: '60vh' }}>
      <h1>Lodge an Objection</h1>


 <Prompts
        issue="object"
        blankTemplate={objectionTemplate}
      />
    </main>
  )
}
