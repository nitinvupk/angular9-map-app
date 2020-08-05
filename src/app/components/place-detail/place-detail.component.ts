import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place_id: any;
  data: any;
  bgImage: string;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        this.place_id = params['id'];
      });

    this.getDetail();
  }

  getDetail() {
    this.api.getPlaceDetail(this.place_id).subscribe((res: any) => {
      if (res['status'] == 'OK') {
        this.data = res.result;
        this.bgImage = `${environment.API_URL}place/photo?photoreference=${this.data['photos'][0]['photo_reference']}&sensor=false&maxheight=50&maxwidth=50&key=${environment.API_KEY}`;
      }
    })
  }
}
