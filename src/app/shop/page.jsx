import Image from "next/image"
import styles from "@/app/scss/shop.module.scss"

export default function Shop() {
    return(
        <section className={styles.section_container}>
            <ul className={styles.filter}>
                <li>All</li>
                <li>Filter</li>
            </ul>
            <div className={styles.product_container}>
            <div>
                <Image alt="t-shirt"
                src="/niji1.png"
                height={300}
                width={300}
                />
            </div>
            <div>
                <Image alt="t-shirt"
                src="/niji2.png"
                height={300}
                width={300}
                />
            </div>
            </div>
            
        </section>
    )
}