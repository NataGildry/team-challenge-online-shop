import { NgStyle } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'shared-color-picker',
  imports: [NgStyle],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true,
    },
  ],
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent implements ControlValueAccessor {
  public readonly colorList =
    input.required<{ name: string; hexCode: string }[]>();

  protected readonly isDisabled = signal(false);
  protected readonly value = signal<string[]>([]);

  private onChange?: (value: string[]) => void;
  private onTouched?: () => void;

  protected selectColor(hexCode: string): void {
    let newState: string[];
    if (this.value().includes(hexCode)) {
      newState = this.value().filter((color) => color !== hexCode);
    } else {
      newState = [...this.value(), hexCode];
    }
    this.value.set(newState);
    this.onChange?.(newState);
    this.onTouched?.();
  }

  public writeValue(value: string[]): void {
    if (Array.isArray(value)) {
      this.value.set(value);
    }
  }

  public registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
