import { Component } from '@angular/core';
import { StreamService } from './stream.service';

@Component({
  selector: 'stream-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checked: boolean = false;
  stream: string;
  errorMessage: string;
  constructor(private _streamService: StreamService) { }
  
    onChange(e) {
    if (e.target.checked) {
      this.checked = true;
      this._streamService.getStream()
      .subscribe(stream => {
        this.stream = stream;
        console.log(this.stream);
      },
      error => this.errorMessage = <any>error
      );
    } else {
      this.checked = false;
    }
}
}