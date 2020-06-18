import { Component } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'piggy-bank';
  openedSideNav = false;


  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd-mm-yyyy'
    // other options are here...
  };

  from: IMyDateModel = null;
  to: IMyDateModel = null;
  fromDate: Date;
  toDate: Date;

  amount;
  intrestRate;
  // Initialized to specific date (09.10.2018).
  openSideNav() {

  }
  onDateChanged(date, from?) {
    console.log(date.singleDate.formatted)
    if (from) {
      this.from = date.singleDate.formatted;
      this.fromDate = new Date(date.singleDate.formatted.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    } else {
      this.to = date.singleDate.formatted;
      this.toDate = new Date(date.singleDate.formatted.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    }
  }

  calculateIntreset() {
    const timeDiff = this.toDate.getTime() - this.fromDate.getTime();
    const days = timeDiff / (1000 * 60 * 60 * 24);
    this.intrestRate = (this.amount) * 0.1 * (days/365);
    this.intrestRate=this.intrestRate.toFixed(2);
  }
}
