import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-file',
  template: `
    <p class="bg-color">
      {{message}}
    </p>
  `,
  styles: [
    `
      .bg-color {
        background-color: #cccccc;
      }
    `
  ]
})
export class SingleFileComponent implements OnInit {
  message: String = 'single-file works!';

  constructor() { }

  ngOnInit(): void {
  }
}
