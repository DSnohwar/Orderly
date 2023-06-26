import { GlobalProvider } from './GlobalProvider';
import './globals.css'
import Header from '@/components/layouts/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*       
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}