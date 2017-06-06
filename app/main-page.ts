import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    var obs = new Observable();
    var array = [];
    for (var i = 0; i < 50; i++) {
        array.push({ "title": "title" + i });
    }
    obs.set("source", array);
    page.bindingContext = obs;

}