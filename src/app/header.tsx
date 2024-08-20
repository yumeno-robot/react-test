import Image from "next/image";
import styles from "./header.module.css";


export default function Header() {
    return (

        <>



            <header>
                <nav className={styles.navbar}>
                    <div className={styles.logo_section}>
                        <a href="#">
                            <Image src="/images/main_icon.jpg" alt="Icon" className="icon" width={100} height={100} />
                        </a>

                        <a href="#">
                            <span className={styles.site_title}>yumeno-robot</span>
                        </a>

                    </div>



                    <ul className={styles.menu_links}>
                        <li> <a href="#">HOME</a></li>
                        <li><a href="#">BLOGs</a></li>
                        <li><a href="#">PHOTOs</a></li>
                        <li><a href="#">LINKs</a></li>
                    </ul>
                </nav>
            </header>




        </>)
}