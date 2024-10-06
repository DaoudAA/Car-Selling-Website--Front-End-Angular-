import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent implements OnInit {
  type='';
  id='';
  url='';
  cars : any ; 
  car:any ; 
  constructor(private route : ActivatedRoute, private httpClient : HttpClient){}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if(this.type === 'trending'){
      this.url = 'http://localhost:4200/assets/data/trending-cars.json';
    }else if (this.type ==='popular'){
      this.url = 'http://localhost:4200/assets/data/popular-cars.json';
    }else{
      this.url = 'http://localhost:4200/assets/data/super-cars.json'  
    }
    this.getMovie();
  }
  getMovie(){
    this.httpClient.get(this.url).subscribe((cars)=> {
      this.cars = cars ;
      let index = this.cars.findIndex((car: { id: string; }) => car.id == this.id); 
      if (index > -1){
        console.log(this.cars[index]);
        this.car = this.cars[index];
      }
    });
  }
}
