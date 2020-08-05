import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  addressInput: string;

  predictions: Object[];

  @Input() address: string;
  @Output() giveBack = new EventEmitter<any>();
  @Output() activeMarker = new EventEmitter<any>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.addressInput = this.address;
  }

  keyUpHandler() {
    this.predictions = null;
    if (this.addressInput.length >= 2) {
      const address = this.addressInput;
      if (address === this.addressInput) {
        this.makeApiCall(address);
      }
    } else {
      this.giveBack.emit([]);
    }
  }

  makeApiCall(address: string) {
    this.api.getResult(address).subscribe((response) => {
      this.predictions = response['predictions']
      this.giveBack.emit(response['predictions']);
    });
  }

  fireEvent(event) {
    this.activeMarker.emit(event);
  }
}
