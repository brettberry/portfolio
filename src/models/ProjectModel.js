import Model from './Model';

export default class ProductModel extends Model {

    getTitle() {
        return this.get('title');
    }

    getClient() {
        return this.get('client');
    }

    getClientURL() {
        return this.get('clientURL');
    }

    getDate() {
        return this.get('date');
    }

    getDemo() {
        return this.get('demo');
    }

    getGithub() {
        return this.get('github');
    }

    getDescription() {
        return this.get('description');
    }

    getTech() {
        return this.get('tech');
    }
}
