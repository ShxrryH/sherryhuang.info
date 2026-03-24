import './globals.css'

export const metadata = {
  title: "Sherry Huang — Portfolio Landing",
  description: "Animated landing hero (whimsical, modern, clean).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
