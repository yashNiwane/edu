import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { InteractionComponent } from './pages/interaction/interaction.component';
import { ConvComponent } from './pages/conv/conv.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      { path: '', redirectTo: 'interaction', pathMatch: 'full' },
      // { path: 'nfts', component: NftComponent },
      { path: 'interaction', component: InteractionComponent },
      { path: 'interaction/conv/:id', component: ConvComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
