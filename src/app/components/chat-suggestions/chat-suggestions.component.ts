import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuestionComponent } from '../icons/question/question.component';
import { CuriosityComponent } from '../icons/curiosity/curiosity.component';
import { HistoryComponent } from '../icons/history/history.component';

@Component({
  selector: 'app-chat-suggestions',
  standalone: true,
  imports: [
    CommonModule,
    QuestionComponent,
    CuriosityComponent,
    HistoryComponent
  ],
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss'
})
export class ChatSuggestionsComponent {

  suggestionsTopics: any[] = [
    {
      title: 'Questions',
      icon: 'question',
      questions: [
        'How much does it cost to enter the museum?',
        'When the museum is open?'
      ]
    },
    {
      title: 'Curiosities',
      icon: 'curiosity',
      questions: [
        'The museum is open from 9am to 5pm, Monday to Friday.',
        'How many rooms are there in the museum?',
        'How many pieces are displayed in the museum?'
      ]
    },
    {
      title: 'Histories',
      icon: 'history',
      questions: [
        'When the museum was founded?',
        'What the architectonic style of the museum?',
        'Who was the architect of the museum?'
      ]
    }
  ];

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

}
