/** @odoo-module **/
import {Component, useState, onWillStart} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";

export class AttendanceDashboard extends Component {
    static template = "awesome_owl.attendanceDashboard";

    setup() {

        this.orm = useService("orm");
        this.data = useState(
            {
                searchQuery: "",
                rows: [
                    // {
                    //     id: 1,
                    //     name: "John Doe",
                    //     check_in: "2026-06-08 09:00:00",
                    //     check_out: "2026-06-08 18:00:00",
                    //     hours: 9
                    // },
                    // {
                    //     id: 2,
                    //     name: "Alice",
                    //     check_in: "2026-06-08 08:30:00",
                    //     check_out: "2026-06-08 17:30:00",
                    //     hours: 9
                    // }

                ]
            }
        );

        onWillStart(
            async ()=>{
                await this.loadData();
            }
        );
    }

    async loadData() {
        try {
            const result = await this.orm.searchRead(
                "hr.attendance",
                [],
                ["id", "employee_id", "check_in", "check_out", "worked_hours"]

            );


            this.data.rows = result.map(
                record => ({
                    id: record.id,
                    name: record.employee_id ? record.employee_id[1] : "Unknown",
                    check_in: record.check_in,
                    check_out: record.check_out || "Still checked in",
                    hours: record.worked_hours || 0
                })
            );
        }
        catch(err){
            console.error("Failed to load data", err);
        }
    }

    getRowColor(hours) {
        if (hours >= 9) {
            return "table-success";
        } else if (hours >= 8) {
            return "table-info";
        }
        return "table-danger";
    }

    get filteredData() {
        const query = this.data.searchQuery.toLowerCase();
        if (!query) {
            return this.data.rows;
        }
        return this.data.rows.filter(
            row => row.name.toLowerCase().includes(query)
        );
    }


    onSearchInput(ev) {
        this.data.searchQuery = ev.target.value;
    }

    get totalCount() {
        return this.filteredData.length;
    }

    get totalWorkHours() {
        return this.filteredData.reduce(
            (sum, row) => sum + row.hours, 0
        );
    }

    get avgWorkHours() {
        return this.totalCount ? Math.round(this.totalWorkHours / this.totalCount) : 0;
    }


}