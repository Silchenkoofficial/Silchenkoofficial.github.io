import React from 'react';
import './Calendar.css';
// import EventCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            activeDate: new Date(),
            date: '',
            months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            nDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        }
    }

    generateMatrix() {
        var matrix = [];
        var year = this.state.activeDate.getFullYear();
        var month = this.state.activeDate.getMonth();

        var firstDay = new Date(year, month, 0).getDay();

        var maxDays = this.state.nDays[month];
        if (month === 1) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                maxDays += 1;
            }
        }

        var counter = 1;
        let dataDate = [];
        this.state.data.map((id, index) => (
            dataDate[index] = id.date
        ));
        for (var row = 1; row < 7; row++) {
            matrix[row] = [];
            for (var col = 0; col < 7; col++) {
                let days = {
                    "day": -1,
                    "date": "",
                    "countOfAppointment": 0,
                    "isAppointment": false,
                    "fullDate": new Date()
                };
                matrix[row][col] = days;
                if (row === 1 && col >= firstDay) {
                    days["day"] = counter;
                    if (counter < 10) {
                        days["date"] =  '0' + counter + '.' + (this.state.activeDate.getMonth() + 1) + '.' + this.state.activeDate.getFullYear();
                    } else {
                        days["date"] =  counter + '.' + (this.state.activeDate.getMonth() + 1) + '.' + this.state.activeDate.getFullYear();
                    }
                    days["fullDate"] = new Date(this.state.activeDate.getFullYear(), this.state.activeDate.getMonth(), counter);
                    for(let i = 0; i < dataDate.length; i++) {
                        if (days["date"] === dataDate[i]) {
                            days["isAppointment"] = true;
                            days["countOfAppointment"]++;
                        }
                    }
                    counter++;
                    matrix[row][col] = days;
                } else if (row > 1 && counter <= maxDays) {
                    days["day"] = counter;
                    if (counter < 10) {
                        days["date"] =  '0' + counter + '.' + (this.state.activeDate.getMonth() + 1) + '.' + this.state.activeDate.getFullYear();
                    } else {
                        days["date"] =  counter + '.' + (this.state.activeDate.getMonth() + 1) + '.' + this.state.activeDate.getFullYear();
                    }
                    days["fullDate"] = new Date(this.state.activeDate.getFullYear(), this.state.activeDate.getMonth(), counter);
                    for(let i = 0; i < dataDate.length; i++) {
                        if (days["date"] === dataDate[i]) {
                            days["isAppointment"] = true;
                            days["countOfAppointment"]++;
                        }
                    }
                    counter++;
                    matrix[row][col] = days;
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
    getDate(n) {
        this.setState(() => {
            this.state.activeDate.setDate(n);
            return this.state.activeDate.getDate();
        });
    }

    render() {
        let matrix = this.generateMatrix();
        // console.log(matrix);
        let rows = [];
        let now = new Date();
        // console.log(this.state.data);
        rows = matrix.map((row, rowIndex) => {
            let rowItems  = row.map((item, colIndex) => {
                console.log(item);
                return (
                    <div className="cell" style={{
                        backgroundColor: item["fullDate"] < new Date(now.getTime() - (24*60*60*1000)) || item["day"] === -1 ? "inherit":"#fff"
                    }} data-date={item["date"]}>
                        {item["day"] !== -1 ? item["day"] : ''}
                        {item["isAppointment"] ? <div class="cellAppointments">{item["countOfAppointment"]}</div> : <div></div>}
                    </div>
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
                    <div className="calendar__weekDays">
                        <div className="weekDay">Пн</div>
                        <div className="weekDay">Вт</div>
                        <div className="weekDay">Ср</div>
                        <div className="weekDay">Чт</div>
                        <div className="weekDay">Пт</div>
                        <div className="weekDay">Сб</div>
                        <div className="weekDay">Вс</div>
                    </div>
                    <div className="calendar__dayName">
                        {rows}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;