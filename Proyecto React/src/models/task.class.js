import { LEVELS } from './levels.enum'



export class Task {
    name = 'Sin definir';
    description = 'Sin definir';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level) {
        
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }

}