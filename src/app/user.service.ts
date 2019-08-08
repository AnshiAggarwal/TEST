import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  url = 'https://api.invidz.com/api/authenticate?email=mnbhardwaj888@gmail.com&password=manutest';

  getAll() {
    return this.http.get(this.url);
  }

  getById(id: number) {
    return this.http.get(this.url + id);
  }

}
