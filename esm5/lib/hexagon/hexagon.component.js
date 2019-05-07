/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var HexagonComponent = /** @class */ (function () {
    function HexagonComponent() {
        this.color = 'black';
    }
    Object.defineProperty(HexagonComponent.prototype, "spacing", {
        get: /**
         * @return {?}
         */
        function () {
            return this.s;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.s = value;
            this.fit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HexagonComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this.w;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.w = value;
            this.fit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HexagonComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this.h;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.h = value;
            this.fit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HexagonComponent.prototype.fit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var w = this.width;
        /** @type {?} */
        var h = this.height;
        /** @type {?} */
        var s = this.spacing * Math.sqrt(2);
        /** @type {?} */
        var sw;
        /** @type {?} */
        var sh;
        /** @type {?} */
        var x0;
        /** @type {?} */
        var y0;
        /** @type {?} */
        var x1;
        /** @type {?} */
        var y1;
        /** @type {?} */
        var t;
        if (w < h) { // vertical
            t = w / 2;
            x0 = -t;
            x1 = t;
            y0 = t + s / 2;
            y1 = t + s / 2;
            sw = 0;
            sh = h - 4 * t - s;
        }
        else { // horizontal
            t = h / 2;
            x0 = t + s / 2;
            x1 = t + s / 2;
            y0 = -t;
            y1 = t;
            sw = w - 4 * t - s;
            sh = 0;
        }
        this.t = t;
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
        this.sw = sw;
        this.sh = sh;
        console.log({ w: w, h: h, t: t, s: s });
    };
    /**
     * @return {?}
     */
    HexagonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.fit();
    };
    HexagonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-hexagon',
                    template: "<div [style.borderColor]=\"color\" class=\"box\"\n     [ngStyle]=\"{width: w + 'px', height: h + 'px'}\">\n  <div #s0 [style.top.px]=\"y0\" [style.left.px]=\"x0\"\n       class='vis' [class.vertical0]=\"(w < h)\" [class.horizontal0]=\"(w > h)\"\n       [ngStyle]=\"{top: (y0)+'px', left: (x0)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n  <div [style.top.px]=\"y1\" [style.left.px]=\"x1\"\n       class='vis' [class.vertical1]=\"(w < h)\" [class.horizontal1]=\"(w > h)\"\n       [ngStyle]=\"{top: (y1)+'px', left: (x1)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n</div>\n",
                    styles: ["div.vis{border-style:solid;border-color:transparent;position:absolute}div.vertical0{left:-50%;border-right-color:inherit}div.vertical1{left:50%;border-left-color:inherit}div.horizontal0{top:-50%;border-bottom-color:inherit}div.horizontal1{top:50%;border-top-color:inherit}div.box{position:relative;display:inline-block;top:0;left:0;overflow:unset;vertical-align:top}"]
                }] }
    ];
    /** @nocollapse */
    HexagonComponent.ctorParameters = function () { return []; };
    HexagonComponent.propDecorators = {
        color: [{ type: Input, args: ['color',] }],
        spacing: [{ type: Input, args: ['spacing',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }]
    };
    return HexagonComponent;
}());
export { HexagonComponent };
if (false) {
    /** @type {?} */
    HexagonComponent.prototype.color;
    /** @type {?} */
    HexagonComponent.prototype.h;
    /** @type {?} */
    HexagonComponent.prototype.w;
    /** @type {?} */
    HexagonComponent.prototype.s;
    /** @type {?} */
    HexagonComponent.prototype.t;
    /** @type {?} */
    HexagonComponent.prototype.sw;
    /** @type {?} */
    HexagonComponent.prototype.sh;
    /** @type {?} */
    HexagonComponent.prototype.x0;
    /** @type {?} */
    HexagonComponent.prototype.y0;
    /** @type {?} */
    HexagonComponent.prototype.x1;
    /** @type {?} */
    HexagonComponent.prototype.y1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4YWdvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXZlbi1zZWcvIiwic291cmNlcyI6WyJsaWIvaGV4YWdvbi9oZXhhZ29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFvRkU7UUE5RWdCLFVBQUssR0FBRyxPQUFPLENBQUM7SUErRWhDLENBQUM7SUE3RUQsc0JBQXNCLHFDQUFPOzs7O1FBSzdCO1lBQ0UsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7Ozs7O1FBUEQsVUFBOEIsS0FBYTtZQUN6QyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBTUQsc0JBQW9CLG1DQUFLOzs7O1FBS3pCO1lBQ0UsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7Ozs7O1FBUEQsVUFBMEIsS0FBYTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBTUQsc0JBQXFCLG9DQUFNOzs7O1FBSzNCO1lBQ0UsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7Ozs7O1FBUEQsVUFBNEIsS0FBYTtZQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLENBQUM7OztPQUFBOzs7O0lBaUJELDhCQUFHOzs7SUFBSDs7WUFDUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNOztZQUNmLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUNqQyxFQUFVOztZQUNWLEVBQVU7O1lBQ1YsRUFBVTs7WUFDVixFQUFVOztZQUNWLEVBQVU7O1lBQ1YsRUFBVTs7WUFDVixDQUFTO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsV0FBVztZQUN0QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1AsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjthQUFNLEVBQUUsYUFBYTtZQUNwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDUjtRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFLRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDOztnQkF6RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwycEJBQXVDOztpQkFFeEM7Ozs7O3dCQUVFLEtBQUssU0FBQyxPQUFPOzBCQUViLEtBQUssU0FBQyxTQUFTO3dCQVNmLEtBQUssU0FBQyxPQUFPO3lCQVNiLEtBQUssU0FBQyxRQUFROztJQWlFakIsdUJBQUM7Q0FBQSxBQTNGRCxJQTJGQztTQXRGWSxnQkFBZ0I7OztJQUMzQixpQ0FBZ0M7O0lBNkJoQyw2QkFBVTs7SUFDViw2QkFBVTs7SUFDViw2QkFBVTs7SUFDViw2QkFBVTs7SUFDViw4QkFBVzs7SUFDWCw4QkFBVzs7SUFDWCw4QkFBVzs7SUFDWCw4QkFBVzs7SUFDWCw4QkFBVzs7SUFDWCw4QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWhleGFnb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaGV4YWdvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hleGFnb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhleGFnb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3IgPSAnYmxhY2snO1xuXG4gIEBJbnB1dCgnc3BhY2luZycpIHNldCBzcGFjaW5nKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnMgPSB2YWx1ZTtcbiAgICB0aGlzLmZpdCgpO1xuICB9XG5cbiAgZ2V0IHNwYWNpbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zO1xuICB9XG5cbiAgQElucHV0KCd3aWR0aCcpIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy53ID0gdmFsdWU7XG4gICAgdGhpcy5maXQoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnc7XG4gIH1cblxuICBASW5wdXQoJ2hlaWdodCcpIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuaCA9IHZhbHVlO1xuICAgIHRoaXMuZml0KCk7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaDtcbiAgfVxuXG4gIGg6IG51bWJlcjtcbiAgdzogbnVtYmVyO1xuICBzOiBudW1iZXI7XG4gIHQ6IG51bWJlcjtcbiAgc3c6IG51bWJlcjtcbiAgc2g6IG51bWJlcjtcbiAgeDA6IG51bWJlcjtcbiAgeTA6IG51bWJlcjtcbiAgeDE6IG51bWJlcjtcbiAgeTE6IG51bWJlcjtcblxuICBmaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdyA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IHMgPSB0aGlzLnNwYWNpbmcgKiBNYXRoLnNxcnQoMik7XG4gICAgbGV0IHN3OiBudW1iZXI7XG4gICAgbGV0IHNoOiBudW1iZXI7XG4gICAgbGV0IHgwOiBudW1iZXI7XG4gICAgbGV0IHkwOiBudW1iZXI7XG4gICAgbGV0IHgxOiBudW1iZXI7XG4gICAgbGV0IHkxOiBudW1iZXI7XG4gICAgbGV0IHQ6IG51bWJlcjtcbiAgICBpZiAodyA8IGgpIHsgLy8gdmVydGljYWxcbiAgICAgIHQgPSB3IC8gMjtcbiAgICAgIHgwID0gLXQ7XG4gICAgICB4MSA9IHQ7XG4gICAgICB5MCA9IHQgKyBzIC8gMjtcbiAgICAgIHkxID0gdCArIHMgLyAyO1xuICAgICAgc3cgPSAwO1xuICAgICAgc2ggPSBoIC0gNCAqIHQgLSBzO1xuICAgIH0gZWxzZSB7IC8vIGhvcml6b250YWxcbiAgICAgIHQgPSBoIC8gMjtcbiAgICAgIHgwID0gdCArIHMgLyAyO1xuICAgICAgeDEgPSB0ICsgcyAvIDI7XG4gICAgICB5MCA9IC10O1xuICAgICAgeTEgPSB0O1xuICAgICAgc3cgPSB3IC0gNCAqIHQgLSBzO1xuICAgICAgc2ggPSAwO1xuICAgIH1cbiAgICB0aGlzLnQgPSB0O1xuICAgIHRoaXMueDAgPSB4MDtcbiAgICB0aGlzLnkwID0geTA7XG4gICAgdGhpcy54MSA9IHgxO1xuICAgIHRoaXMueTEgPSB5MTtcbiAgICB0aGlzLnN3ID0gc3c7XG4gICAgdGhpcy5zaCA9IHNoO1xuICAgIGNvbnNvbGUubG9nKHt3OiB3LCBoOiBoLCB0OiB0LCBzOiBzfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZml0KCk7XG4gIH1cblxufVxuIl19