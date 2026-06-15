import { FormController } from "@web/views/form/form_controller";
import { patch } from "@web/core/utils/patch";
import {useClicker} from "../use_clicker";

const FormControllerPatch = {
    setup(){
        super.setup(...arguments);
        if(Math.random() < 0.01 ){
            const clicker = useClicker();
            clicker.getRewards();
        }
    }
};

patch(FormController.prototype, FormControllerPatch);