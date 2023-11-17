import { Injectable } from '@angular/core';
import { GifsModule } from '../gifs.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../Interfaces/gifs.interfaces';
import { Serializer } from '@angular/compiler';

const GIPHY_API_KEY = 'JWD1RNluzzmxHHIioKY0NjkpQlcifniu';
const GIPHY_SERVICE_URL = 'https://api.giphy.com/v1/gifs'
const LIMIT_GIFS = 10;

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList : Gif[] = [];


  private _tagsHistory : string[] = [];

  constructor(private http : HttpClient )
  {
    this.loadLocalStorage();
    if (this._tagsHistory.length > 0)
      this.searchTag(this._tagsHistory[0]);
  }

  get TagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag : string) {
    tag = tag.toLowerCase();
    if (this.TagsHistory.includes(tag) ) {
      this._tagsHistory = this.TagsHistory.filter( oldTag => tag !== oldTag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage() : void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);



  }

  searchTag (tag: string) : void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&q=' + tag + '&limit=' + LIMIT_GIFS)
    // .then(resp => resp.json())
    // .then( data => console.log(data));

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', LIMIT_GIFS)
      .set('q', tag);

    this.http.get<SearchResponse>(`${GIPHY_SERVICE_URL}/search`, { params : params } )
    .subscribe( resp => {

      this.gifList = resp.data;

      // console.log({gifs: this.gifList});
    })

  }

}
