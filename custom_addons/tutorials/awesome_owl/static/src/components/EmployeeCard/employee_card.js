/** @odoo-module **/
import {Component, onWillStart, useState} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";

export class EmployeeCard extends Component {
    static template="awesome_owl.employeeCard";
    static props = {
        emp: {
            type: Object,
            shape: {
                employeeId: Number,
                employeeName: String,
                todayHour: Number,
                attendanceStatus: Boolean
            }
        }
    };

    getAttendanceColor(){
        if(this.props.emp.attendanceStatus === true){
            return "bg-success-subtle";
        }
        return "bg-danger-subtle";
    }
}