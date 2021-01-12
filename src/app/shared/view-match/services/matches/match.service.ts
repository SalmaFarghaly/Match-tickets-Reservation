import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private _createUrl="http://localhost:3000/match/newEvent"
  private _viewUrl="http://localhost:3000/match/allMatches"
  private _editUrl="http://localhost:3000/match/editEvent/"

  constructor(private http:HttpClient) { }

  createMatch(matchData){
    return this.http.post<any>(this._createUrl,matchData)

  }
  viewMatches(){
    return this.http.get<any>(this._viewUrl);
  }
  editMatch(matchData,id){
    console.log(matchData)
    return this.http.post<any>(this._editUrl+`${id}`,matchData)
  }
}
