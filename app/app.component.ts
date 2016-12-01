import { Component,AfterViewInit } from '@angular/core';



@Component({
  selector:'[my-app]',
  templateUrl: './app/app.template.html',
})
export class AppComponent implements AfterViewInit {

ngAfterViewInit(){
    
    $.getScript('../assets/js/jquery.min.js');
    $.getScript('../assets/js/jquery.scrolly.min.js');
    $.getScript('../assets/js/jquery.scrollzer.min.js');
    $.getScript('../assets/js/skel.min.js');
    $.getScript('../assets/js/util.js');
    $.getScript('../assets/js/main.js');
  }

  }

