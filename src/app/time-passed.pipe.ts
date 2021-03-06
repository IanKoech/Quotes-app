import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value:any): number {
    let today:Date=new Date();
    let todayWithNoTime:any=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var difference=Math.abs(value-todayWithNoTime);
    const secondsInDay=86400;
    var dateDifferenceSeconds=difference*0.001;
    var dateCounter=dateDifferenceSeconds/secondsInDay;
    return dateCounter;
  }
}
