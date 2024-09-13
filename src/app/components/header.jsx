import Link from "next/link";
import styles from "@/app/scss/header.module.scss";
import { forwardRef } from "react";

// Header Component (add 'hoverable' class to li elements)
const Header = forwardRef(function Head(props, ref) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu_container}>
          <li className={`${styles.menu_item} hoverable`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${styles.menu_item} hoverable`}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={`${styles.menu_item} hoverable`}>
            <div ref={ref} className={styles.bounds}></div>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});


export default Header;
