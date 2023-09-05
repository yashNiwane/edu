import { Component } from '@angular/core';
declare var Prism: any;
@Component({
  selector: 'app-code-conv',
  templateUrl: './code-conv.component.html',
  styleUrls: ['./code-conv.component.scss']
})
export class CodeConvComponent {
  code = ``;

  constructor() { }

  ngOnInit(): void {

    // The code snippet you want to highlight, as a string
    const code = `import { NgModule } from '@angular/core';
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
    `;

    var NEW_LINE_EXP = /\n(?!$)/g;
    var lineNumbersWrapper;

    Prism.hooks.add('after-tokenize', function (env: any) {
      var match = env.code.match(NEW_LINE_EXP);
      var linesNum = match ? match.length + 1 : 1;
      var lines = new Array(linesNum + 1).join('<span></span>');

      lineNumbersWrapper = `<span aria-hidden="true" class="line-numbers-rows " style="left:-0.8rem">${lines}</span>`;
    });

    const formated = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    const html = formated + lineNumbersWrapper;



    // Returns a highlighted HTML string
    // const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

    this.code = html;
    Prism.highlightAll();
  }
}
