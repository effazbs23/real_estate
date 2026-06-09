/** @odoo-module **/
import {Component, useState} from "@odoo/owl";

export class AttendanceDashboard extends Component {
    static template = "awesome_owl.attendanceDashboard";

    setup() {
        this.data = useState(
            {
                searchQuery: "",
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

    get filteredData() {
        const query = this.data.searchQuery.toLowerCase();
        if(!query){
            return this.data.rows;
        }
        return this.data.rows.filter(
            row=> row.name.toLowerCase().includes(query)
        );
    }

    onSearchInput(ev){
        this.data.searchQuery = ev.target.value;
    }

    get totalCount() {
        return this.filteredData.length;
    }
    get totalWorkHours() {
        return this.filteredData.reduce(
            (sum,row) => sum + row.hours, 0
        );
    }

    get avgWorkHours() {
        return Math.round(this.totalWorkHours / this.totalCount);
    }


}