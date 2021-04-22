import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div>
            <div className={ styles['notice-box'] }>
                <p className={ styles['notice-box-content']}></p>
            </div>
            <nav className={ styles.nav }>
                <div className={ styles.logo }>
                    <Link href="/">
                        <a>
                            <Image src="/logo.png" width={140} height={40} />
                        </a>
                    </Link>
                </div>
                <Link href="/docs">
                    <a>Docs</a>
                </Link>
                <Link href="https://github.com/AyushSaini00/ben10-REST-API">
                    <a>Github</a>
                </Link>
                <Link href="/sponsers">
                    <a>Sponsers</a>
                </Link>
            </nav>
        </div>
    );
}
 
export default Navbar;