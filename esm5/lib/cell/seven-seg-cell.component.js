/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { STANDARD_SEG_MAPPING } from '../seg-mapping';
// import {sanitizeStyle} from '@angular/core/src/sanitization/sanitization';
var SevenSegCellComponent = /** @class */ (function () {
    function SevenSegCellComponent(sanitizer) {
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
        for (var k in this.segments) {
            if (!this.segments[k.toLowerCase()]) {
                this.segments[k.toLowerCase()] = this.segments[k];
            }
            if (!this.segments[k.toUpperCase()]) {
                this.segments[k.toUpperCase()] = this.segments[k];
            }
        }
    }
    Object.defineProperty(SevenSegCellComponent.prototype, "digit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._digit;
        },
        set: /**
         * @param {?} digit
         * @return {?}
         */
        function (digit) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
            /** @type {?} */
            var s = {};
            this._digit = digit;
            try {
                for (var _e = tslib_1.__values('ABCDEFG.,:'), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var k = _f.value;
                    s[k] = false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // the user may specify any custom character using a sintax similar to
            // entities, &.*; the character will be the combination of all the segments
            // whose identifier is present in the entity.
            if (this.digit[0] === '&') {
                try {
                    for (var _g = tslib_1.__values(this._digit), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var k = _h.value;
                        if (k !== ';' && k !== '&') {
                            s[k] = true;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                try {
                    for (var _j = tslib_1.__values(this._digit), _k = _j.next(); !_k.done; _k = _j.next()) {
                        var d = _k.value;
                        try {
                            for (var _l = tslib_1.__values(this.segments[d]), _m = _l.next(); !_m.done; _m = _l.next()) {
                                var k = _m.value;
                                s[k] = true;
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            this.segState = s;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    SevenSegCellComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.fit();
    };
    /**
     * @return {?}
     */
    SevenSegCellComponent.prototype.fit = /**
     * @return {?}
     */
    function () {
        var e_5, _a, e_6, _b, e_7, _c, e_8, _d, e_9, _e, e_10, _f, e_11, _g, e_12, _h, e_13, _j, e_14, _k;
        /** @type {?} */
        var el;
        /** @type {?} */
        var w = this.width;
        /** @type {?} */
        var t = this.thickness;
        /** @type {?} */
        var h = this.height;
        /** @type {?} */
        var elements = {};
        /** @type {?} */
        var styleMeasure = (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d + 'px'; });
        this.bed.nativeElement.style.width = styleMeasure(w);
        this.bed.nativeElement.style.height = styleMeasure(h);
        this.bed.nativeElement.style.top = styleMeasure(0);
        this.bed.nativeElement.style.left = styleMeasure(0);
        // I did not find a way to iterate over elements, so I am doing using
        // native DOM method.
        for (el = (/** @type {?} */ (this.bed.nativeElement.firstChild)); el !== null; el = (/** @type {?} */ (el.nextSibling))) {
            elements[el.id] = el;
        }
        try {
            ///////////////////////////////////////////////////////////////
            //  Set color
            //////////////////////////////////////////////////////////////
            for (var _l = tslib_1.__values('ABCDEFG'), _m = _l.next(); !_m.done; _m = _l.next()) {
                var id = _m.value;
                elements[id].style.backgroundColor = 'transparent';
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_a = _l.return)) _a.call(_l);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var _o = tslib_1.__values('.:,'), _p = _o.next(); !_p.done; _p = _o.next()) {
                var id = _p.value;
                elements[id].style.backgroundColor = this.color;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_p && !_p.done && (_b = _o.return)) _b.call(_o);
            }
            finally { if (e_6) throw e_6.error; }
        }
        ///////////////////////////////////////////////////////////////
        ///  Set size
        ///////////////////////////////////////////////////////////////
        this.horizontalW = w - 2 * t;
        this.horizontalH = t;
        try {
            for (var _q = tslib_1.__values('ADG'), _r = _q.next(); !_r.done; _r = _q.next()) {
                var id = _r.value;
                el = elements[id];
                el.style.width = styleMeasure(w - 1.5 * t);
                el.style.height = styleMeasure(t);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_r && !_r.done && (_c = _q.return)) _c.call(_q);
            }
            finally { if (e_7) throw e_7.error; }
        }
        this.verticalW = t;
        this.verticalH = 0.5 * h;
        try {
            for (var _s = tslib_1.__values('BCEF'), _t = _s.next(); !_t.done; _t = _s.next()) {
                var id = _t.value;
                el = elements[id];
                el.style.width = styleMeasure(t);
                el.style.height = styleMeasure(0.5 * h);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_t && !_t.done && (_d = _s.return)) _d.call(_s);
            }
            finally { if (e_8) throw e_8.error; }
        }
        elements['.'].style.width = styleMeasure(t);
        elements['.'].style.height = styleMeasure(t);
        elements[':'].style.width = styleMeasure(t);
        elements[':'].style.height = styleMeasure(t);
        elements[','].style.width = styleMeasure(0.5 * t);
        elements[','].style.height = styleMeasure(t);
        try {
            ///////////////////////////////////////////////////////////
            /// Set position
            ///////////////////////////////////////////////////////////
            // ** left
            // ADEFG all have left = 0;
            for (var _u = tslib_1.__values('ADEFG'), _v = _u.next(); !_v.done; _v = _u.next()) {
                var id = _v.value;
                elements[id].style.left = styleMeasure(0);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_v && !_v.done && (_e = _u.return)) _e.call(_u);
            }
            finally { if (e_9) throw e_9.error; }
        }
        try {
            // the segments on the right hand side (1)
            for (var _w = tslib_1.__values('BC'), _x = _w.next(); !_x.done; _x = _w.next()) {
                var id = _x.value;
                elements[id].style.left = styleMeasure(w - 3 * t);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_x && !_x.done && (_f = _w.return)) _f.call(_w);
            }
            finally { if (e_10) throw e_10.error; }
        }
        try {
            for (var _y = tslib_1.__values('.:'), _z = _y.next(); !_z.done; _z = _y.next()) {
                var id = _z.value;
                elements[id].style.left = styleMeasure(w - 1.5 * t);
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_z && !_z.done && (_g = _y.return)) _g.call(_y);
            }
            finally { if (e_11) throw e_11.error; }
        }
        elements[','].style.left = styleMeasure(w - t);
        try {
            // ** top
            for (var _0 = tslib_1.__values('ABF'), _1 = _0.next(); !_1.done; _1 = _0.next()) {
                var id = _1.value;
                elements[id].style.top = styleMeasure(0);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_1 && !_1.done && (_h = _0.return)) _h.call(_0);
            }
            finally { if (e_12) throw e_12.error; }
        }
        try {
            for (var _2 = tslib_1.__values('CEG:'), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var id = _3.value;
                elements[id].style.top = styleMeasure(0.5 * h - t);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_j = _2.return)) _j.call(_2);
            }
            finally { if (e_13) throw e_13.error; }
        }
        try {
            for (var _4 = tslib_1.__values('D.'), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var id = _5.value;
                elements[id].style.top = styleMeasure(h - 2 * t);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_k = _4.return)) _k.call(_4);
            }
            finally { if (e_14) throw e_14.error; }
        }
        elements[','].style.top = styleMeasure(h - t);
    };
    /**
     * @param {?} s
     * @return {?}
     */
    SevenSegCellComponent.prototype.recalc = /**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        /** @type {?} */
        var o = s;
        for (var k in o) {
            o[k] = this.sanitizer.bypassSecurityTrustStyle(o[k]);
        }
        console.log(o);
        return o;
    };
    /**
     * @return {?}
     */
    SevenSegCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SevenSegCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-seven-seg-cell',
                    template: "<div #bed class=\"bed\">\n  <div class=\"seg horizontal\" id=\"A\" [class.on]=\"segState['A']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"B\" [class.on]=\"segState['B']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"C\" [class.on]=\"segState['C']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"D\" [class.on]=\"segState['D']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"E\" [class.on]=\"segState['E']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"F\" [class.on]=\"segState['F']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"G\" [class.on]=\"segState['G']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg dot\" id=\".\" [class.on]=\"segState['.']\"></div>\n  <div class=\"seg colon\" id=\":\" [class.on]=\"segState[':']\"></div>\n  <div class=\"seg comma\" id=\",\" [class.on]=\"segState[',']\"></div>\n</div>\n",
                    styles: ["div.bed{position:relative;display:inline-block;text-align:left;top:0;left:0;width:30px;height:40px}div.seg{position:absolute;display:block;background-color:#800;visibility:hidden}div.horizontal{width:20px;height:6px;left:0}div.vertical{width:6px;height:20px}div#A{top:0;left:0}div#B{left:14px;top:0}div#C{left:14px;top:14px}div#E,div#G{left:0;top:14px}div#D{left:0;top:28px}div#F{left:0;top:0}div.dot{top:28px;left:21.5px;width:6px;height:6px}div.colon{top:14px;left:21.5px;width:6px;height:6px}div.comma{top:34px;left:24px;width:3px;height:6px}div.on{visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    SevenSegCellComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SevenSegCellComponent.propDecorators = {
        digit: [{ type: Input, args: ['digit',] }],
        color: [{ type: Input, args: ['color',] }],
        spacing: [{ type: Input, args: ['spacing',] }],
        thickness: [{ type: Input, args: ['thickness',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        bed: [{ type: ViewChild, args: ['bed',] }]
    };
    return SevenSegCellComponent;
}());
export { SevenSegCellComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2V2ZW4tc2VnLyIsInNvdXJjZXMiOlsibGliL2NlbGwvc2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztBQUlwRDtJQW9LRSwrQkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXJKM0MsV0FBTSxHQUFHLEVBQUUsQ0FBQzs7Ozs7UUFrQ0ksVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNkLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDVixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBb0dyQixhQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFZdEMsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMs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MENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7U1RBTkRBUkRfU0VHX01BUFBJTkd9IGZyb20gJy4uL3NlZy1tYXBwaW5nJztcblxuLy8gaW1wb3J0IHtzYW5pdGl6ZVN0eWxlfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9zYW5pdGl6YXRpb24vc2FuaXRpemF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNldmVuLXNlZy1jZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldmVuLXNlZy1jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNldmVuU2VnQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLyogVGhpcyBwcm9wZXJ0eSBzZXR0ZXIgaW50ZXJjZXB0IGNoYW5nZXMgaW50IGRpZ2l0LXN0YXRlIGlucHV0LFxuICAgICBhbmQgYnVpbGQgYSBkaWN0aW9uYXJ5IHdpdGggYSBsb2dpY2FsIG1hc2sgdGhhdCBzcGVjaWZ5XG4gICAgIHdoYXQgc2VnbWVudHMgYXJlIHZpc2libGUuXG4gKi9cbiAgaG9yaXpvbnRhbEg6IG51bWJlcjtcbiAgaG9yaXpvbnRhbFc6IG51bWJlcjtcbiAgdmVydGljYWxXOiBudW1iZXI7XG4gIHZlcnRpY2FsSDogbnVtYmVyO1xuICBzZWdTdGF0ZTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuOyB9O1xuICBfZGlnaXQgPSAnJztcbiAgQElucHV0KCdkaWdpdCcpIHNldCBkaWdpdChkaWdpdDogc3RyaW5nKSB7XG4gICAgY29uc3QgcyA9IHt9O1xuICAgIHRoaXMuX2RpZ2l0ID0gZGlnaXQ7XG4gICAgZm9yIChjb25zdCBrIG9mICdBQkNERUZHLiw6Jykge1xuICAgICAgc1trXSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgc3BlY2lmeSBhbnkgY3VzdG9tIGNoYXJhY3RlciB1c2luZyBhIHNpbnRheCBzaW1pbGFyIHRvXG4gICAgLy8gZW50aXRpZXMsICYuKjsgdGhlIGNoYXJhY3RlciB3aWxsIGJlIHRoZSBjb21iaW5hdGlvbiBvZiBhbGwgdGhlIHNlZ21lbnRzXG4gICAgLy8gd2hvc2UgaWRlbnRpZmllciBpcyBwcmVzZW50IGluIHRoZSBlbnRpdHkuXG4gICAgaWYgKHRoaXMuZGlnaXRbMF0gPT09ICcmJykge1xuICAgICAgZm9yIChjb25zdCBrIG9mIHRoaXMuX2RpZ2l0KSB7XG4gICAgICAgIGlmIChrICE9PSAnOycgJiYgayAhPT0gJyYnKSB7XG4gICAgICAgICAgc1trXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBkIG9mIHRoaXMuX2RpZ2l0KSB7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB0aGlzLnNlZ21lbnRzW2RdKSB7XG4gICAgICAgICAgc1trXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWdTdGF0ZSA9IHM7XG4gIH1cblxuICBnZXQgZGlnaXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlnaXQ7XG4gIH1cblxuICAvLyBTdHlsZSBhbmQgZGltZW5zaW9ucyBhcmUgbm90IHN1cHBvc2VkIHRvIGNoYW5nZSBhbGwgdGhlIHRpbWVcbiAgLy8gYW5kIHdoZW4gdGhleSBjaGFuZ2UgdGhlcmUgYXJlIGEgbG90IG9mIHByb3BlcnRpZXMgb2YgdGhlIGh0bWxcbiAgLy8gZWxlbWVudHMgdGhhdCB3aWxsIGNoYW5nZSwgdGh1cyBpbnN0ZWFkIG9mIHdyaXRpbmcgc2V0dGVycyBhbmRcbiAgLy8gZ2V0dGVycyBhIGdsb2JhbCBpbnB1dCBjaGFuZ2UgY2FsbGJhY2sgd2lsbCBiZSBpc3N1ZWQuXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgnc3BhY2luZycpIHNwYWNpbmcgPSAwO1xuICBASW5wdXQoJ3RoaWNrbmVzcycpIHRoaWNrbmVzcyA9IDY7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aCA9IDMwO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodCA9IDM0O1xuXG4gIC8vIGdhdGhlciBhbGwgdGhlXG4gIEBWaWV3Q2hpbGQoJ2JlZCcpIGJlZDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZml0KCk7XG4gIH1cblxuICBmaXQoKTogdm9pZCB7XG4gICAgbGV0IGVsOiBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCB3ID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCB0ID0gdGhpcy50aGlja25lc3M7XG4gICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IGVsZW1lbnRzID0ge307XG4gICAgY29uc3Qgc3R5bGVNZWFzdXJlID0gKGQ6IG51bWJlcik6IHN0cmluZyA9PiBkICsgJ3B4JztcblxuICAgIHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBzdHlsZU1lYXN1cmUodyk7XG4gICAgdGhpcy5iZWQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzdHlsZU1lYXN1cmUoaCk7XG4gICAgdGhpcy5iZWQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoMCk7XG4gICAgdGhpcy5iZWQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKDApO1xuXG4gICAgLy8gSSBkaWQgbm90IGZpbmQgYSB3YXkgdG8gaXRlcmF0ZSBvdmVyIGVsZW1lbnRzLCBzbyBJIGFtIGRvaW5nIHVzaW5nXG4gICAgLy8gbmF0aXZlIERPTSBtZXRob2QuXG4gICAgZm9yIChlbCA9IHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgIGVsICE9PSBudWxsOyBlbCA9IGVsLm5leHRTaWJsaW5nIGFzIEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICBlbGVtZW50c1tlbC5pZF0gPSBlbDtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAgU2V0IGNvbG9yXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBmb3IgKGNvbnN0IGlkIG9mICdBQkNERUZHJykge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgJy46LCcpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9yO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLyAgU2V0IHNpemVcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB0aGlzLmhvcml6b250YWxXID0gdyAtIDIgKiB0O1xuICAgIHRoaXMuaG9yaXpvbnRhbEggPSB0O1xuICAgIGZvciAoY29uc3QgaWQgb2YgJ0FERycpIC8vIGhvcml6b250YWwgZWxlbWVudHNcbiAgICB7XG4gICAgICBlbCA9IGVsZW1lbnRzW2lkXTtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHcgLSAxLjUgKiB0KTtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHN0eWxlTWVhc3VyZSh0KTtcbiAgICB9XG4gICAgdGhpcy52ZXJ0aWNhbFcgPSB0O1xuICAgIHRoaXMudmVydGljYWxIID0gMC41ICogaDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdCQ0VGJykgLy8gdmVydGljYWwgZWxlbWVudHNcbiAgICB7XG4gICAgICBlbCA9IGVsZW1lbnRzW2lkXTtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKDAuNSAqIGgpO1xuICAgIH1cbiAgICBlbGVtZW50c1snLiddLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgIGVsZW1lbnRzWycuJ10uc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgIGVsZW1lbnRzWyc6J10uc3R5bGUud2lkdGggPSBzdHlsZU1lYXN1cmUodCk7XG4gICAgZWxlbWVudHNbJzonXS5zdHlsZS5oZWlnaHQgPSBzdHlsZU1lYXN1cmUodCk7XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS53aWR0aCA9IHN0eWxlTWVhc3VyZSgwLjUgKiB0KTtcbiAgICBlbGVtZW50c1snLCddLnN0eWxlLmhlaWdodCA9IHN0eWxlTWVhc3VyZSh0KTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vIFNldCBwb3NpdGlvblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyAqKiBsZWZ0XG5cbiAgICAvLyBBREVGRyBhbGwgaGF2ZSBsZWZ0ID0gMDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdBREVGRycpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKDApO1xuICAgIH1cbiAgICAvLyB0aGUgc2VnbWVudHMgb24gdGhlIHJpZ2h0IGhhbmQgc2lkZSAoMSlcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdCQycpIC8vIHZlcnRpY2FsIGVsZW1lbnRzXG4gICAge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLmxlZnQgPSBzdHlsZU1lYXN1cmUodyAtIDMgKiB0KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBvZiAnLjonKSB7XG4gICAgICBlbGVtZW50c1tpZF0uc3R5bGUubGVmdCA9IHN0eWxlTWVhc3VyZSh3IC0gMS41ICogdCk7XG4gICAgfVxuICAgIGVsZW1lbnRzWycsJ10uc3R5bGUubGVmdCA9IHN0eWxlTWVhc3VyZSh3IC0gdCk7XG5cbiAgICAvLyAqKiB0b3BcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdBQkYnKSB7XG4gICAgICBlbGVtZW50c1tpZF0uc3R5bGUudG9wID0gc3R5bGVNZWFzdXJlKDApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mICdDRUc6JykgLy8gc2VnbWVudHMgb2YgblxuICAgIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoMC41ICogaCAtIHQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mICdELicpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoaCAtIDIgKiB0KTtcbiAgICB9XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoaCAtIHQpO1xuICB9XG5cblxuICBwcml2YXRlIHNlZ21lbnRzID0gU1RBTkRBUkRfU0VHX01BUFBJTkc7XG5cbiAgcmVjYWxjKHM6IG9iamVjdCk6IG9iamVjdCB7XG4gICAgY29uc3QgbyA9IHM7XG4gICAgZm9yIChjb25zdCBrIGluIG8pIHtcbiAgICAgIG9ba10gPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUob1trXSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG8pO1xuICAgIHJldHVybiBvO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLnNlZ21lbnRzKSB7XG4gICAgICBpZiAoIXRoaXMuc2VnbWVudHNbay50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzW2sudG9Mb3dlckNhc2UoKV0gPSB0aGlzLnNlZ21lbnRzW2tdO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNlZ21lbnRzW2sudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy5zZWdtZW50c1trLnRvVXBwZXJDYXNlKCldID0gdGhpcy5zZWdtZW50c1trXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19