import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  trendingCars : any;
  superCars : any;
  popularCars : any;
  constructor(private http: HttpClient, private router : Router){
  }
  ngOnInit(): void {
    this.getTrendingCars();
    this.getSuperCars();
    this.getPopularCars();
  }
  getTrendingCars(){
    this.http.get('http://localhost:4200/assets/data/trending-cars.json').subscribe( (cars)=> {
      this.trendingCars = cars ; 
      console.log(this.trendingCars);
    })
  }
  getSuperCars(){
    this.http.get('http://localhost:4200/assets/data/super-cars.json').subscribe( (cars)=> {
      this.superCars = cars ; 
      console.log(this.superCars);
    })
  }
  getPopularCars(){
    this.http.get('http://localhost:4200/assets/data/popular-cars.json').subscribe( (cars)=> {
      this.popularCars = cars ; 
      console.log(this.popularCars);
    })
  }
  goToCar(type : string , id : string){
    this.router.navigate(['car', type, id]);
  }

}
