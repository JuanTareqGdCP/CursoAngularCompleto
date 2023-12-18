
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  public cacheStore : CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ));
  }

  private loadFromLocalStorage() {
    if ( !localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(url : string): Observable<Country[]> {
    return this.http.get<Country[]>( url )
    .pipe(
      catchError(error => of([])),
    );
  }

  searchCountryByAlphaCode( query: string) : Observable<Country | null> {
    const url = `${this.apiURL }/alpha/${query}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError(error => of(null))
    );
  }

  searchCapital( query: string) : Observable<Country[]> {
    const url = `${this.apiURL }/capital/${query}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( ( countries) => this.cacheStore.byCapital = { term: query, countries}),
      tap( () => this.saveToLocalStorage()),

    );
  }

  searchCountry( query: string) : Observable<Country[]> {
    const url = `${this.apiURL }/name/${query}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( ( countries) => this.cacheStore.byCountries = { term: query, countries}),
      tap( () => this.saveToLocalStorage()),
    );
  }

  searchRegion( query: Region) : Observable<Country[]> {
    const url = `${this.apiURL }/region/${query}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( ( countries) => this.cacheStore.byRegion = { region: query, countries}),
      tap( () => this.saveToLocalStorage()),
    );
  }
}
