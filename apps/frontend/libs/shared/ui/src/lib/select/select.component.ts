import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ClickOutsideDirective } from '../directives';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  name: string;
  value: string;
}

@Component({
  selector: 'shared-select',
  imports: [ClickOutsideDirective],
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  protected readonly isOpen = signal(false);
  public isDisabled = signal(true);
  //disabled = true;
  public readonly options = input.required<SelectOption[]>();

  protected readonly value = signal<string>('');
  protected readonly selected = computed(() => {
    const option = this.options().find((el) => el.value === this.value());
    return option?.name ?? '';
  });

  private onChange: (value: string) => void = (_value: string) => {
    // Placeholder for form change callback
  };
  private onTouched: () => void = () => {
    // Placeholder for touch callback
  };

  public writeValue(value: string): void {
    this.value.set(value);
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  protected selectOption(item: SelectOption): void {
    this.value.set(item.value);
    this.isOpen.set(false);
    this.onChange(this.value());
  }
}
