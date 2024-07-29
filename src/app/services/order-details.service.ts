import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"An aged house whispers tales of bygone eras.",
      foodImg:"../../../assets/img/img1.jpg" ,
    },
    {
      id:2,
      foodName:"Nature's tranquility captured in a single frame.",
      foodImg:"../../../assets/img/img2.jpg"
    },
    {
      id:3,
      foodName:"Electric energy ignites the stage in a symphony of sound and light.",
      foodImg:"../../../assets/img/img3.jpg",
    },
    {
      id:4,
      foodName:"Silhouetted tower pierces the night sky, a beacon of urban majesty.",
      foodImg:"../../../assets/img/img4.jpg"
    },
    {
      id:5,
      foodName:"Vibrant colors adorn tribal attire, celebrating culture and tradition in motion.",
      foodImg:"../../../assets/img/img5.jpg"
    },
    {
      id:6,
      foodName:"Young innocence captured in playful laughter and curious eyes",
      foodImg:"../../../assets/img/img6.jpg"}
  ]


  

}
