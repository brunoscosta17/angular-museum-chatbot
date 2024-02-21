import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../components/icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../components/icons/museum/museum.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from "../../components/chat-dialog/chat-dialog.component";

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
    ]
})
export class ChatComponent {

  constructor(private router: Router) { }

  questions: Message[] = [];

  back(): void {
    this.router.navigate(['/']);
  }

  sendSuggestedQuest(question: string): void {
    console.log(question);
    this.questions.push({ type: 'request', content: question });
    console.log(this.questions);
  }

}
