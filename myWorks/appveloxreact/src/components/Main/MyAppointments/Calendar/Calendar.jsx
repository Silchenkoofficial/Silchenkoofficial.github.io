import React, {useEffect} from 'react';
import './Calendar.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            activeDate: new Date(),
            months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            weekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            nDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        }
    }

    generateMatrix() {
        var matrix = [];
        matrix[0] = this.state.weekDays;

        var year = this.state.activeDate.getFullYear();
        var month = this.state.activeDate.getMonth();

        var firstDay = new Date(year, month, 0).getDay();
        console.log(firstDay);

        var maxDays = this.state.nDays[month];
        if (month === 1) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                maxDays += 1;
            }
        }

        var counter = 1;
        for (var row = 1; row < 7; row++) {
            matrix[row] = [];
            for (var col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row === 1 && col >= firstDay) {
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    matrix[row][col] = counter++;
                }
            }
        }

        return matrix;
    }
    changeMonth(n) {
        this.setState(() => {
            this.state.activeDate.setMonth(
                this.state.activeDate.getMonth() + n
            )
            return this.state;
        });
    }

    render() {
        let matrix = this.generateMatrix();
        let rows = [];
        rows = matrix.map((row, rowIndex) => {
            let rowItems  = row.map((item, colIndex) => {
                return (
                    <div className="cell" style={{
                        backgroundColor: item < this.state.activeDate.getDay() ? "inherit":"#fff"
                    }}>{item !== -1 ? item : ''}</div>
                );
            });
            return(
                <div className="row">{rowItems}</div>
            );
        });

        return (
            <div className="appointments__calendar calendar">
                <div className="calendar__months">
                    <i className="fas fa-chevron-left" onClick={() => this.changeMonth(-1)}></i>
                    <span className="month">{this.state.months[this.state.activeDate.getMonth()]}, {this.state.activeDate.getFullYear()}</span>
                    <i className="fas fa-chevron-right" onClick={() => this.changeMonth(1)}></i>
                </div>
                <div className="calendar__body">
                    <div className="calendar__dayName">
                        {rows}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;