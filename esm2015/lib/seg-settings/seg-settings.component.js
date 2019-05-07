/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
export class SegSettingsComponent {
    constructor() {
        this.thickness = 6;
        this.spacing = 1;
        this.count = 20;
        this.chars = '7-seg. display';
        this.color = '#f00';
        this.width = 40;
        this.height = 60;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SegSettingsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-seg-settings',
                template: "<table>\n  <tr>\n    <td>Sample sharacters</td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"chars\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Color</td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"color\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Length</td>\n    <td>\n      <input type=\"number\"  min=\"0\" max=\"1000\" [(ngModel)]=\"count\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Thickness</td>\n    <td>\n      <input type=\"number\" min=\"0\" max=\"1000\" [(ngModel)]=\"thickness\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Spacing</td>\n    <td>\n      <input type=\"number\" min=\"0\" max=\"1000\" [(ngModel)]=\"spacing\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Width</td>\n    <td>\n      <input type=\"number\" min=\"0\" max=\"1000\" [(ngModel)]=\"width\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Height</td>\n    <td>\n      <input type=\"number\" min=\"0\" max=\"1000\" [(ngModel)]=\"height\" />\n    </td>\n  </tr>\n</table>\n\n<div > {{count}} chars from {{chars}}, displayed in color {{color}}</div>\n<div class=\"display\">\n    <lib-seven-seg [thickness]=\"thickness\" [spacing]=\"spacing\" [char-height]=\"height\" [char-width]=\"width\" [chars]=\"chars\" [count]=\"count\" [color]=\"color\"></lib-seven-seg>\n</div>\n<!--\n<div *ngFor=\"let p of [{'w':20,'h':50},{'w':4,'h':39},{'w':90,'h':13}]\">\n  <lib-hexagon [width]=\"p.w\" [height]=\"p.h\" color=\"orange\"></lib-hexagon>\n  width: {{p.w}}, height: {{p.h}};\n</div>\n-->\n",
                styles: ["div.display{background-color:transparent;border:2px #000;display:block}input[type=number]{text-align:right}table{background-color:#dfb}"]
            }] }
];
/** @nocollapse */
SegSettingsComponent.ctorParameters = () => [];
SegSettingsComponent.propDecorators = {
    b1: [{ type: ViewChild, args: ['box1',] }]
};
if (false) {
    /** @type {?} */
    SegSettingsComponent.prototype.thickness;
    /** @type {?} */
    SegSettingsComponent.prototype.spacing;
    /** @type {?} */
    SegSettingsComponent.prototype.count;
    /** @type {?} */
    SegSettingsComponent.prototype.chars;
    /** @type {?} */
    SegSettingsComponent.prototype.color;
    /** @type {?} */
    SegSettingsComponent.prototype.width;
    /** @type {?} */
    SegSettingsComponent.prototype.height;
    /** @type {?} */
    SegSettingsComponent.prototype.b1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnLXNldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NldmVuLXNlZy8iLCJzb3VyY2VzIjpbImxpYi9zZWctc2V0dGluZ3Mvc2VnLXNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT3ZFLE1BQU0sT0FBTyxvQkFBb0I7SUFXL0I7UUFWQSxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDekIsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBSUksQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw4N0NBQTRDOzthQUU3Qzs7Ozs7aUJBVUUsU0FBUyxTQUFDLE1BQU07Ozs7SUFSakIseUNBQWM7O0lBQ2QsdUNBQVk7O0lBQ1oscUNBQVc7O0lBQ1gscUNBQXlCOztJQUN6QixxQ0FBZTs7SUFDZixxQ0FBVzs7SUFDWCxzQ0FBWTs7SUFFWixrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VnLXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlZy1zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlZy1zZXR0aW5ncy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VnU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aGlja25lc3MgPSA2O1xuICBzcGFjaW5nID0gMTtcbiAgY291bnQgPSAyMDtcbiAgY2hhcnMgPSAnNy1zZWcuIGRpc3BsYXknO1xuICBjb2xvciA9ICcjZjAwJztcbiAgd2lkdGggPSA0MDtcbiAgaGVpZ2h0ID0gNjA7XG5cbiAgQFZpZXdDaGlsZCgnYm94MScpIGIxOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==