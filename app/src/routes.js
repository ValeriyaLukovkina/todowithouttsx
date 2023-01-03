import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from "./components/Login/SignIn/SignIn";
import MainPage from "./components/MainPage/MainPage";

const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <React.Fragment>
                        {/* <Navigate replace to={'/'}/> */}
            <Routes>
                <Route path='*' element={<MainPage/>} />

                {/* <Redirect to='/' /> */}
            </Routes>                
            </React.Fragment>

        )
    }
    return (
        <React.Fragment>
                            {/* <Navigate replace to={'/signin'}/> */}

        <Routes>
            <Route path='/signin' element={SignIn} />

            {/* <Route path='/' element={<Navigate to={'/signin'}/>} /> */}
            {/* <Redirect to='/' /> */}
        </Routes>            
        </React.Fragment>

    )
}

export default useRoutes;