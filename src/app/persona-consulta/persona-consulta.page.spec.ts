import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaConsultaPage } from './persona-consulta.page';

describe('PersonaConsultaPage', () => {
  let component: PersonaConsultaPage;
  let fixture: ComponentFixture<PersonaConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
