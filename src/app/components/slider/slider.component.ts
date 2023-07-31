import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  // @ViewChild('tabsbox') tabsbox: ElementRef;
  @ViewChild('tabsbox', { static: true }) tabsbox: ElementRef;

  private isDragging = false;
  startX: number;
  startScrollLeft: number;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // let tabsBox = this.elementRef.nativeElement.querySelector('.tabs-box');
    // const arrowIcons =
    //   this.elementRef.nativeElement.querySelectorAll('.icon mat-icon');
    // let isDragging = false;

    // arrowIcons.forEach((icon: any) => {
    //   icon.addEventListener('click', () => {
    //     tabsBox.scrollLeft += icon.id === 'back-arrow' ? -350 : 350;
    //     setTimeout(() => {
    //       handleIcons();
    //     }, 50);
    //   });
    // });

    // const handleIcons = () => {
    //   let scrollval = Math.round(tabsBox.scrollLeft);
    //   let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    //   arrowIcons[0].parentElement.style.display =
    //     scrollval > 0 ? 'flex' : 'none';
    //   arrowIcons[1].parentElement.style.display =
    //     maxScrollableWidth > scrollval ? 'flex' : 'none';
    // };

    // const dragging = (e: any) => {
    //   if (!isDragging) {
    //     console.log('drag stop');
    //     return;
    //   }

    //   tabsBox.classList.add('dragging');
    //   tabsBox.scrollLeft += e.movementX > 0 ? -350 : 350;
    //   handleIcons();
    // };

    // const dragStop = () => {
    //   isDragging = false;
    //   tabsBox.classList.remove('dragging');
    // };
    // tabsBox.addEventListener('mousedown', () => (isDragging = true));
    // tabsBox.addEventListener('mousemove', dragging);
    // document.addEventListener('mouseup', dragStop);
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startScrollLeft = this.tabsbox.nativeElement.scrollLeft;
    console.log('mousedown')
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    this.tabsbox.nativeElement.classList.add('dragging')
    const offsetX = event.clientX - this.startX;
    console.log('dragging', offsetX)

    this.tabsbox.nativeElement.scrollLeft = this.startScrollLeft - offsetX;
    // this.tabsbox.nativeElement.scrollLeft = this.tabsbox.nativeElement.scrollLeft - offsetX;

  }

  onMouseUp() {
    this.isDragging = false;
    console.log('false')
  }
}
