export default function Footer() {
  return (
    <footer style={{ 
      padding: '2rem 5%', 
      marginTop: 'auto',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      textAlign: 'center'
    }}>
      <p>&copy; {new Date().getFullYear()} Stop Data Centres. All rights reserved.</p>
    </footer>
  )
}
