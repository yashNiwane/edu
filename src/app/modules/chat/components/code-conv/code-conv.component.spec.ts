import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeConvComponent } from './code-conv.component';

describe('CodeConvComponent', () => {
  let component: CodeConvComponent;
  let fixture: ComponentFixture<CodeConvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeConvComponent],
    });
    fixture = TestBed.createComponent(CodeConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
