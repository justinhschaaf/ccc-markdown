import { Component } from '@angular/core';

import { MarkdownService } from 'ngx-markdown';
import { escape } from '../escape.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private page: string = "assets/test.md";
  
  constructor(
    private mdService: MarkdownService,
  ) {

  }

  ngOnInit() {

    this.mdService.renderer.code = (code: string, language: string, isEscaped: boolean) => {

      isEscaped = false;

      return "<div class='codeBox'>"
        + "<pre class='prettyprint linenums lang-" + language.toLowerCase + " CodeBoxBuffer'>"
        + (isEscaped ? code : escape(code, true))
        + "</pre></div>\n";
      
    }

  }

}
