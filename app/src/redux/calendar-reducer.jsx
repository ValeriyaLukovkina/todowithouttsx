import moment from "moment";

// const date = new Date(2022, 11, 2);

const NEXT_MONTH = 'NEXT_MONTH';
const PREVIOUS_MONTH = 'NEXT_MONTH';

const year = 2022;
const month = 6;
const day = 2;
// const startDay = date.startOf('month').startOf('week');

const initialState = {
    date: moment,
    startDay: moment().startOf('month').startOf('week'),
    endDay: moment().endOf('month').endOf('week'),
}

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_MONTH:
            return {
                ...state,
                startDay: moment().add(1, 'month').startOf('month').startOf('week'),
                // date: state.date().add(1, 'month')
            }
        case PREVIOUS_MONTH:
            return {
                ...state,
                date: new Date(year, month - 1, day)
            }
        default:
            return {
                ...state
            }
    }
}

export const nextMonth = () => ({ type: NEXT_MONTH });
export const previousMonth = () => ({ type: PREVIOUS_MONTH });

export default calendarReducer;