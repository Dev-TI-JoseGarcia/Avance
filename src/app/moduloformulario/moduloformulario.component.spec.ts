import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloformularioComponent } from './moduloformulario.component';

describe('ModuloformularioComponent', () => {
  let component: ModuloformularioComponent;
  let fixture: ComponentFixture<ModuloformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloformularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
