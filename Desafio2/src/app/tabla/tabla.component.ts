import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {
 
  estudiantes=[
    {
      nombre:'Ricardo',
      apellido:"Gutierrez",
      nota:7,
      curso: 'Angular'
    },
    {
      nombre: 'Martina',
      apellido:"Lopez",
      nota:3,
      curso: 'React'
    },
    {
      nombre:'Jose',
      apellido:"Juarez",
      nota:3,
      curso: 'Vue'
    },
    {
      nombre:'Leonardo',
      apellido:"Morganti",
      nota:10,
      curso: 'Angular'
    },
    {
      nombre:'Roberto',
      apellido:"Navarro",
      nota:10,
      curso: 'HTML'
    },
    {
      nombre:'CARLOS',
      apellido:"LOPEZ",
      nota:3,
      curso: 'CSS'
    },
    {
      nombre:'Arturo',
      apellido:"Sandoval",
      nota:6,
      curso: 'SQL'
    }
  ]

 
  constructor() {}

  ngOnInit(): void {
  }

}
