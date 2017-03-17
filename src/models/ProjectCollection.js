import Collection from './Collection';
import ProjectModel from './ProjectModel';

export default class ProjectCollection extends Collection {

    static ModelType = ProjectModel

    findByPathTitle(title) {
        return this.find(item => item.getTitle() === title);
    }
}
