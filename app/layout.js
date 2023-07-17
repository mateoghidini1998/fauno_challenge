import './globals.css';
import { Header } from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My first App</title>
      </head>
      <body className='bg-green-950 w-auto'>
        <Header />
        {children}
      </body>
    </html>
  );
}
