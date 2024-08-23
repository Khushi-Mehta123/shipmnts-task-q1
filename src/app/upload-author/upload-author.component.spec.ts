import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAuthorComponent } from './upload-author.component';

describe('UploadAuthorComponent', () => {
  let component: UploadAuthorComponent;
  let fixture: ComponentFixture<UploadAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
