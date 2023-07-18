import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient,
  ) { }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }

  getPhotos(albumId: any){
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  }
}
