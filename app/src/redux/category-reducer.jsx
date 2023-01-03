import { categoryAPI } from "../api/api";

const SET_CATEGORY = 'SET_CATEGORY';
const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS'

let initialState = {
    categories: []
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                categories: [...action.categories,]
            }
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.newCategory]
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.filter(el => el._id !== action.categoryId)
            }
        default:
            return state;
    }
}

export let setCategories = (categories) => ({ type: SET_CATEGORY, categories });

export let addCategorySuccess = (newCategory) => ({ type: ADD_CATEGORY_SUCCESS, newCategory });

export let deleteCategorySuccess = (categoryId) => ({ type: DELETE_CATEGORY_SUCCESS, categoryId });

export const addCategory = (userId, categoryName) => async (dispatch) => {
    let promise = await categoryAPI.addCategory(userId, categoryName);

    if (promise.resultCode === 0) {
        const { newCategory } = promise;
        dispatch(addCategorySuccess(newCategory))
        const dataCategories = JSON.parse(localStorage.getItem('userCategories'));

        localStorage.setItem('userCategories', JSON.stringify({
            categories: [...dataCategories.categories, newCategory]
        }))
    }
}

export const deleteCategory = (userId, categoryId) => async (dispatch) => {
    let promise = await categoryAPI.deleteCategory(userId, categoryId);

    if (promise.resultCode === 0) {
        dispatch(deleteCategorySuccess(categoryId))
        const dataCategories = JSON.parse(localStorage.getItem('userCategories')).categories.filter(el => el._id !== categoryId)
        localStorage.setItem('userCategories', JSON.stringify({
            categories: [...dataCategories]
        }))
        console.log(JSON.parse(localStorage.getItem('userData')))
    }
}

export default categoryReducer