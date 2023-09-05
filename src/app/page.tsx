import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <main className={styles.main} style={{height:8888}}>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div> 
            <Link href="/page1">page1</Link>
        </main>
    )
}
