import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ArrowLeftComponent } from '../../components/icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../components/icons/museum/museum.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from "../../components/chat-dialog/chat-dialog.component";
import { MessageService } from '../../service/message.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss',
    imports: [
      CommonModule,
      ArrowLeftComponent,
      MuseumComponent,
      ChatSuggestionsComponent,
      ChatDialogComponent
    ],
    providers: [
      MessageService
    ]
})
export class ChatComponent {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private messageService: MessageService) {
      if (isPlatformBrowser(this.platformId)) {
        this.questions = JSON.parse(localStorage.getItem('messages') ?? '[]');
      }
    }
  
  questions: Message[] = [];

  back(): void {
    this.router.navigate(['/']);
  }

  sendSuggestedQuest(question: string): void {
    this.questions.push({ type: 'request', content: question });
    this.updateLocalStorage();
    this.sendMessage(question);
  }

  updateLocalStorage(): void {
    localStorage.setItem('messages', JSON.stringify(this.questions));
  }
  
  sendMessage(message: string): void {
    this.messageService
      .sendData(message)
      .subscribe({ 
        next: (response: any) => {
          this.questions.push({ 
            type: 'response', 
            content: response.response
          });
          this.updateLocalStorage();
        }
      });
  }

}
