import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { Router } from '@angular/router';
import { NgModuleFactoryLoader } from '@angular/core';
import { UnTestModule } from '@app/untest';
import { Location } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './routing';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AppComponent'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AppComponent');
  });

  it('should navigate to /ut lazy loaded ,pdule', fakeAsync(() => {
    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: UnTestModule};

    /* router.resetConfig([
      {path: 'ut', loadChildren: 'lazyModule'},
    ]); */

    /* spy(loader, 'load');
 */
    router.navigate(['ut']);

    tick();

    expect(location.path()).toBe('/ut');
    /* expect(location.path()).to.equal('/project/create'); */
  }));
});
