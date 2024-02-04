import '../components/StyleComponents'
import './globals.css'
import Script from 'next/script'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>
        {children}</body>
    </html>
  )
}
