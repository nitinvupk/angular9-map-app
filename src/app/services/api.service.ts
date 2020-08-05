import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getResult(address: string) {
    const options = {
      withCredentials: false,
    };

    const queryOptions = {
      input: address,
      key: environment.API_KEY,
      types: 'places'
    };

    const BASE_URL = environment.corsProxyUrl + environment.API_URL + 'place/queryautocomplete';
    const queryString = this.encodeQuery(queryOptions);
    const callUrl = BASE_URL + '/json?' + queryString;

    return this.httpClient.get(callUrl, options)
  }

  getPlaceDetail(placeId) {
    const options = {
      withCredentials: false,
    };
    const queryOptions = {
      place_id: placeId,
      key: environment.API_KEY,
      types: 'places'
    };

    const BASE_URL = environment.corsProxyUrl + environment.API_URL + 'place/details';
    const queryString = this.encodeQuery(queryOptions);
    const callUrl = BASE_URL + '/json?' + queryString;

    return this.httpClient.get(callUrl, options)
  }

  encodeQuery(data: any) {
    let ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
  }
}


// https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAATeZLHSEmn80h8DS7m0_HxNZ_Bp3sJCaLm8vrENyQipGC6TKHpfWJLIrI_sH98bO2VzbpUyJAix3shXASL7Y0J_6-_Tfq8hNZdItLb7oboA-2ZqyWG--OzwT3t_Vqw03OEhA9sgHNLzNZHgcynkhoXAlTGhRmmGHFryyU0jvD4_cxvLfrJAMq0w&sensor=false&maxheight=100&maxwidth=100&key=AIzaSyCxhHULsqibUfHdQgeL4K9mJIjM3HNDFY0