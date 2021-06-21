import { Component } from '@angular/core';
import { Apiservice } from './api/api.service';
import { GlobalModel } from './Model/global.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidtracker';

  global: boolean;
  country: string;
  data: GlobalModel;
  dailyData: any[];
  countries: any[]; 
  lineChartData: any[] = [
    {
      data: [65,64,33,44], label: 'Label'
    }
  ];

  barChartType = 'bar';
  barChartLabels: any[] = [
    'Infected' , 'Recovered' , 'Deaths'
  ];

  barChartData: any[] = [
    {
      data: [65,76,33], label: 'label'
    }
  ];

  constructor(private api: Apiservice){
    this.data = new GlobalModel();
  }
ngOnInit(): void {
  this.global = true;
  this.fetchData();
}

fetchData(){
  this.api.fetchData().subscribe((res : any[]) => {
    this.data.confirmed = res['confirmed']['value'];
    this.data.recovered = res['recovered']['value'];
    this.data.deaths = res['deaths']['value'];
    this.data.lastupdate = res['lastUpdate'];

  });
}


}
