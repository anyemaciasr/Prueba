import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaEliminarPage } from './persona-eliminar.page';

describe('PersonaEliminarPage', () => {
  let component: PersonaEliminarPage;
  let fixture: ComponentFixture<PersonaEliminarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaEliminarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaEliminarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
