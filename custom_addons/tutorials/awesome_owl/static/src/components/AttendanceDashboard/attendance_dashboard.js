/** @odoo-module **/
import {Component, useState} from "@odoo/owl";

export class AttendanceDashboard extends Component {
    static template = "awesome_owl.attendanceDashboard";

    setup() {
        this.data = useState(
            {
                rows: [
                    {
                        id: 1,
                        name: "John Doe",
                        check_in: "2026-06-08 09:00:00",
                        check_out: "2026-06-08 18:00:00",
                        hours: 9
                    },
                    {
                        id: 2,
                        name: "Alice",
                        check_in: "2026-06-08 08:30:00",
                        check_out: "2026-06-08 17:30:00",
                        hours: 9
                    },
                ]
            }
        );
    }


}