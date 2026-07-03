import { Component, useState, onWillStart } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';
import { fuzzyLookup } from '@web/core/utils/search';
import { Pager } from '@web/core/pager/pager';

export class CustomerList extends Component {
    static template = 'awesome_kanban.CustomerList';
    static props = {
        selectCustomer: { type: Function },
    };
    static components = { Pager };

    setup() {
        this.orm = useService('orm');
        this.state = useState({
            customers: [],
            displayActiveCustomers: false,
            searchString: '',
            offset: 0,
        });
        this.limit = 20;
        onWillStart(async () => {
            const customers = await this.orm.searchRead(
                'res.partner', [], ['display_name', 'opportunity_ids']
            );
            this.state.customers = customers;
        });
    }

    get filteredCustomers() {
        let customers = this.state.customers;
        if (this.state.displayActiveCustomers) {
            customers = customers.filter(
                (c) => c.opportunity_ids && c.opportunity_ids.length > 0
            );
        }
        if (this.state.searchString) {
            customers = fuzzyLookup(this.state.searchString, customers, (c) => c.display_name);
        }
        return customers;
    }

    get displayedCustomers() {
        return this.filteredCustomers.slice(
            this.state.offset,
            this.state.offset + this.limit
        );
    }

    onPagerUpdate(newOffset) {
        this.state.offset = newOffset;
    }
}
