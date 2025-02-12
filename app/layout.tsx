import type React from "react"

export const metadata = {
  title: "Cafe Mode On",
  description:
    "A cozy space for hackers to work on personal projects together. Join the #cafe huddle, share your progress, and earn cups!",
  openGraph: {
    title: "Cafe Mode On",
    description: "A cozy space for hackers to work on personal projects together",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cafe%20Mode%20On-rDlshibxtREUN7EMHXKTY3Aekd7n7s.png",
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

