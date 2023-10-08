import "./globals.css";

export const metadata = {
  title: "Belvedere School",
  description: "Belvedere School Cairo",
  keywords: [
    "Belvedere",
    "Belvedere School",
    "Cairo",
    "Belvedere School Cairo",
    "Belvedere Cairo",
    "School Cairo",
  ],
  creator: '"Belvedere Cairo',
  authors: [
    { name: "Belvedere" },
    { name: "Belvedere", url: "https://belvedereschoolcairo.com/" },
    { name: "Belvedere School", url: "https://belvedereschoolcairo.com/" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
