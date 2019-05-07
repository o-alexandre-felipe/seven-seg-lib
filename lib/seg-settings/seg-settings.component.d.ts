import { ElementRef, OnInit } from '@angular/core';
export declare class SegSettingsComponent implements OnInit {
    thickness: number;
    spacing: number;
    count: number;
    chars: string;
    color: string;
    width: number;
    height: number;
    b1: ElementRef<HTMLElement>;
    constructor();
    ngOnInit(): void;
}
