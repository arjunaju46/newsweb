import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

// newsapiurl
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=9ba3b74091ee4d6a961450f8c383af07"
// technewsurl
techApiurl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9ba3b74091ee4d6a961450f8c383af07"


// bussinessnewsurl
businessApiurl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9ba3b74091ee4d6a961450f8c383af07"


// topheading
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
// technews
  techNews():Observable<any>{
    return this._http.get(this.techApiurl)
  }
  
// business news
businessNews():Observable<any>{
  return this._http.get(this.businessApiurl);
}

}

