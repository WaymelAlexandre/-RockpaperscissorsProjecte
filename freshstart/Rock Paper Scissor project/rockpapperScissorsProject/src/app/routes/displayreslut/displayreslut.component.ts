import { Component, OnInit } from '@angular/core';
import { RockpaperscissorsService } from '../../Rockpaperscissors.service';

@Component({
  selector: 'app-displayreslut',
  templateUrl: './displayreslut.component.html',
  styleUrls: ['./displayreslut.component.css']
})
export class DisplayreslutComponent implements OnInit {

  constructor(private rockpaperscissorsService : RockpaperscissorsService) { }

  ngOnInit(): void {
  }

}
