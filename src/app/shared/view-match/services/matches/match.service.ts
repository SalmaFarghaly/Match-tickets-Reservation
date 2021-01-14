import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private _createUrl="http://localhost:3000/match/newEvent"
  private _viewUrl="http://localhost:3000/match/allMatches"
  private _editUrl="http://localhost:3000/match/editEvent/"
  private _stadiumUrl="http://localhost:3000/stadium/create"
  private _getUrl="http://localhost:3000/stadium/getAll"
  private _getStadiumsUrl="http://localhost:3000/match/allSeats/"
  private _reserveSeatsUrl="http://localhost:3000/reservation/add/"

  constructor(private http:HttpClient) { }

  createMatch(matchData){
    return this.http.post<any>(this._createUrl,matchData)

  }
  viewMatches(){
    return this.http.get<any>(this._viewUrl);
  }
  editMatch(matchData,id){

    return this.http.post<any>(this._editUrl+`${id}`,matchData)
  }
  createStaduim(data){
    return this.http.post<any>(this._stadiumUrl,data)
  }
  getStadiums(){
    return this.http.get<any>(this._getUrl);

  }
  getSeats(id){
    return this.http.post<any>(this._getStadiumsUrl+`${id}`,{})

  }
  reserveSeats(id,data){
    console.log(data)
    return this.http.post<any>(this._reserveSeatsUrl+`${id}`,data)
  }
}
