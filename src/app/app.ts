import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from './compenents/carousel/carousel';
import { About } from './compenents/about/about';
import { Skills } from './compenents/skills/skills';
import { Experience } from './compenents/experience/experience';
import { Footer } from './compenents/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carousel, About,Skills,Experience,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aziamale_Portfolio');

  downloadCV(): void {

    const pdfPath = '/AZIAMALE _Amevi_Fidele_CV_2026.pdf';
    
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'AZIAMALE_Amevi_Fidele_CV_2026.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
