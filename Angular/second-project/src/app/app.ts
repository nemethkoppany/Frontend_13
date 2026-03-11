import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from "./header/header"
import {Footer} from "./footer/footer"
import {Navigation} from "./navigation/navigation"
import {Main} from "./main/main"

@Component({
  selector: 'app-root',
  imports: [Header,Navigation,Main,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Bolyai János"
}
