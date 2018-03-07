/**
 * Model class for module in the Amaze Portal (eg. AMAZE_TOUCH, AMAZE_USER_MANAGEMENT and etc.)
 */

import { ROLES } from "./roles.enum";

export class Module {
    module_id: number;
    name: string;
    description: string;
    roles: Array<ROLES>;

    constructor(module_id, name = "", description = "", roles = []) {
        this.module_id = module_id;
        this.name = name;
        this.description = description;
        // parse the roles array and assign the roles
        
    }
}