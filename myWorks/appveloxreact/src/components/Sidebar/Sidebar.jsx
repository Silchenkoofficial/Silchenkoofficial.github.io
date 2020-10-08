import React from 'react'
import logo from './../../images/appvelox.png';
import './Sidebar.css';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">Логотип</div>
            <ul className="sidebar__list">
                <li className="sidebar__tab tab tab-active">
                    <div className="tab__icon">
                        <i className="fas fa-heartbeat"></i>
                    </div>
                    <div className="tab__title">Профиль</div>
                </li>
                <li className="sidebar__tab tab">
                    <div className="tab__icon">
                        <i className="fas fa-stethoscope"></i>
                    </div>
                    <div className="tab__title">Врачи и клиники</div>
                </li>
                <li className="sidebar__tab tab">
                    <div className="tab__icon">
                        <i className="far fa-comments"></i>
                    </div>
                    <div className="tab__title">Сообщения</div>
                </li>
                <li className="sidebar__tab tab">
                    <div className="tab__icon">
                        <i className="far fa-list-alt"></i>
                    </div>
                    <div className="tab__title">Тестирование</div>
                </li>
                <li className="sidebar__tab tab">
                    <div className="tab__icon">
                        <i className="fas fa-book-open"></i>
                    </div>
                    <div className="tab__title">Полезно знать</div>
                </li>
            </ul>
            <div className="sidebar__button">Подать заявку</div>
            <div className="sidebar__footer">
                <div className="sidebar__help">
                    <i className="fas fa-info-circle"></i>
                    <div className="sidebar__help--title">Помощь</div>
                </div>
                <div className="sidebar__footer--logo">
                    <img src={logo} alt="appvelox" />
                </div>
            </div>
        </div>
    )
}
