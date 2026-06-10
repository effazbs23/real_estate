/**@odoo-module**/

import {Component, useState, onWillStart, onMounted} from "@odoo/owl";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export class CrmPipelineDashboard extends Component {
    static template = "awesome_owl.crm_pipeline_dashboard";

    setup() {

        this.data = useState({
            searchQuery:"",
            rows:[],
            stageQuery: "All"
        });
        this.stages = ["All","New", "Qualified", "Proposition", "Won", "Lost"];
        onWillStart(async () => {
           console.log("Starting...");
            await delay(500);
           this.initialize();
        });
        onMounted(() => {
            const time = Date.now();
            this.mountedAt = time;
            console.log("Dashboard Ready...");
        })


    }

    initialize() {
            this.data.rows = [
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
            ];
    }

    get filteredData(){
        const query = this.data.searchQuery.toLowerCase();
        const stage = this.data.stageQuery.toLowerCase();

        return this.data.rows.filter( row => {
            const matchesSearch =
                !query ||
                row.name.toLowerCase().includes(query) ||
                row.salesperson.toLowerCase().includes(query);

            const matchesStage =
                !stage ||
                stage === "all" ||
                row.stage.toLowerCase() === stage;

            return matchesStage && matchesSearch;
        });
    }

    onSearchInput(ev){
        this.data.searchQuery = ev.target.value;
    }
    onStageChange(ev){
        this.data.stageQuery = ev.target.value;
    }

}