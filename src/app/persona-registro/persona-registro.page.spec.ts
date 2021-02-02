import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaRegistroPage } from './persona-registro.page';

describe('PersonaRegistroPage', () => {
  let component: PersonaRegistroPage;
  let fixture: ComponentFixture<PersonaRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
