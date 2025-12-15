import styles from './Header.module.css';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headUp}>
                    <h1>Хаметов Тимур Азатович</h1>
                    <p>Frontend developer и немного Backend</p>
                </div>
                <div className={styles.headDown}>
                    <nav>
                        Здесь будут ссылки на портфолио
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;