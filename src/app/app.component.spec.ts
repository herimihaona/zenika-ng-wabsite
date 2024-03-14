import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('It should display the products', () => {
    const products = (fixture.nativeElement as HTMLElement).querySelectorAll('app-product');
    expect(products.length).toEqual(4);
  });

  it('It should update the total when "addToBasket" class method is called (Class testing)', () => {
    component.total = 0;
    component.increaseTotal(component.products[0]);
    expect(component.total).toEqual(0 + component.products[0].price)
  });

  it('It should update the total when a product emits the "addToBasket" event (DOM testing)', () => {
    const header = (fixture.nativeElement as HTMLElement).querySelector('header');
    expect(header?.textContent).toContain(0);
    const productDebugElements = fixture.debugElement.queryAll(By.css('app-product'));
    productDebugElements[0].triggerEventHandler('addToBasket', component.products[0]);
    fixture.detectChanges();
    expect(header?.textContent).toContain('20');

  });

}); 