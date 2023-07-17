import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Posts App</title>
      </head>
      <body className='bg-green-950 w-auto'>{children}</body>
    </html>
  );
}
