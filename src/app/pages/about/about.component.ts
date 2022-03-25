import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  founderAndCo = [
    {
    id:1,
    founder:"Founder",
    founderName:"Raghunandan SAraf",
    founderDetails:"MBA from SAARC Delhi",
    founderImage:"https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  },
  {
    id:1,
    founder:"Co-founder",
    founderName:"Ambareesh Murthy",
    founderDetails:"MBA from SAARC Delhi",
    founderImage:"https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  }
]
}
