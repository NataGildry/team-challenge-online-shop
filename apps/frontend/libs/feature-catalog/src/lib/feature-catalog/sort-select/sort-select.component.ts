import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  angle,
  IconComponent,
  SharedIcon,
  ClickOutsideDirective,
} from '@anx-store/shared/ui';

export interface SelectOption {
  name: string;
  value: string;
}

@Component({
  selector: 'lib-sort-select',
  imports: [ClickOutsideDirective, IconComponent],
  templateUrl: './sort-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SortSelectComponent),
      multi: true,
    },
  ],
})
export class SortSelectComponent implements ControlValueAccessor {
  protected readonly isOpen = signal(false);
  protected readonly isDisabled = signal(false);
  protected readonly value = signal<string>('popularity');
  protected readonly selected = computed(() => {
    const option = this.options().find((el) => el.value === this.value());
    return option?.name ?? '';
  });

  public readonly options = input<SelectOption[]>([
    { name: 'By popularity', value: 'popularity' },
    { name: 'By price increase', value: 'increase' },
    { name: 'By price decrease', value: 'decrease' },
  ]);

  private onChange?: (value: string) => void;
  private onTouched?: () => void;

  protected readonly angle: SharedIcon = angle;

  protected selectOption(item: SelectOption): void {
    this.value.set(item.value);
    this.isOpen.set(false);
    this.onChange?.(this.value());
    this.onTouched?.();
  }

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
}
