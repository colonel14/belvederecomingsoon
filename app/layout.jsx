import './globals.css'
import { Inter } from 'next/font/google'



export const metadata = {
  title: "Belvedere School",
  description: "Belvedere School Cairo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
