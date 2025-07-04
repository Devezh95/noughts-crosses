import "../styles/global.css";
import clsx from "clsx";
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
  })

export default function App({ Component, pageProps }) {
  return <div className={clsx(inter.className, 'text-slate-900')}>
<Component {...pageProps} />;
  </div>
  
  
}
