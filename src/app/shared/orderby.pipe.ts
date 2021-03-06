import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  pure: true,
})
export class OrderbyPipe implements PipeTransform {
  transform(value: any[], propertyName: string): any[] {
    if (propertyName)
      return value.sort((a: any, b: any) =>
        b[propertyName].localeCompare(a[propertyName])
      );
    else return value;
  }
}
