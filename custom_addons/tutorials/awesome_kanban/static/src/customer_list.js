import { Component, useState, onWillStart } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';

export class CustomerList extends Component {
    static template = 'awesome_kanban.CustomerList';
    static props = {
        selectCustomer: { type: Function },
    };

    setup() {
        this.orm = useService('orm');
        this.state = useState({
            customers: [],
            displayActiveCustomers: false,
        });
        onWillStart(async () => {
            const customers = await this.orm.searchRead(
                'res.partner', [], ['display_name', 'opportunity_ids']
            );
            this.state.customers = customers;
        });
    }

    get customerList() {
        let customers = this.state.customers;
        if (this.state.displayActiveCustomers) {
            customers = customers.filter(
                (c) => c.opportunity_ids && c.opportunity_ids.length > 0
            );
        }
        return customers;
    }
}
