import style from './../styles/Header.module.css';
import logoGerb from '../images/logo-gerb.svg';
import logoGrif from '../images/logo-grif.svg';
import logoLine from '../images/logo-line.svg';
import search from '../images/search.svg';
import { useEffect, useState } from 'react';
import { CSSTransition } from  'react-transition-group';
import Registration from "./Registration";

const Header = () => {
    // Появление окна регистрации
    const [reg, setReg] = useState(false);

    const CreateAccount = () => {
        setReg(!reg);
    }

 
    
    const [account, setAccount] = useState(false);
    const [activeHead, setActiveHead] = useState(false);
    return (
        <header className={`${style.header} ${activeHead ? `${style.activeHead}` : ""}`}>
            <nav>
                <section className={style.logo}>
                    <img src={logoGerb}/>
                    <img src={logoLine}/>
                    <img src={logoGrif}/>
                </section>
                <ul className={style.ul}>
                    <li><a href="#" onMouseOver={() => {setAccount(true); setActiveHead(true)}} onClick={() => {setAccount(false); setActiveHead(false)}}>Аккаунт</a></li>
                    <li><a href="#">Профиль</a></li>
                    <li><a href="#">Тесты</a></li>
                    <li><a href="#">Кейсы</a></li>
                    <li><a href="#">Экзамен</a></li>
                    <li><a href="#">Абитуриентам</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Настройки </a></li>
                    <li><a href="#">Поддержка</a></li>
                </ul>
                <section className="search">
                    <img src={search}/>
                </section>
            </nav>
            <CSSTransition classNames="alert" timeout={500} in={account} unmountOnExit>
            <div className={style.accountModal}>
                <p>Быстрые действия</p>
                <ul>
                    <li><a href="#"><span className={style.autorize}>Авторизация</span></a></li>
                    <li><a href="#" onClick={() => {CreateAccount(); setAccount(false); setActiveHead(false)}}>Создать новый аккаунт</a></li>
                    <li><a href="#">Удалить аккаунт</a></li>
                    <li><a href="#">Настройки аккаунта</a></li>
                    <li><a href="#">Написать в поддержку</a></li>
                </ul>
            </div>
            </CSSTransition>
            <div className={`${style.blur} ${activeHead ? `${style.activeBlur}` : ""}`}></div>
            {reg && <Registration />}
        </header>
    )
};

export default Header;