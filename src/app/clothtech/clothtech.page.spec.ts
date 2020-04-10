import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClothtechPage } from './clothtech.page';

describe('ClothtechPage', () => {
  let component: ClothtechPage;
  let fixture: ComponentFixture<ClothtechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothtechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClothtechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
