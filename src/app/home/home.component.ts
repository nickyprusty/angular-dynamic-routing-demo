import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nestedData;
  displayedData;
  simplifiedData = [];
  constructor(private dataService: DataService,
              private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getNestedData();
  }

  getNestedData() {
    this.dataService.getNestedData().subscribe((data) => {
      this.nestedData = data;
      console.log(data);
      this.showData();
    });
  }

  showData(id?) {
    console.log(this.router, this.route);
    const paramArray = [];
    this.route.params.subscribe((params) => {
      for (const prop in params) {
        if (params.hasOwnProperty(prop)) {
          paramArray.push(params[prop]);
        }
      }
      console.log(paramArray);
      const datas = [];
      this.simplifyData(this.nestedData, paramArray);
      console.log(this.simplifiedData[this.simplifiedData.length - 1]);
      this.displayedData = this.simplifiedData[this.simplifiedData.length - 1]
    });
  }

  simplifyData(nestedData, paramArray) {
    nestedData.forEach(data => {
      for (const property in data) {
          if (data.hasOwnProperty(property)) {
            if (Array.isArray(data[property])) {
              if (paramArray.includes(data['id'])) {
                this.simplifiedData.push([property, data[property]]);
              }
              this.simplifyData(data[property], paramArray);
            }
          }
      }
    });
  }

  view(id){
    this.router.navigate([this.displayedData[0] + '/' + id], {relativeTo: this.route})
  }

}
