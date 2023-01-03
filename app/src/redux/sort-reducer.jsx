const initialState = {
    sort: 'List',
    dateBlock: ['Today', 'Tomorrow', 'Week', 'Upcoming'],
}

const CHANGE_MEAN_SORT = 'CHANGE_MEAN_SORT';

const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MEAN_SORT:
            return {
                ...state,
                sort: action.meanSort
            }
        default:
            return state
    }
}

export const changeMeanSort = (meanSort) => ({ type: CHANGE_MEAN_SORT, meanSort })

export default sortReducer;