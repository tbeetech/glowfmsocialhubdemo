import './globals.css'

export const metadata = {
  title: 'GlowFM Social Hub',
  description: 'A social hub for the GlowFM community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}