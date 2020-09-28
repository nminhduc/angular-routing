import { AllModel } from './../models/all.model';
import { GetAllService } from './../services/get-all.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {
  data: AllModel[]

  constructor(private getAllService: GetAllService) { }

  ngOnInit(): void {
    this.getAllService.getAll().subscribe(data => {
      this.data = data;
    })
    
  }

  onClickEvent(event) {
    console.log(2, event);
  }

  

}
