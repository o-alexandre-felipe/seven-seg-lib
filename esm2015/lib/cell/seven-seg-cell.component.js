/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { STANDARD_SEG_MAPPING } from '../seg-mapping';
// import {sanitizeStyle} from '@angular/core/src/sanitization/sanitization';
export class SevenSegCellComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._digit = '';
        // Style and dimensions are not supposed to change all the time
        // and when they change there are a lot of properties of the html
        // elements that will change, thus instead of writing setters and
        // getters a global input change callback will be issued.
        this.color = 'black';
        this.spacing = 0;
        this.thickness = 6;
        this.width = 30;
        this.height = 34;
        this.segments = STANDARD_SEG_MAPPING;
        for (const k in this.segments) {
            if (!this.segments[k.toLowerCase()]) {
                this.segments[k.toLowerCase()] = this.segments[k];
            }
            if (!this.segments[k.toUpperCase()]) {
                this.segments[k.toUpperCase()] = this.segments[k];
            }
        }
    }
    /**
     * @param {?} digit
     * @return {?}
     */
    set digit(digit) {
        /** @type {?} */
        const s = {};
        this._digit = digit;
        for (const k of 'ABCDEFG.,:') {
            s[k] = false;
        }
        // the user may specify any custom character using a sintax similar to
        // entities, &.*; the character will be the combination of all the segments
        // whose identifier is present in the entity.
        if (this.digit[0] === '&') {
            for (const k of this._digit) {
                if (k !== ';' && k !== '&') {
                    s[k] = true;
                }
            }
        }
        else {
            for (const d of this._digit) {
                for (const k of this.segments[d]) {
                    s[k] = true;
                }
            }
        }
        this.segState = s;
    }
    /**
     * @return {?}
     */
    get digit() {
        return this._digit;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.fit();
    }
    /**
     * @return {?}
     */
    fit() {
        /** @type {?} */
        let el;
        /** @type {?} */
        const w = this.width;
        /** @type {?} */
        const t = this.thickness;
        /** @type {?} */
        const h = this.height;
        /** @type {?} */
        const elements = {};
        /** @type {?} */
        const styleMeasure = (/**
         * @param {?} d
         * @return {?}
         */
        (d) => d + 'px');
        this.bed.nativeElement.style.width = styleMeasure(w);
        this.bed.nativeElement.style.height = styleMeasure(h);
        this.bed.nativeElement.style.top = styleMeasure(0);
        this.bed.nativeElement.style.left = styleMeasure(0);
        // I did not find a way to iterate over elements, so I am doing using
        // native DOM method.
        for (el = (/** @type {?} */ (this.bed.nativeElement.firstChild)); el !== null; el = (/** @type {?} */ (el.nextSibling))) {
            elements[el.id] = el;
        }
        ///////////////////////////////////////////////////////////////
        //  Set color
        //////////////////////////////////////////////////////////////
        for (const id of 'ABCDEFG') {
            elements[id].style.backgroundColor = 'transparent';
        }
        for (const id of '.:,') {
            elements[id].style.backgroundColor = this.color;
        }
        ///////////////////////////////////////////////////////////////
        ///  Set size
        ///////////////////////////////////////////////////////////////
        this.horizontalW = w - 2 * t;
        this.horizontalH = t;
        for (const id of 'ADG') // horizontal elements
         {
            el = elements[id];
            el.style.width = styleMeasure(w - 1.5 * t);
            el.style.height = styleMeasure(t);
        }
        this.verticalW = t;
        this.verticalH = 0.5 * h;
        for (const id of 'BCEF') // vertical elements
         {
            el = elements[id];
            el.style.width = styleMeasure(t);
            el.style.height = styleMeasure(0.5 * h);
        }
        elements['.'].style.width = styleMeasure(t);
        elements['.'].style.height = styleMeasure(t);
        elements[':'].style.width = styleMeasure(t);
        elements[':'].style.height = styleMeasure(t);
        elements[','].style.width = styleMeasure(0.5 * t);
        elements[','].style.height = styleMeasure(t);
        ///////////////////////////////////////////////////////////
        /// Set position
        ///////////////////////////////////////////////////////////
        // ** left
        // ADEFG all have left = 0;
        for (const id of 'ADEFG') {
            elements[id].style.left = styleMeasure(0);
        }
        // the segments on the right hand side (1)
        for (const id of 'BC') // vertical elements
         {
            elements[id].style.left = styleMeasure(w - 3 * t);
        }
        for (const id of '.:') {
            elements[id].style.left = styleMeasure(w - 1.5 * t);
        }
        elements[','].style.left = styleMeasure(w - t);
        // ** top
        for (const id of 'ABF') {
            elements[id].style.top = styleMeasure(0);
        }
        for (const id of 'CEG:') // segments of n
         {
            elements[id].style.top = styleMeasure(0.5 * h - t);
        }
        for (const id of 'D.') {
            elements[id].style.top = styleMeasure(h - 2 * t);
        }
        elements[','].style.top = styleMeasure(h - t);
    }
    /**
     * @param {?} s
     * @return {?}
     */
    recalc(s) {
        /** @type {?} */
        const o = s;
        for (const k in o) {
            o[k] = this.sanitizer.bypassSecurityTrustStyle(o[k]);
        }
        console.log(o);
        return o;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SevenSegCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-seven-seg-cell',
                template: "<div #bed class=\"bed\">\n  <div class=\"seg horizontal\" id=\"A\" [class.on]=\"segState['A']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"B\" [class.on]=\"segState['B']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"C\" [class.on]=\"segState['C']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"D\" [class.on]=\"segState['D']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"E\" [class.on]=\"segState['E']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"F\" [class.on]=\"segState['F']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"G\" [class.on]=\"segState['G']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg dot\" id=\".\" [class.on]=\"segState['.']\"></div>\n  <div class=\"seg colon\" id=\":\" [class.on]=\"segState[':']\"></div>\n  <div class=\"seg comma\" id=\",\" [class.on]=\"segState[',']\"></div>\n</div>\n",
                styles: ["div.bed{position:relative;display:inline-block;text-align:left;top:0;left:0;width:30px;height:40px}div.seg{position:absolute;display:block;background-color:#800;visibility:hidden}div.horizontal{width:20px;height:6px;left:0}div.vertical{width:6px;height:20px}div#A{top:0;left:0}div#B{left:14px;top:0}div#C{left:14px;top:14px}div#E,div#G{left:0;top:14px}div#D{left:0;top:28px}div#F{left:0;top:0}div.dot{top:28px;left:21.5px;width:6px;height:6px}div.colon{top:14px;left:21.5px;width:6px;height:6px}div.comma{top:34px;left:24px;width:3px;height:6px}div.on{visibility:visible}"]
            }] }
];
/** @nocollapse */
SevenSegCellComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
SevenSegCellComponent.propDecorators = {
    digit: [{ type: Input, args: ['digit',] }],
    color: [{ type: Input, args: ['color',] }],
    spacing: [{ type: Input, args: ['spacing',] }],
    thickness: [{ type: Input, args: ['thickness',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    bed: [{ type: ViewChild, args: ['bed',] }]
};
if (false) {
    /** @type {?} */
    SevenSegCellComponent.prototype.horizontalH;
    /** @type {?} */
    SevenSegCellComponent.prototype.horizontalW;
    /** @type {?} */
    SevenSegCellComponent.prototype.verticalW;
    /** @type {?} */
    SevenSegCellComponent.prototype.verticalH;
    /** @type {?} */
    SevenSegCellComponent.prototype.segState;
    /** @type {?} */
    SevenSegCellComponent.prototype._digit;
    /** @type {?} */
    SevenSegCellComponent.prototype.color;
    /** @type {?} */
    SevenSegCellComponent.prototype.spacing;
    /** @type {?} */
    SevenSegCellComponent.prototype.thickness;
    /** @type {?} */
    SevenSegCellComponent.prototype.width;
    /** @type {?} */
    SevenSegCellComponent.prototype.height;
    /** @type {?} */
    SevenSegCellComponent.prototype.bed;
    /**
     * @type {?}
     * @private
     */
    SevenSegCellComponent.prototype.segments;
    /**
     * @type {?}
     * @private
     */
    SevenSegCellComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2V2ZW4tc2VnLyIsInNvdXJjZXMiOlsibGliL2NlbGwvc2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW9DLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBU3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUErSmhDLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFySjNDLFdBQU0sR0FBRyxFQUFFLENBQUM7Ozs7O1FBa0NJLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDZCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQW9HckIsYUFBUSxHQUFHLG9CQUFvQixDQUFDO1FBWXRDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxD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S0FBSyxTQUFDLFFBQVE7a0JBR2QsU0FBUyxTQUFDLEtBQUs7Ozs7SUE5Q2hCLDRDQUFvQjs7SUFDcEIsNENBQW9COztJQUNwQiwwQ0FBa0I7O0lBQ2xCLDBDQUFrQjs7SUFDbEIseUNBQXNDOztJQUN0Qyx1Q0FBWTs7SUFrQ1osc0NBQWdDOztJQUNoQyx3Q0FBOEI7O0lBQzlCLDBDQUFrQzs7SUFDbEMsc0NBQTJCOztJQUMzQix1Q0FBNkI7O0lBRzdCLG9DQUFrRDs7Ozs7SUFpR2xELHlDQUF3Qzs7Ozs7SUFXNUIsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7U1RBTkRBUkRfU0VHX01BUFBJTkd9IGZyb20gJy4uL3NlZy1tYXBwaW5nJztcblxuLy8gaW1wb3J0IHtzYW5pdGl6ZVN0eWxlfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9zYW5pdGl6YXRpb24vc2FuaXRpemF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNldmVuLXNlZy1jZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldmVuLXNlZy1jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNldmVuU2VnQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLyogVGhpcyBwcm9wZXJ0eSBzZXR0ZXIgaW50ZXJjZXB0IGNoYW5nZXMgaW50IGRpZ2l0LXN0YXRlIGlucHV0LFxuICAgICBhbmQgYnVpbGQgYSBkaWN0aW9uYXJ5IHdpdGggYSBsb2dpY2FsIG1hc2sgdGhhdCBzcGVjaWZ5XG4gICAgIHdoYXQgc2VnbWVudHMgYXJlIHZpc2libGUuXG4gKi9cbiAgaG9yaXpvbnRhbEg6IG51bWJlcjtcbiAgaG9yaXpvbnRhbFc6IG51bWJlcjtcbiAgdmVydGljYWxXOiBudW1iZXI7XG4gIHZlcnRpY2FsSDogbnVtYmVyO1xuICBzZWdTdGF0ZTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuOyB9O1xuICBfZGlnaXQgPSAnJztcbiAgQElucHV0KCdkaWdpdCcpIHNldCBkaWdpdChkaWdpdDogc3RyaW5nKSB7XG4gICAgY29uc3QgcyA9IHt9O1xuICAgIHRoaXMuX2RpZ2l0ID0gZGlnaXQ7XG4gICAgZm9yIChjb25zdCBrIG9mICdBQkNERUZHLiw6Jykge1xuICAgICAgc1trXSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgc3BlY2lmeSBhbnkgY3VzdG9tIGNoYXJhY3RlciB1c2luZyBhIHNpbnRheCBzaW1pbGFyIHRvXG4gICAgLy8gZW50aXRpZXMsICYuKjsgdGhlIGNoYXJhY3RlciB3aWxsIGJlIHRoZSBjb21iaW5hdGlvbiBvZiBhbGwgdGhlIHNlZ21lbnRzXG4gICAgLy8gd2hvc2UgaWRlbnRpZmllciBpcyBwcmVzZW50IGluIHRoZSBlbnRpdHkuXG4gICAgaWYgKHRoaXMuZGlnaXRbMF0gPT09ICcmJykge1xuICAgICAgZm9yIChjb25zdCBrIG9mIHRoaXMuX2RpZ2l0KSB7XG4gICAgICAgIGlmIChrICE9PSAnOycgJiYgayAhPT0gJyYnKSB7XG4gICAgICAgICAgc1trXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBkIG9mIHRoaXMuX2RpZ2l0KSB7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB0aGlzLnNlZ21lbnRzW2RdKSB7XG4gICAgICAgICAgc1trXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWdTdGF0ZSA9IHM7XG4gIH1cblxuICBnZXQgZGlnaXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlnaXQ7XG4gIH1cblxuICAvLyBTdHlsZSBhbmQgZGltZW5zaW9ucyBhcmUgbm90IHN1cHBvc2VkIHRvIGNoYW5nZSBhbGwgdGhlIHRpbWVcbiAgLy8gYW5kIHdoZW4gdGhleSBjaGFuZ2UgdGhlcmUgYXJlIGEgbG90IG9mIHByb3BlcnRpZXMgb2YgdGhlIGh0bWxcbiAgLy8gZWxlbWVudHMgdGhhdCB3aWxsIGNoYW5nZSwgdGh1cyBpbnN0ZWFkIG9mIHdyaXRpbmcgc2V0dGVycyBhbmRcbiAgLy8gZ2V0dGVycyBhIGdsb2JhbCBpbnB1dCBjaGFuZ2UgY2FsbGJhY2sgd2lsbCBiZSBpc3N1ZWQuXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgnc3BhY2luZycpIHNwYWNpbmcgPSAwO1xuICBASW5wdXQoJ3RoaWNrbmVzcycpIHRoaWNrbmVzcyA9IDY7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aCA9IDMwO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodCA9IDM0O1xuXG4gIC8vIGdhdGhlciBhbGwgdGhlXG4gIEBWaWV3Q2hpbGQoJ2JlZCcpIGJlZDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZml0KCk7XG4gIH1cblxuICBmaXQoKTogdm9pZCB7XG4gICAgbGV0IGVsOiBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCB3ID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCB0ID0gdGhpcy50aGlja25lc3M7XG4gICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IGVsZW1lbnRzID0ge307XG4gICAgY29uc3Qgc3R5bGVNZWFzdXJlID0gKGQ6IG51bWJlcik6IHN0cmluZyA9PiBkICsgJ3B4JztcblxuICAgIHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBzdHlsZU1lYXN1cmUodyk7XG4gICAgdGhpcy5iZWQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzdHlsZU1lYXN1cmUoaCk7XG4gICAgdGhpcy5iZWQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoMCk7XG4gICAgdGhpcy5iZWQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKDApO1xuXG4gICAgLy8gSSBkaWQgbm90IGZpbmQgYSB3YXkgdG8gaXRlcmF0ZSBvdmVyIGVsZW1lbnRzLCBzbyBJIGFtIGRvaW5nIHVzaW5nXG4gICAgLy8gbmF0aXZlIERPTSBtZXRob2QuXG4gICAgZm9yIChlbCA9IHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgIGVsICE9PSBudWxsOyBlbCA9IGVsLm5leHRTaWJsaW5nIGFzIEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICBlbGVtZW50c1tlbC5pZF0gPSBlbDtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAgU2V0IGNvbG9yXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBmb3IgKGNvbnN0IGlkIG9mICdBQkNERUZHJykge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgJy46LCcpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9yO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLyAgU2V0IHNpemVcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB0aGlzLmhvcml6b250YWxXID0gdyAtIDIgKiB0O1xuICAgIHRoaXMuaG9yaXpvbnRhbEggPSB0O1xuICAgIGZvciAoY29uc3QgaWQgb2YgJ0FERycpIC8vIGhvcml6b250YWwgZWxlbWVudHNcbiAgICB7XG4gICAgICBlbCA9IGVsZW1lbnRzW2lkXTtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHcgLSAxLjUgKiB0KTtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHN0eWxlTWVhc3VyZSh0KTtcbiAgICB9XG4gICAgdGhpcy52ZXJ0aWNhbFcgPSB0O1xuICAgIHRoaXMudmVydGljYWxIID0gMC41ICogaDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdCQ0VGJykgLy8gdmVydGljYWwgZWxlbWVudHNcbiAgICB7XG4gICAgICBlbCA9IGVsZW1lbnRzW2lkXTtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKDAuNSAqIGgpO1xuICAgIH1cbiAgICBlbGVtZW50c1snLiddLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgIGVsZW1lbnRzWycuJ10uc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgIGVsZW1lbnRzWyc6J10uc3R5bGUud2lkdGggPSBzdHlsZU1lYXN1cmUodCk7XG4gICAgZWxlbWVudHNbJzonXS5zdHlsZS5oZWlnaHQgPSBzdHlsZU1lYXN1cmUodCk7XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS53aWR0aCA9IHN0eWxlTWVhc3VyZSgwLjUgKiB0KTtcbiAgICBlbGVtZW50c1snLCddLnN0eWxlLmhlaWdodCA9IHN0eWxlTWVhc3VyZSh0KTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vIFNldCBwb3NpdGlvblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyAqKiBsZWZ0XG5cbiAgICAvLyBBREVGRyBhbGwgaGF2ZSBsZWZ0ID0gMDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdBREVGRycpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKDApO1xuICAgIH1cbiAgICAvLyB0aGUgc2VnbWVudHMgb24gdGhlIHJpZ2h0IGhhbmQgc2lkZSAoMSlcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdCQycpIC8vIHZlcnRpY2FsIGVsZW1lbnRzXG4gICAge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLmxlZnQgPSBzdHlsZU1lYXN1cmUodyAtIDMgKiB0KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBvZiAnLjonKSB7XG4gICAgICBlbGVtZW50c1tpZF0uc3R5bGUubGVmdCA9IHN0eWxlTWVhc3VyZSh3IC0gMS41ICogdCk7XG4gICAgfVxuICAgIGVsZW1lbnRzWycsJ10uc3R5bGUubGVmdCA9IHN0eWxlTWVhc3VyZSh3IC0gdCk7XG5cbiAgICAvLyAqKiB0b3BcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdBQkYnKSB7XG4gICAgICBlbGVtZW50c1tpZF0uc3R5bGUudG9wID0gc3R5bGVNZWFzdXJlKDApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mICdDRUc6JykgLy8gc2VnbWVudHMgb2YgblxuICAgIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoMC41ICogaCAtIHQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mICdELicpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoaCAtIDIgKiB0KTtcbiAgICB9XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoaCAtIHQpO1xuICB9XG5cblxuICBwcml2YXRlIHNlZ21lbnRzID0gU1RBTkRBUkRfU0VHX01BUFBJTkc7XG5cbiAgcmVjYWxjKHM6IG9iamVjdCk6IG9iamVjdCB7XG4gICAgY29uc3QgbyA9IHM7XG4gICAgZm9yIChjb25zdCBrIGluIG8pIHtcbiAgICAgIG9ba10gPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUob1trXSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG8pO1xuICAgIHJldHVybiBvO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLnNlZ21lbnRzKSB7XG4gICAgICBpZiAoIXRoaXMuc2VnbWVudHNbay50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzW2sudG9Mb3dlckNhc2UoKV0gPSB0aGlzLnNlZ21lbnRzW2tdO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNlZ21lbnRzW2sudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy5zZWdtZW50c1trLnRvVXBwZXJDYXNlKCldID0gdGhpcy5zZWdtZW50c1trXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19