import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaActualizarPage } from './persona-actualizar.page';

describe('PersonaActualizarPage', () => {
  let component: PersonaActualizarPage;
  let fixture: ComponentFixture<PersonaActualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaActualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaActualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
