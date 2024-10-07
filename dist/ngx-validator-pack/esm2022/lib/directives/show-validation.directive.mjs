/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input, } from "@angular/core";
import { Subscription } from "rxjs";
import { DefaultStyle } from "../constant/default-show-validation-style";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class ShowValidationDirective {
    constructor(elementRef, renderer, control) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.control = control;
        this.controlSub = new Subscription();
        this.errorStyle = DefaultStyle;
    }
    ngOnInit() {
        const formControl = this.control.control;
        this.parent = this.elementRef.nativeElement.parentElement;
        this.self = this.elementRef.nativeElement;
        this.container = this.renderer.createElement("div");
        this.renderer.appendChild(this.container, this.self);
        this.renderer.appendChild(this.parent, this.container);
        this.setStyles();
        this.controlSub.add(formControl.statusChanges.subscribe((status) => {
            if (status === "INVALID") {
                if (!this.span) {
                    this.showError(formControl.errors);
                }
            }
            else {
                this.hideError();
            }
        }));
    }
    ngOnDestroy() {
        this.controlSub.unsubscribe();
    }
    setStyles() {
        this.renderer.setStyle(this.container, "display", "flex");
        this.renderer.setStyle(this.container, "flex-direction", "column");
        this.renderer.setStyle(this.container, "gap", "10px");
        Object.entries(this.errorStyle).forEach((style) => {
            this.renderer.setStyle(this.container, style[0].replace('_', '-'), style[1]);
        });
    }
    showError(errors) {
        this.span = this.renderer.createElement("span");
        this.span.innerHTML = this.getValidationMessage(errors);
        this.renderer.appendChild(this.container, this.span);
        this.renderer.setStyle(this.span, 'padding', '0px 0px 10px 10px');
    }
    hideError() {
        if (this.container && this.span) {
            this.renderer.removeChild(this.container, this.span);
            this.span = null;
        }
    }
    getValidationMessage(errors) {
        return errors ? Object.values(errors)[0] : "Invalid Input.";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ShowValidationDirective, isStandalone: true, selector: "[showValidation]", inputs: { errorStyle: "errorStyle" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[showValidation]",
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl }], propDecorators: { errorStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvc2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7O0FBTXpFLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFDbUIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsT0FBa0I7UUFGbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFYckMsZUFBVSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXJDLGVBQVUsR0FBd0IsWUFBWSxDQUFDO0lBTXJELENBQUM7SUFFSixRQUFRO1FBQ04sTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFzQixDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztR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Q2pCOytIQVFVLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFNob3dWYWxpZGF0aW9uU3R5bGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Nob3ctdmFsaWRhdGlvbi1zdHlsZXMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U3R5bGUgfSBmcm9tIFwiLi4vY29uc3RhbnQvZGVmYXVsdC1zaG93LXZhbGlkYXRpb24tc3R5bGVcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltzaG93VmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvd1ZhbGlkYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29udHJvbFN1YjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIHBhcmVudCE6IEhUTUxFbGVtZW50O1xyXG4gIHNlbGYhOiBIVE1MRWxlbWVudDtcclxuICBjb250YWluZXIhOiBIVE1MRWxlbWVudDtcclxuICBzcGFuITogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG5cclxuICBASW5wdXQoKSBlcnJvclN0eWxlOiBTaG93VmFsaWRhdGlvblN0eWxlID0gRGVmYXVsdFN0eWxlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udHJvbDogTmdDb250cm9sXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZvcm1Db250cm9sID0gdGhpcy5jb250cm9sLmNvbnRyb2wgYXMgRm9ybUNvbnRyb2w7XHJcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0aGlzLnNlbGYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lciwgdGhpcy5zZWxmKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5wYXJlbnQsIHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcblxyXG4gICAgdGhpcy5jb250cm9sU3ViLmFkZChcclxuICAgICAgZm9ybUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwiSU5WQUxJRFwiKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuc3Bhbikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcihmb3JtQ29udHJvbC5lcnJvcnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmhpZGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbFN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lciwgXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXIsIFwiZmxleC1kaXJlY3Rpb25cIiwgXCJjb2x1bW5cIik7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyLCBcImdhcFwiLCBcIjEwcHhcIik7XHJcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLmVycm9yU3R5bGUpLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXIsIHN0eWxlWzBdLnJlcGxhY2UoJ18nLCAnLScpLCBzdHlsZVsxXSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2hvd0Vycm9yKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuc3BhbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAodGhpcy5zcGFuIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSB0aGlzLmdldFZhbGlkYXRpb25NZXNzYWdlKGVycm9ycyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyLCB0aGlzLnNwYW4pO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW4sICdwYWRkaW5nJywgJzBweCAwcHggMTBweCAxMHB4Jyk7XHJcbiAgfVxyXG5cclxuICBoaWRlRXJyb3IoKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLmNvbnRhaW5lciAmJiB0aGlzLnNwYW4pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lciwgdGhpcy5zcGFuKTtcclxuICAgICAgdGhpcy5zcGFuID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbGlkYXRpb25NZXNzYWdlKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGVycm9ycyA/IE9iamVjdC52YWx1ZXMoZXJyb3JzKVswXSA6IFwiSW52YWxpZCBJbnB1dC5cIjtcclxuICB9XHJcbn1cclxuIl19