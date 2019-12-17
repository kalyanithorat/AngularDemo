import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  user=null;
  constructor(private route:ActivatedRoute,
    private apiServiceService:ApiServiceService) { }

  ngOnInit() {
       this.route.paramMap.subscribe(params => {
        console.log(params.get('id'))
         this.apiServiceService.getCustomerById(params.get('id')).subscribe(res =>{
            console.log(res);
            this.user = res['data'];
           
        })   
        });
  }

}

