import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {  RockpaperscissorsService } from "../../Rockpaperscissors.service";

@Component({
  selector: 'app-pickyourchoose',
  templateUrl: './pickyourchoose.component.html',
  styleUrls: ['./pickyourchoose.component.css']
})
export class PickyourchooseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onselect(option: "Rock" | "Papper" | "Scissors"){
      this.RockpaperscissorsService.commitSelection(option)
  }

}
