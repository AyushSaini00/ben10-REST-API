import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <div className={ styles['notice-box'] }></div>
            <nav className={ styles.nav }>
                <div className={ styles.logo }>
                    <Link href="/">
                        <a>
                            <h1>Ben 10 API</h1>
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