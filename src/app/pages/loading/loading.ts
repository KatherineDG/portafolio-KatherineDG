import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading implements OnInit, OnDestroy{

  timeOfLoading = 0;
  interval: any;
  private cdr = inject(ChangeDetectorRef)
  private router = inject(Router)

  ngOnInit() {
    this.interval = setInterval(() => {
      this.timeOfLoading++;
      this.cdr.detectChanges();
      if (this.timeOfLoading === 5) {
        this.router.navigate(['/profile'])
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
