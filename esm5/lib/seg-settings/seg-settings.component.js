/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
var SegSettingsComponent = /** @class */ (function () {
    function SegSettingsComponent() {
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
    SegSettingsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SegSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-seg-settings',
                    template: "<table>\n  <tr>\n    <td>Sample sharacters</td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"chars\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Color</td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"color\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Length</td>\n    <td>\n      <input type=\"number\"  min=\"0\" max=\"1000\" [(ngModel)]=\"count\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Thickness</td>\n    <td>\n      <input type=\"number\" min=\"0\" max=\"1000\" [(ngModel)]=\"thickness\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Spacing</td>\n    <td>\n      <input type=\"number\" min=\"0\" max=\"1000\" [(ngModel)]=\"spacing\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Width</td>\n    <td>\n      <input type=\"number\" min=\"0\" max=\"1000\" [(ngModel)]=\"width\" />\n    </td>\n  </tr>\n  <tr>\n    <td>Height</td>\n    <td>\n      <input type=\"number\" min=\"0\" max=\"1000\" [(ngModel)]=\"height\" />\n    </td>\n  </tr>\n</table>\n\n<div > {{count}} chars from {{chars}}, displayed in color {{color}}</div>\n<div class=\"display\">\n    <lib-seven-seg [thickness]=\"thickness\" [spacing]=\"spacing\" [char-height]=\"height\" [char-width]=\"width\" [chars]=\"chars\" [count]=\"count\" [color]=\"color\"></lib-seven-seg>\n</div>\n<!--\n<div *ngFor=\"let p of [{'w':20,'h':50},{'w':4,'h':39},{'w':90,'h':13}]\">\n  <lib-hexagon [width]=\"p.w\" [height]=\"p.h\" color=\"orange\"></lib-hexagon>\n  width: {{p.w}}, height: {{p.h}};\n</div>\n-->\n",
                    styles: ["div.display{background-color:transparent;border:2px #000;display:block}input[type=number]{text-align:right}table{background-color:#dfb}"]
                }] }
    ];
    /** @nocollapse */
    SegSettingsComponent.ctorParameters = function () { return []; };
    SegSettingsComponent.propDecorators = {
        b1: [{ type: ViewChild, args: ['box1',] }]
    };
    return SegSettingsComponent;
}());
export { SegSettingsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnLXNldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NldmVuLXNlZy8iLCJzb3VyY2VzIjpbImxpYi9zZWctc2V0dGluZ3Mvc2VnLXNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBZ0JFO1FBVkEsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLGdCQUFnQixDQUFDO1FBQ3pCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUlJLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw4N0NBQTRDOztpQkFFN0M7Ozs7O3FCQVVFLFNBQVMsU0FBQyxNQUFNOztJQU9uQiwyQkFBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLG9CQUFvQjs7O0lBQy9CLHlDQUFjOztJQUNkLHVDQUFZOztJQUNaLHFDQUFXOztJQUNYLHFDQUF5Qjs7SUFDekIscUNBQWU7O0lBQ2YscUNBQVc7O0lBQ1gsc0NBQVk7O0lBRVosa0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlZy1zZXR0aW5ncycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWctc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWctc2V0dGluZ3MuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlZ1NldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGhpY2tuZXNzID0gNjtcbiAgc3BhY2luZyA9IDE7XG4gIGNvdW50ID0gMjA7XG4gIGNoYXJzID0gJzctc2VnLiBkaXNwbGF5JztcbiAgY29sb3IgPSAnI2YwMCc7XG4gIHdpZHRoID0gNDA7XG4gIGhlaWdodCA9IDYwO1xuXG4gIEBWaWV3Q2hpbGQoJ2JveDEnKSBiMTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=