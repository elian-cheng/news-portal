import './news.css';
import { Article } from '../../app/types';

class News {
    draw(data: Array<Article>): void {
        (<HTMLElement>document.querySelector('.news')).innerHTML = '';
        const news = data.length >= 12 ? data.filter((_item: Article, idx: number): boolean => idx < 12) : data;
        news.forEach((item: Article): void => {
            const newsCard = document.createElement('div') as HTMLElement;
            newsCard.className = 'news-card';
            newsCard.innerHTML = `
              <div class="news-card-header">
              <a href="${item.url}" target="_blank"><img class="news-img" src="${item.urlToImage}" alt="${
                item.title
            }"></a>
              </div>
              <div class="news-card-body">
                <h2 class="news-title">
                  ${item.title.slice(0, 21)}
                  ${item.title.length > 21 ? '...' : ''}
                </h2>
                <p class="news-summary">
                  ${item.description.slice(0, 120)}
                  ${item.description.length > 120 ? '...' : ''}
                </p>
                <a class="news-link" href="${item.url}" target="_blank">Read More</a>
              </div>
              <div class="news-card-footer">
                <p class="news-date">
                  ${item.publishedAt.slice(0, 10).split('-').reverse().join('-')}
                </p>
                <p class="news-author">
                  ${item.source.name || item.author}
                </p>
              </div>`;
            (<HTMLElement>document.querySelector('.news')).appendChild(newsCard);
        });
    }
}

export default News;
