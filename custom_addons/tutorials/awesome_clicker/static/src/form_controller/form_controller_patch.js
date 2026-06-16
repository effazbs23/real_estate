import { FormController } from "@web/views/form/form_controller";
import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";

const FormControllerPatch = {
    setup(){
        super.setup(...arguments);
        const clicker = useService("clicker");
        if(Math.random() < 0.01 ){
            clicker.getRewards();
        }
    }
};

patch(FormController.prototype, FormControllerPatch);