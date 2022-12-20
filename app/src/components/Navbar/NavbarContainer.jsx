import React from "react";
import { connect } from "react-redux";
import { nextMonth, previousMonth } from "../../redux/calendar-reducer";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        
    }
}

const NavbarContainer = connect(mapStateToProps, { nextMonth, previousMonth})(Navbar)

export default NavbarContainer;