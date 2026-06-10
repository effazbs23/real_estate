/** @odoo-module **/

import { Component } from "@odoo/owl";
import { CrmPipelineDashboard } from "@awesome_owl/components/CrmPipelineDashboard/crm_pipeline_dashboard";

export class Playground extends Component {
    static template = "awesome_owl.playground";

    static components = { CrmPipelineDashboard };

}

