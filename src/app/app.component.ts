import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Add this line
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // <-- Add this line
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})





export class AppComponent {
  title = 'recipe-app';
}
