import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappBuilderComponent } from './webapp-builder.component';

describe('WebappBuilderComponent', () => {
  let component: WebappBuilderComponent;
  let fixture: ComponentFixture<WebappBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebappBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
