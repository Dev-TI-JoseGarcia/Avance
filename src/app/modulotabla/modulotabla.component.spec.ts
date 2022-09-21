import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulotablaComponent } from './modulotabla.component';

describe('ModulotablaComponent', () => {
  let component: ModulotablaComponent;
  let fixture: ComponentFixture<ModulotablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulotablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulotablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
