import "./globals.css"
import { Inter, Kanit } from "next/font/google"
import Navbar from "./ui/(main)/navbar"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { Providers } from "@/redux/provider"
import StyledComponentsRegistry from "./registry"
import ReactQueryProvider from "@/reactQuery/provider"
config.autoAddCss = false

// const inter = Inter({ subsets: ["latin"] })
const kanit = Kanit({ subsets: ["latin"], weight: "600" })

export const metadata = {
  title: "Cookie Swap",
  description: "cookie swap is defi ecosystem",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <Providers>
              <Navbar />
              {children}
            </Providers>
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
