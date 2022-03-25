import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  furnitureDetails = [
    
    {
    id:1,
    furnitureName:"Dining Table",
    furnitureDetails:"6 seater",
    furniturePrice:20000,
    furnitureImage:"https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },

  {
    
    id:2,
    furnitureName:"Dining Table",
    furnitureDetails:"10 seater",
    furniturePrice:50000,
    furnitureImage:"https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },

  {
    
    id:3,
    furnitureName:"Dining table",
    furnitureDetails:"4 seater",
    furniturePrice:30000,
    furnitureImage:"https://media.istockphoto.com/photos/interior-dining-room-wallpaper-mockup-picture-id1294068368?b=1&k=20&m=1294068368&s=170667a&w=0&h=rjqDZWZyN3rAKolDbM_uvW6YI3p9O8VVJjZFm0pgOtc="
  },

  {
    
    id:4,
    furnitureName:"Couch",
    furnitureDetails:"1 seater",
    furniturePrice:5000,
    furnitureImage:"https://media.istockphoto.com/photos/happy-young-man-using-laptop-on-swing-chair-picture-id604828258?b=1&k=20&m=604828258&s=170667a&w=0&h=8mauvOJ-LuEMIV1Cxh1-A9sZgc5uUNv8cZZk6oIiKZw="
  },

  {
    
    id:5,
    furnitureName:"Couch",
    furnitureDetails:"2 seater",
    furniturePrice:15000,
    furnitureImage:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },

  {
    
    id:6,
    furnitureName:"Couch",
    furnitureDetails:"3 seater ",
    furniturePrice:20000,
    furnitureImage:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },

  {
    
    id:7,
    furnitureName:"Chair",
    furnitureDetails:"1 seater",
    furniturePrice:5000,
    furnitureImage:"https://media.istockphoto.com/photos/spread-happiness-through-my-memes-picture-id1311401080?b=1&k=20&m=1311401080&s=170667a&w=0&h=_6kmZ_KoZR49iPkWIkCBWTSfD7b8oX8ex6jIrrPRMFA="
  },

  {
    
    id:8,
    furnitureName:"Chair",
    furnitureDetails:"set of 3",
    furniturePrice:10000,
    furnitureImage:"https://images.unsplash.com/photo-1581541234269-03d5d8576c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },

  {
    
    id:9,
    furnitureName:"Chair",
    furnitureDetails:"Set of 2",
    furniturePrice:15000,
    furnitureImage:"https://images.unsplash.com/photo-1594000311835-6d564e5a46b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },

  {
    
    id:10,
    furnitureName:"Bed",
    furnitureDetails:"Small",
    furniturePrice:20000,
    furnitureImage:"https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },

  {
    
    id:11,
    furnitureName:"Bed",
    furnitureDetails:"Meduim",
    furniturePrice:30000,
    furnitureImage:"https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },

  {
    
    id:12,
    furnitureName:"Bed",
    furnitureDetails:"Large",
    furniturePrice:40000,
    furnitureImage:"https://media.istockphoto.com/photos/hotel-bedroom-picture-id173587041?b=1&k=20&m=173587041&s=170667a&w=0&h=9uGzJPQM6ilzNsCkd5ml_Wh1sEzKv0YB7CzsDffnULg="
  },

  {
    
    id:13,
    furnitureName:"Study Table",
    furnitureDetails:"Small",
    furniturePrice:15000,
    furnitureImage:"https://media.istockphoto.com/photos/home-office-interior-3d-render-picture-id637742772?b=1&k=20&m=637742772&s=170667a&w=0&h=RIRg-50PGuFWiILv0xXmeXMr1PfDbwKjuxgwi63ojds="
  },


  {
    
    id:14,
    furnitureName:"Study Table",
    furnitureDetails:"Medium",
    furniturePrice:20000,
    furnitureImage:"https://media.istockphoto.com/photos/cozy-scandinavian-style-home-office-picture-id1043634192?b=1&k=20&m=1043634192&s=170667a&w=0&h=qjCTqmED1p5jzZhqIlIQSLi4KtHBiAUMhKZS5lPCHvc="
  },

  {
    
    id:15,
    furnitureName:"Study Table",
    furnitureDetails:"Large",
    furniturePrice:25000,
    furnitureImage:"https://media.istockphoto.com/photos/workplace-at-home-picture-id517803896?b=1&k=20&m=517803896&s=170667a&w=0&h=sl0tAw8Pg3qZ9-4tqGG0jUBGBQrBujPiW7-MXam9DdE="
  }

  ]
}

