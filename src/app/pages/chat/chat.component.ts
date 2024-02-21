import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../components/icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../components/icons/museum/museum.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent,
    MuseumComponent,
    ChatSuggestionsComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  constructor(private router: Router) { }

  initialQuestions: String[] = [
    'How much does it cost to enter the museum?',
    'When the museum is open?'
  ];

  initialCuriosities: String[] = [
    'The museum is open from 9am to 5pm, Monday to Friday.',
    'How many rooms are there in the museum?',
    'How many pieces are displayed in the museum?'
  ];

  initialHistories: String[] = [
    'When the museum was founded?',
    'What the architectonic style of the museum?',
    'Who was the architect of the museum?'
  ];

  back(): void {
    this.router.navigate(['/']);
  }

}
