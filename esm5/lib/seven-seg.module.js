/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SevenSegComponent } from './seven-seg.component';
import { SevenSegDigitComponent } from './seven-seg-digit.component';
import { CommonModule } from '@angular/common';
import { SevenSegCellComponent } from './cell/seven-seg-cell.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { SegSettingsComponent } from './seg-settings/seg-settings.component';
import { FormsModule } from '@angular/forms';
var SevenSegModule = /** @class */ (function () {
    function SevenSegModule() {
    }
    SevenSegModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SevenSegComponent,
                        SevenSegDigitComponent,
                        SevenSegCellComponent,
                        HexagonComponent,
                        SegSettingsComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        SevenSegComponent,
                        SevenSegCellComponent,
                        HexagonComponent,
                        SegSettingsComponent
                    ]
                },] }
    ];
    return SevenSegModule;
}());
export { SevenSegModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NldmVuLXNlZy8iLCJzb3VyY2VzIjpbImxpYi9zZXZlbi1zZWcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFBQTtJQW9CQSxDQUFDOztnQkFwQkEsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVztxQkFDWjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3FCQUNyQjtpQkFDRjs7SUFFRCxxQkFBQztDQUFBLEFBcEJELElBb0JDO1NBRFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZXZlblNlZ0NvbXBvbmVudH0gZnJvbSAnLi9zZXZlbi1zZWcuY29tcG9uZW50JztcbmltcG9ydCB7U2V2ZW5TZWdEaWdpdENvbXBvbmVudH0gZnJvbSAnLi9zZXZlbi1zZWctZGlnaXQuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTZXZlblNlZ0NlbGxDb21wb25lbnR9IGZyb20gJy4vY2VsbC9zZXZlbi1zZWctY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtIZXhhZ29uQ29tcG9uZW50fSBmcm9tICcuL2hleGFnb24vaGV4YWdvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWdTZXR0aW5nc0NvbXBvbmVudH0gZnJvbSAnLi9zZWctc2V0dGluZ3Mvc2VnLXNldHRpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNldmVuU2VnQ29tcG9uZW50LFxuICAgIFNldmVuU2VnRGlnaXRDb21wb25lbnQsXG4gICAgU2V2ZW5TZWdDZWxsQ29tcG9uZW50LFxuICAgIEhleGFnb25Db21wb25lbnQsXG4gICAgU2VnU2V0dGluZ3NDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2V2ZW5TZWdDb21wb25lbnQsXG4gICAgU2V2ZW5TZWdDZWxsQ29tcG9uZW50LFxuICAgIEhleGFnb25Db21wb25lbnQsXG4gICAgU2VnU2V0dGluZ3NDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZXZlblNlZ01vZHVsZSB7XG59XG5cbiJdfQ==