import { Component, OnInit } from '@angular/core';
import { TempoService } from '../../tempo.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {
  constructor(public timerService: TempoService) {}

  ngOnInit() {}
}
