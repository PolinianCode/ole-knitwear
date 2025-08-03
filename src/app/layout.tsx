import "@/styles/globals.css"
import HeaderComponent from "@/components/HeaderComponent"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "@/components/FooterComponent"
import CartSidebar from "@/components/CartSidebar"

export const metadata = {
    title:"Ole Knitwear",
    description: "A knitwear clothes from Ukraine"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </head>
              <body className="flex flex-col min-h-screen">
        <HeaderComponent />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CartSidebar />
        <SpeedInsights />
      </body>
        </html>
    )
}