import { Component, useState, onWillStart } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';

export class CustomerList extends Component {
    static template = 'awesome_kanban.CustomerList';
    static props = {
        selectCustomer: { type: Function },
    };

    setup() {
        this.orm = useService('orm');
        this.state = useState({ customers: [] });
        onWillStart(async () => {
            const customers = await this.orm.searchRead('res.partner', [], ['display_name']);
            this.state.customers = customers;
        });
    }
}
