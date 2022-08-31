import styles from '../../styles/Home.module.css'
import Link from 'next/link';
export default function Nava() {
    return (
      <div>
        <nav className={styles.nava}>
          <ul>
            <li>Home</li>
            <li>Address</li>
            <li>Phone</li>
            <Link href="/about"><a><li>About Us</li></a></Link>
          </ul>
        </nav>
      </div>
     
    );
  }
  