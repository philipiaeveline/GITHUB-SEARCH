import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    //this.elem.nativeElement.style.backgroundColor = '#F9C128';
  }
  setColor(color: string) {
    this.renderer.setStyle(
      this.elem.nativeElement, 'backgroundColor', color
    );
  }
  @HostListener('mouseover')
  onMouseOver() {
    this.setColor('green')
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.setColor('beige')
  }
}