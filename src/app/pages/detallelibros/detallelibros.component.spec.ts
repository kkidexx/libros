import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallelibrosComponent } from './detallelibros.component';

describe('DetallelibrosComponent', () => {
  let component: DetallelibrosComponent;
  let fixture: ComponentFixture<DetallelibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallelibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallelibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
