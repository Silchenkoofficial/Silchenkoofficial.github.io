import React from 'react';
import './ElectronicCard.css';

export const ElectronicCard = () => {
    return (
        <div className="electronic-card">
            <div className="electronic-card__title">Электронная карта</div>
            <div className="electronic-card__sections">
                <div className="section section-active">
                    <div className="section__icon">
                        <i class="far fa-file-alt"></i>
                    </div>
                    <div className="section__info">
                        <div className="section__title">Информация о пациенте</div>
                        <div className="section__description">
                            <ul>
                                <li><p>Ваши личные данные</p></li>
                                <li><p>Рекомендации врачей</p></li>
                                <li><p>История болезней</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section__icon">
                        <i class="fas fa-vials"></i>
                    </div>
                    <div className="section__info">
                        <div className="section__title">Результаты анализов</div>
                        <div className="section__description">
                            Вы можете узнать здесь результаты своих анализов
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section__icon">
                        <i class="far fa-file"></i>
                    </div>
                    <div className="section__info">
                        <div className="section__title">Добавить  информацию</div>
                        <div className="section__description">
                            Добавляйте в свою электронную медицинскую карту новые данные
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section__icon">
                        <i class="far fa-clock"></i>
                    </div>
                    <div className="section__info">
                        <div className="section__title">История приемов</div>
                        <div className="section__description">
                            Вся информация о полученных услугах за все время хранится здесь
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
