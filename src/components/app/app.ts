import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document.addEventListener('DOMContentLoaded', (): void => {
            this.controller.getStartNews((data) => this.view.drawNews(data));
        });
        (<HTMLSelectElement>document.querySelector('.sources')).addEventListener('change', (e): void =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
