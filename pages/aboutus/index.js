import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
export default function FirstPage(){
    return (
      
        <div className={styles.container}>
        <Head>
        <title>My Page</title>
        </Head>
        <h1>Read Here</h1>
        <p>This is a page.Recyclable material This is a page.Recyclable material
        This is a page.Recyclable material </p>
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
     
        </div>
        
       
    )
}
