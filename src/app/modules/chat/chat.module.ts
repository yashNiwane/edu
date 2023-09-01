import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { InteractionComponent } from './pages/interaction/interaction.component';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { DefaultChatInteractionComponent } from './components/default-chat-interaction/default-chat-interaction.component';

@NgModule({
  declarations: [
    ChatComponent,
    InteractionComponent,
    DefaultChatInteractionComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class ChatModule { }
