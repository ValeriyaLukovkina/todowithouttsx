import moment from "moment";

const NEXT_MONTH = 'NEXT_MONTH';
const PREVIOUS_MONTH = 'NEXT_MONTH';
const CHANGE_CALENDAR_VIEW = 'CHANGE_CALENDAR_VIEW';

const year = 2022;
const month = 6;
const day = 2;

const listTimeArr = [];  
for (let i = moment('00:00', 'LT'); i < moment('23:59', 'LT'); i.add(15, 'm')) {
    listTimeArr.push(i.format('HH:mm'))
}

const initialState = {
    date: moment,
    startDay: moment().startOf('month').startOf('week'),
    endDay: moment().endOf('month').endOf('week'),
    listTime: listTimeArr,
    calendarViewArr: ['Day', 'Month'],
    calendarView: 'Day'
}

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_MONTH:
            return {
                ...state,
                startDay: moment().add(1, 'month').startOf('month').startOf('week'),
            }
        case PREVIOUS_MONTH:
            return {
                ...state,
                date: new Date(year, month - 1, day)
            }
            case CHANGE_CALENDAR_VIEW:
                return {
                    ...state,
                    calendarView: action.calendarView
                }
        default:
            return {
                ...state
            }
    }
}

export const nextMonth = () => ({ type: NEXT_MONTH });
export const previousMonth = () => ({ type: PREVIOUS_MONTH });
export const changeCalendarView = (calendarView) => ({ type: CHANGE_CALENDAR_VIEW, calendarView })

export default calendarReducer;