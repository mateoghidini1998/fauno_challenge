import './globals.css';
import { Header } from './components/UI/Header';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Posts App</title>
      </head>
      <body className='bg-white '>
        <Header />
        {children}
      </body>
    </html>
  );
}
