import AppLoader from './appLoader';
import { Callback, MyNews, MySources } from '../app/types';

class AppController extends AppLoader {
    getSources(callback: Callback<MySources>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback<MyNews>): void {
        const target = e.target as HTMLSelectElement;
        if (target.classList.contains('sources')) {
            const sourceId = target.value as string;
            super.getResp(
                {
                    endpoint: 'everything',
                    options: {
                        sources: sourceId,
                    },
                },
                callback
            );
        }
    }
    getStartNews(callback: Callback<MyNews>): void {
        super.getResp(
            {
                endpoint: 'everything',
                options: {
                    sources: 'abc-news',
                },
            },
            callback
        );
    }
}

export default AppController;
