/** @odoo-module **/

import { Component,markup,useState } from "@odoo/owl";
import {AttendanceDashboard} from "./components/AttendanceDashboard/attendance_dashboard";

export class Playground extends Component {
    static template = "awesome_owl.playground";

    static components = { AttendanceDashboard };
    setup() {

    }
}
