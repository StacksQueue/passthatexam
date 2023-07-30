import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // const tabsBox = document.querySelector('.tabs-box');
    // const arrowIcons = document.querySelectorAll('.icon');
    const tabsBox = this.elementRef.nativeElement.querySelector('.tabs-box');

    // const arrowIcons = this.elementRef.nativeElement.querySelector('.icon');

    let isDragging = false;

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

    const dragging = (e: any) => {
      console.log('aha');
      if (!isDragging) return;
      tabsBox.classList.add('dragging');
      tabsBox.scrollLeft -= e.movementX;
      // handleIcons();
    };

    // const dragStop = () => {
    //   isDragging = false;
    //   tabsBox.classList.remove('dragging');
    // };
    tabsBox.addEventListener('mousedown', () => (isDragging = true));
    tabsBox.addEventListener('mousemove', dragging);
    // document.addEventListener('mouseup', dragStop);
  }
}
