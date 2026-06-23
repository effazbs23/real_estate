import { KanbanController } from '@web/views/kanban/kanban_controller';
import { kanbanView } from '@web/views/kanban/kanban_view';
import { registry } from '@web/core/registry';
import { CustomerList } from './customer_list';

const AWESOME_KANBAN_KEY = Symbol('isFromAwesomeKanban');

class AwesomeKanbanController extends KanbanController {
    static components = {
        ...KanbanController.components,
        CustomerList,
    };

    selectCustomer(partnerId, partnerName) {
        const customerFilters = this.env.searchModel.getSearchItems(
            (searchItem) => searchItem[AWESOME_KANBAN_KEY]
        );
        for (const customerFilter of customerFilters) {
            if (customerFilter.isActive) {
                this.env.searchModel.toggleSearchItem(customerFilter.id);
            }
        }
        this.env.searchModel.createNewFilters([{
            description: partnerName,
            domain: [['partner_id', '=', partnerId]],
            [AWESOME_KANBAN_KEY]: true,
        }]);
    }
}

export const awesomeKanbanView = {
    ...kanbanView,
    Controller: AwesomeKanbanController,
};

registry.category('views').add('awesome_kanban', awesomeKanbanView);
