import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {
  @Input("srvElement") element: { type: string, name: string, content: string }

  constructor() {
    console.log("->contructor")
  }

  ngOnInit(): void {
    console.log("->ngOnInit")
  }

  ngOnChanges() {
    console.log("->ngOnChanges")
  }

  ngDoCheck() {
    console.log("->do check")
  }

  ngAfterContentInit() {
    console.log("->ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("->ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("->ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("->ngAfterViewChecked")
  }

}
