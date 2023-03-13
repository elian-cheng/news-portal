import './sources.css';
import { Source } from '../../app/types';

class Sources {
    draw(data: Array<Source>): void {
        const sourceSelector = document.querySelector('.sources') as HTMLSelectElement;
        sourceSelector.innerHTML = data
            .map(
                (item: Pick<Source, 'id' | 'name'>): string =>
                    `<option value="${item.id}" class = "source__option" data-source-id="${item.id}">${item.name}</option>`
            )
            .join('\n');
    }
}

export default Sources;
