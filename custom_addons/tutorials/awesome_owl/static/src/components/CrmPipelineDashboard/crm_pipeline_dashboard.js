/**@odoo-module**/

import {Component, useState} from "@odoo/owl";

export class CrmPipelineDashboard extends Component {
    static template = "awesome_owl.crm_pipeline_dashboard";

    setup() {
        this.data = useState({

            rows: [
                {
                    id: 1, name: "Acme Corp Deal", salesperson: "Alice", stage: "New", value: 12000,
                    probability: 20
                }, {
                    id: 2, name: "Globex Renewal", salesperson: "Bob", stage:
                        "Qualified", value: 45000, probability: 60
                }, {
                    id: 3, name: "Initech Expansion",
                    salesperson: "Alice", stage: "Proposition", value: 8500, probability: 75
                }, {
                    id: 4, name:
                        "Umbrella Upsell", salesperson: "Charlie", stage: "Won", value: 32000, probability: 100
                },
                {
                    id: 5, name: "Stark Industries", salesperson: "Bob", stage: "Lost", value: 60000,
                    probability: 0
                }
            ]
        });
    }
}