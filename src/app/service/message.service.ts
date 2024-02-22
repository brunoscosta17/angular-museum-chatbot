import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResponse } from '../types/message-response.type';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url = 'https://jdzrrnv67dcnspexppkqyugwli0iaykg.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(message: string): Observable<MessageResponse> {
    console.log('sendData', message);
    return this.http.post<MessageResponse>(this.url, message);
  }

}
