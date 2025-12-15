import styles from './PortFolio.module.css';

function PortFolio() {
    return (
        <>
            <div className={styles.portfolio}>
                <div className={styles.knowledges}>
                    <h1>Немного моих знаний</h1>
                    <ol>
                        <li>База: HTML + CSS + JS</li>
                        <li>Для Front: ReactJS + Vite</li>
                        <li>Для Backend: NodeJs + DB с использованием Sequelize</li>
                        <li>Больше знаний нету</li>
                    </ol>
                </div>
                <div className={styles.examples}>
                    <h1>Мои работы</h1>
                    <h2>Вы можете посмотреть мои работы, которые будут размещены в следующих ссылках</h2>
                    <ol>
                        <li>Тут типо много ссылок</li>
                    </ol>
                </div>
                <div className={styles.asd}>
                    <h1>возможно тут еще что-то будет</h1>
                </div>
            </div>
        </>
    );
}
export default PortFolio;