import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ColorPickerComponent,
  IconComponent,
  FabricColors,
  angle,
  SelectComponent,
} from '@anx-store/shared/ui';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CapitalizeFirstWordPipe } from '@anx-store/shared/utils';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'lib-product-form',
  imports: [
    SelectComponent,
    ColorPickerComponent,
    IconComponent,
    NgClass,
    ReactiveFormsModule,
    CapitalizeFirstWordPipe,
    TranslocoDirective,
  ],
  templateUrl: './product-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  private get colorControl(): FormControl {
    return this.form.controls.color;
  }
  protected readonly selectedColors = signal<string[]>([]);
  protected readonly angleIcon = angle;

  protected isColorPickerOpen = signal<boolean>(false);

  protected statusOptions = [
    { name: 'Available', value: 'unavailable' },
    { name: 'Unavailable', value: 'unvailable' },
  ];

  protected categoryOptions = [
    { name: 'All', value: 'all' },
    { name: 'Armchairs and Sofas', value: 'armchairsandsofas' },
    { name: 'Beds and Futons', value: 'bedsandfutons' },
    { name: 'Chairs and Semi-chairs', value: 'chairsandsemichairs' },
    { name: 'Kids Furniture', value: 'kidsfurniture' },
  ];
  protected readonly materialOptions = [
    { name: 'Cotton', value: 'cotton' },
    { name: 'Linen', value: 'linen' },
    { name: 'Polyester', value: 'polyester' },
    { name: 'Velvet', value: 'velvet' },
    { name: 'Leather', value: 'leather' },
    { name: 'Microfiber', value: 'microfiber' },
    { name: 'Chenille', value: 'chenille' },
    { name: 'Vinyl', value: 'vinyl' },
  ];

  protected colorsList = Object.entries(FabricColors).map(([k, v]) => ({
    name: k,
    hexCode: v,
  }));

  protected form = new FormGroup({
    color: new FormControl<string[]>([]),
  });

  public constructor() {
    this.colorControl.valueChanges
      .pipe(
        tap((colors: string[]) => {
          const newColors = colors.map(
            (hex: string) =>
              this.colorsList.find((el) => el.hexCode === hex)?.name
          );
          this.selectedColors.set(
            newColors.filter((el) => typeof el === 'string')
          );
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  protected toggleAccordion(): void {
    this.isColorPickerOpen.set(!this.isColorPickerOpen());
  }
}
