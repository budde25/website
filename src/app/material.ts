import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatRippleModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatRippleModule,
    ],
})
export class MaterialModule {}
