import { KanbanController } from '@web/views/kanban/kanban_controller';
import { kanbanView } from '@web/views/kanban/kanban_view';
import { registry } from '@web/core/registry';
import { CustomerList } from './customer_list';

class AwesomeKanbanController extends KanbanController {
    static components = {
        ...KanbanController.components,
        CustomerList,
    };
}

export const awesomeKanbanView = {
    ...kanbanView,
    Controller: AwesomeKanbanController,
};

registry.category('views').add('awesome_kanban', awesomeKanbanView);
