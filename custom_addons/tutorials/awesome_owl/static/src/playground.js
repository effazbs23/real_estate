/** @odoo-module **/

import { Component,onWillStart,useState } from "@odoo/owl";
import {AttendanceDashboard} from "./components/AttendanceDashboard/attendance_dashboard";
import { EmployeeCard } from "./components/EmployeeCard/employee_card";
import {useService} from "@web/core/utils/hooks";

export class Playground extends Component {
    static template = "awesome_owl.playground";

    static components = { AttendanceDashboard,EmployeeCard };
    setup(){
        this.employees = useState([]);
        this.orm = useService("orm");

        onWillStart(
            async () =>{
                await this.loadData();
            }
        );
    }
       async loadData() {
        try {
            const result = await this.orm.searchRead(
                "hr.attendance",
                [],
                ["id", "employee_id", "worked_hours", "check_in", "check_out"]
            );

            const todayStr = new Date().toISOString().slice(0, 10);

            this.employees.splice(0, this.employees.length, ...result.map(record => {
                const inOffice = record.check_in && record.check_in.startsWith(todayStr) && !record.check_out;
                return {
                    employeeId: record.id,
                    employeeName: record.employee_id ? record.employee_id[1] : "Unknown",
                    todayHour: record.worked_hours || 0,
                    attendanceStatus: !!inOffice
                };
            }));
        } catch (err) {
            console.error("Failed to load employees for playground:", err);
        }
    }
}

