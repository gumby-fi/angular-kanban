import { TaskStatus } from "./task-status.enum";
import { uuid } from "../util/uuid";

export class Task {
    id: String;
    title: String;
    status: TaskStatus;
    description: String;

    constructor(title: String, description: string, status: TaskStatus = TaskStatus.TODO) {
        this.id = uuid();
        this.title = title;
        this.description = description;
        this.status = status || TaskStatus.TODO;
    }
}
