import Link from 'next/link';

const links = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Posts',
    url: '/posts',
  },
];

export function Header() {
    return (
        <header className='w-full h-16 bg-green-950 text-white font-bold' >
          <nav >
            <ul className='flex justify-center items-center' >
                {links.map(({ label, url }) => (
                    <li key={url}>
                        <Link href={url}>{label}</Link>
                    </li>
                ))}
            </ul>
          </nav>
        </header>
    )
}