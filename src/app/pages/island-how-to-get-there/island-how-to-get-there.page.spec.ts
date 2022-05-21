import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IslandHowToGetTherePage } from './island-how-to-get-there.page';

describe('IslandHowToGetTherePage', () => {
  let component: IslandHowToGetTherePage;
  let fixture: ComponentFixture<IslandHowToGetTherePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IslandHowToGetTherePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IslandHowToGetTherePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
