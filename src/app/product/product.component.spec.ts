import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = { title: 'TITLE', description: 'DESC', photo: 'PHOTO.png', id: 'ID', price:10, stock:0 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should display the product photo as image url', () => {
    const img = (fixture.nativeElement as HTMLElement).querySelector('img');
    expect(img?.src).toContain('PHOTO.png');
  });

  it('It should display the product descriptionl', () => {
    const small = (fixture.nativeElement as HTMLElement).querySelector('.card-header > small');
    expect(small?.textContent).toContain('DESC');
  });

  it('It should display the product title', () => {
    const a = (fixture.nativeElement as HTMLElement).querySelector('.card-link');
    expect(a?.textContent).toContain('TITLE');
  });

  it('It should display the product price', () => {
    const p = (fixture.nativeElement as HTMLElement).querySelector('.card-text');
    expect(p?.textContent).toContain('10');
  });

  it('It should emit addToBasket event with the given product when the button is clicked', () => {
    const emitSpy = spyOn(component.addToBasket, 'emit');
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    button?.click();
    expect(emitSpy).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith(component.product);
  });

});
