import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], args: any): any {
    if (args === '') {
      return items;
    }
    return items.filter(item => item.title.indexOf(args) !== -1);
  }

}
