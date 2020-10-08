import React from 'react';
import './MainHeader.css';

export const MainHeader = () => {
    return (
        <div className="main__header header">
            <div className="header__title">
                Мой профиль
                </div>
            <div className="header__right">
                <div className="header__search"><i className="fas fa-search" aria-hidden="true"></i></div>
                <div className="header__notification"><i className="fas fa-bell" aria-hidden="true"></i></div>
                <div className="header__eye"><i className="far fa-eye"></i></div>
                <div className="header__profile profile">
                    <div className="profile__avatar"></div>
                    <div className="profile__dropdown">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
