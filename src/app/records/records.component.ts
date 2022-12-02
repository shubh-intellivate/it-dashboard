import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
declare let $: any;

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  console = console;
  Object = Object;
  type: any;
  rank: any;
  bu: any;
  geo: any;
  start_date: any;
  end_date: any;
  currency: any;
  table_data:any;
  table_headers:any = [];
  apiType: any;
  timeframe: any;
  account: any;
  lost_reason: any;
  highestValue: any;
  tableTitle: string;
  month: any;
  fiscal_year: any;
  amount_sum: any;
  current_month: any;
  classify: string;
  segment: string;
  country: string;
  page_title: any;
  estimatesale: any;
  time: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService : DataService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.bu = params.bu;
      this.geo = params.geo;
      this.currency = params.currency;
      this.type = params.type;
      this.rank = params.rank;
      this.apiType = params.api_type;
      this.timeframe = params.timeframe;
      this.account = params.account;
      this.lost_reason = params.lost_reason;
      this.highestValue = params.highestValue;
      this.month = params.month;
      this.fiscal_year = params.fiscal_year;
      this.current_month = params.current_month;
      this.classify = params.classify;
      this.segment = params.segment;
      this.country = params.country;
      this.estimatesale = params.estimatesale;
      this.time = params.time;
    })
  }

  ngOnInit(): void {
    setTimeout(()=>{                        
      $('#datatable').DataTable(
        {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ],
          "lengthMenu": [[10, 15, -1], [10, 15, "All"]]
        }
      );
    }, 10000);
    if(this.account && this.account !=''){
      this.tableTitle = '';
      let data =  {
        "bu": this.bu == "undefined" ? '' : this.bu,
        "timeframe": this.timeframe == "undefined" ? '' : this.timeframe,
        "account": this.account == "undefined" ? '' : this.account,
        "fiscal_year":this.fiscal_year == "undefined" ? '' : this.fiscal_year,
        "geo":this.geo == "undefined" ? '' : this.geo,
      }
      this.dataService.getTopAccountProjects(data).subscribe(res=>{
        console.log(res);
        if(res.result.status == "true"){
          this.table_data = res.result.data
          this.page_title = res.result.widget_name;
          this.amount_sum = res.result.amount_sum + 'Mn'
          this.table_data.every(element => {
            for (let key in element) {
              this.table_headers.push(key)
            }
            return false;
          });
        }
      })
    }else if(this.lost_reason && this.lost_reason !=''){
      this.tableTitle = '';
      let data =  {
        "bu": this.bu == "undefined" ? '' : this.bu,
        "timeframe": this.timeframe == "undefined" ? '' : this.timeframe,
        "lost_reason": this.lost_reason == "undefined" ? '' : this.lost_reason,
        "fiscal_year":this.fiscal_year == "undefined" ? '' : this.fiscal_year,
        "geo":this.geo == "undefined" ? '' : this.geo,
      }
      this.dataService.getLostReason(data).subscribe(res=>{
        console.log(res);
        if(res.result.status == "true"){
          this.table_data = res.result.data
          this.page_title = res.result.widget_name;
          this.amount_sum = res.result.amount_sum + 'Mn'
          this.table_data.every(element => {
            for (let key in element) {
              this.table_headers.push(key)
            }
            return false;
          });
        }
      })
    }else if(this.month && this.month !=''){
      this.tableTitle = '';
      let data =  {
        "bu": this.bu == "undefined" ? '' : this.bu,
        "timeframe": this.timeframe == "undefined" ? '' : this.timeframe,
        "rank": this.rank == "undefined" ? '' : this.rank,
        "month": this.month == "undefined" ? '' : this.month,
        "fiscal_year":this.fiscal_year == "undefined" ? '' : this.fiscal_year
      }
      this.dataService.getOrderTrendRows(data).subscribe(res=>{
        console.log(res);
        if(res.result.status == "true"){
          this.table_data = res.result.data
          this.page_title = res.result.widget_name;
          this.amount_sum = res.result.amount_sum + 'Mn'
          this.table_data.every(element => {
            for (let key in element) {
              this.table_headers.push(key)
            }
            return false;
          });
        }
      })
    }else if(this.estimatesale && this.estimatesale !=''){
      this.tableTitle = '';
      let data =  {
        "bu": this.bu == "undefined" ? '' : this.bu,
        "timeframe": this.timeframe == "undefined" ? '' : this.timeframe,
        "estimatesale": this.estimatesale == "undefined" ? '' : this.estimatesale,
        "rank": this.rank == "undefined" ? '' : this.rank,
        "time": this.time == "undefined" ? '' : this.time,
        "fiscal_year":this.fiscal_year == "undefined" ? '' : this.fiscal_year
      }
      this.dataService.getSalesBreakdownRows(data).subscribe(res=>{
        console.log(res);
        if(res.result.status == "true"){
          this.table_data = res.result.data
          this.page_title = res.result.widget_name;
          this.amount_sum = res.result.amount_sum + 'Mn'
          this.table_data.every(element => {
            for (let key in element) {
              this.table_headers.push(key)
            }
            return false;
          });
        }
      })
    }else{
      this.tableTitle = '';
      let data =  {
        "bu": this.bu == "undefined" ? '' : this.bu,
        "geo": this.geo == "undefined" ? '' : this.geo,
        "currency": this.currency == "undefined" ? '' : this.currency,
        "type": this.type == "undefined" ? '' : this.type,
        "rank": this.rank == "undefined" ? '' : this.rank,
        "api_type": this.apiType == "undefined" ? '' : this.apiType,
        "timeframe": this.timeframe == "undefined" ? '' : this.timeframe,
        "highestValue": this.highestValue == "undefined" ? '' : this.highestValue,
        "classify": this.classify == "undefined" ? '' : this.classify,
        "segment": this.segment == "undefined" ? '' : this.segment,
        "country": this.country == "undefined" ? '' : this.country,
        "fiscal_year": this.fiscal_year == "undefined" ? '' : this.fiscal_year,
        "current_month": this.current_month == undefined ? false : true
      }
      if(this.highestValue && this.highestValue != 0){
        this.tableTitle = 'Outliers';
      }
      this.dataService.getOrderRecords(data).subscribe(res=>{
        if(res.result.status == "true"){
          this.table_data = res.result.data
          this.page_title = res.result.widget_name;
          this.amount_sum = res.result.amount_sum + 'Mn'
          this.table_data.every(element => {
            for (let key in element) {
              this.table_headers.push(key)
            }
            return false;
          });
        }
      })
    }
  }

}
