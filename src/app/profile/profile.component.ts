import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit,OnChanges {
  @Input() user;
  @Input() i ;
  customClass=''
    data: any;
    
  constructor() { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //     console.log(params.get('id'))
    //      this.apiServiceService.getCustomerById(params.get('id')).subscribe(res =>{
    //         console.log(res);
    //         this.users = res['data'];
           
    //     })   
   // });
    
   
    }
ngOnChanges(){
  this.customClass='card-content color-'+this.i%6
}
}
