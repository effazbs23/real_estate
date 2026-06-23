import { KanbanController } from '@web/views/kanban/kanban_controller';
import { kanbanView } from '@web/views/kanban/kanban_view';
import { registry } from '@web/core/registry';

class AwesomeKanbanController extends KanbanController {}

export const awesomeKanbanView = {
    ...kanbanView,
    Controller: AwesomeKanbanController,
};

registry.category('views').add('awesome_kanban', awesomeKanbanView);
