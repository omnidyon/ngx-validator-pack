import { ChangeDetectorRef, Renderer2 } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import * as i0 from "@angular/core";
export declare class ChecksComponent extends BaseComponent {
    readonly renderer: Renderer2;
    readonly changeDetectorRef: ChangeDetectorRef;
    _checks: {
        check: string;
        msg: string;
        hasError: boolean;
    }[];
    hasValue: boolean;
    set checks(checkObj: string[]);
    set errors(errArr: string[] | null);
    constructor(renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ChecksComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChecksComponent, "ng-component", never, { "hasValue": { "alias": "hasValue"; "required": false; }; "checks": { "alias": "checks"; "required": false; }; "errors": { "alias": "errors"; "required": false; }; }, {}, never, never, true, never>;
}
