import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  public content: string;

  constructor() {
  }

  ngOnInit() {
  }

  public updatePreview(event) {
    this.content = event.target.value
  }
}