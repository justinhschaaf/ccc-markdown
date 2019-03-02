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

    // Code Blocks -- use CCC's implementation of Prettify rather than ngx-markdown's implementation of marked
    this.mdService.renderer.code = (code: string, language: string, isEscaped: boolean) => {

      isEscaped = false;

      return '<div class="codeBox">'
        + '<pre class="prettyprint linenums lang-"' + language.toLowerCase + ' CodeBoxBuffer">'
        + (isEscaped ? code : escape(code, true))
        + '</pre></div>\n';
      
    }

    // Headings -- make them viewable for CCC's Table of Contents generator
    // TODO -- determine a way to add the <section> tags with the id
    this.mdService.renderer.heading = (text: string, level: number) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return '<a id="' + escapedText + '">'
        + '<h' + level + '>'
        + text
        + '</h' + level + '>'
        + '</a>';
    };

  }

}
