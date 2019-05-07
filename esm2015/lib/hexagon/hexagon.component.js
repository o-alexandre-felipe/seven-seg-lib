/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class HexagonComponent {
    constructor() {
        this.color = 'black';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set spacing(value) {
        this.s = value;
        this.fit();
    }
    /**
     * @return {?}
     */
    get spacing() {
        return this.s;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this.w = value;
        this.fit();
    }
    /**
     * @return {?}
     */
    get width() {
        return this.w;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this.h = value;
        this.fit();
    }
    /**
     * @return {?}
     */
    get height() {
        return this.h;
    }
    /**
     * @return {?}
     */
    fit() {
        /** @type {?} */
        const w = this.width;
        /** @type {?} */
        const h = this.height;
        /** @type {?} */
        const s = this.spacing * Math.sqrt(2);
        /** @type {?} */
        let sw;
        /** @type {?} */
        let sh;
        /** @type {?} */
        let x0;
        /** @type {?} */
        let y0;
        /** @type {?} */
        let x1;
        /** @type {?} */
        let y1;
        /** @type {?} */
        let t;
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fit();
    }
}
HexagonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-hexagon',
                template: "<div [style.borderColor]=\"color\" class=\"box\"\n     [ngStyle]=\"{width: w + 'px', height: h + 'px'}\">\n  <div #s0 [style.top.px]=\"y0\" [style.left.px]=\"x0\"\n       class='vis' [class.vertical0]=\"(w < h)\" [class.horizontal0]=\"(w > h)\"\n       [ngStyle]=\"{top: (y0)+'px', left: (x0)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n  <div [style.top.px]=\"y1\" [style.left.px]=\"x1\"\n       class='vis' [class.vertical1]=\"(w < h)\" [class.horizontal1]=\"(w > h)\"\n       [ngStyle]=\"{top: (y1)+'px', left: (x1)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n</div>\n",
                styles: ["div.vis{border-style:solid;border-color:transparent;position:absolute}div.vertical0{left:-50%;border-right-color:inherit}div.vertical1{left:50%;border-left-color:inherit}div.horizontal0{top:-50%;border-bottom-color:inherit}div.horizontal1{top:50%;border-top-color:inherit}div.box{position:relative;display:inline-block;top:0;left:0;overflow:unset;vertical-align:top}"]
            }] }
];
/** @nocollapse */
HexagonComponent.ctorParameters = () => [];
HexagonComponent.propDecorators = {
    color: [{ type: Input, args: ['color',] }],
    spacing: [{ type: Input, args: ['spacing',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4YWdvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXZlbi1zZWcvIiwic291cmNlcyI6WyJsaWIvaGV4YWdvbi9oZXhhZ29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTSxPQUFPLGdCQUFnQjtJQStFM0I7UUE5RWdCLFVBQUssR0FBRyxPQUFPLENBQUM7SUErRWhDLENBQUM7Ozs7O0lBN0VELElBQXNCLE9BQU8sQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELElBQW9CLEtBQUssQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELElBQXFCLE1BQU0sQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7O0lBYUQsR0FBRzs7Y0FDSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7O2NBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNOztjQUNmLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUNqQyxFQUFVOztZQUNWLEVBQVU7O1lBQ1YsRUFBVTs7WUFDVixFQUFVOztZQUNWLEVBQVU7O1lBQ1YsRUFBVTs7WUFDVixDQUFTO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsV0FBVztZQUN0QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1AsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjthQUFNLEVBQUUsYUFBYTtZQUNwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDUjtRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7O1lBekZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMnBCQUF1Qzs7YUFFeEM7Ozs7O29CQUVFLEtBQUssU0FBQyxPQUFPO3NCQUViLEtBQUssU0FBQyxTQUFTO29CQVNmLEtBQUssU0FBQyxPQUFPO3FCQVNiLEtBQUssU0FBQyxRQUFROzs7O0lBcEJmLGlDQUFnQzs7SUE2QmhDLDZCQUFVOztJQUNWLDZCQUFVOztJQUNWLDZCQUFVOztJQUNWLDZCQUFVOztJQUNWLDhCQUFXOztJQUNYLDhCQUFXOztJQUNYLDhCQUFXOztJQUNYLDhCQUFXOztJQUNYLDhCQUFXOztJQUNYLDhCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaGV4YWdvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZXhhZ29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGV4YWdvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGV4YWdvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvciA9ICdibGFjayc7XG5cbiAgQElucHV0KCdzcGFjaW5nJykgc2V0IHNwYWNpbmcodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMucyA9IHZhbHVlO1xuICAgIHRoaXMuZml0KCk7XG4gIH1cblxuICBnZXQgc3BhY2luZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnM7XG4gIH1cblxuICBASW5wdXQoJ3dpZHRoJykgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLncgPSB2YWx1ZTtcbiAgICB0aGlzLmZpdCgpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudztcbiAgfVxuXG4gIEBJbnB1dCgnaGVpZ2h0Jykgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5oID0gdmFsdWU7XG4gICAgdGhpcy5maXQoKTtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5oO1xuICB9XG5cbiAgaDogbnVtYmVyO1xuICB3OiBudW1iZXI7XG4gIHM6IG51bWJlcjtcbiAgdDogbnVtYmVyO1xuICBzdzogbnVtYmVyO1xuICBzaDogbnVtYmVyO1xuICB4MDogbnVtYmVyO1xuICB5MDogbnVtYmVyO1xuICB4MTogbnVtYmVyO1xuICB5MTogbnVtYmVyO1xuXG4gIGZpdCgpOiB2b2lkIHtcbiAgICBjb25zdCB3ID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBoID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgcyA9IHRoaXMuc3BhY2luZyAqIE1hdGguc3FydCgyKTtcbiAgICBsZXQgc3c6IG51bWJlcjtcbiAgICBsZXQgc2g6IG51bWJlcjtcbiAgICBsZXQgeDA6IG51bWJlcjtcbiAgICBsZXQgeTA6IG51bWJlcjtcbiAgICBsZXQgeDE6IG51bWJlcjtcbiAgICBsZXQgeTE6IG51bWJlcjtcbiAgICBsZXQgdDogbnVtYmVyO1xuICAgIGlmICh3IDwgaCkgeyAvLyB2ZXJ0aWNhbFxuICAgICAgdCA9IHcgLyAyO1xuICAgICAgeDAgPSAtdDtcbiAgICAgIHgxID0gdDtcbiAgICAgIHkwID0gdCArIHMgLyAyO1xuICAgICAgeTEgPSB0ICsgcyAvIDI7XG4gICAgICBzdyA9IDA7XG4gICAgICBzaCA9IGggLSA0ICogdCAtIHM7XG4gICAgfSBlbHNlIHsgLy8gaG9yaXpvbnRhbFxuICAgICAgdCA9IGggLyAyO1xuICAgICAgeDAgPSB0ICsgcyAvIDI7XG4gICAgICB4MSA9IHQgKyBzIC8gMjtcbiAgICAgIHkwID0gLXQ7XG4gICAgICB5MSA9IHQ7XG4gICAgICBzdyA9IHcgLSA0ICogdCAtIHM7XG4gICAgICBzaCA9IDA7XG4gICAgfVxuICAgIHRoaXMudCA9IHQ7XG4gICAgdGhpcy54MCA9IHgwO1xuICAgIHRoaXMueTAgPSB5MDtcbiAgICB0aGlzLngxID0geDE7XG4gICAgdGhpcy55MSA9IHkxO1xuICAgIHRoaXMuc3cgPSBzdztcbiAgICB0aGlzLnNoID0gc2g7XG4gICAgY29uc29sZS5sb2coe3c6IHcsIGg6IGgsIHQ6IHQsIHM6IHN9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXQoKTtcbiAgfVxuXG59XG4iXX0=