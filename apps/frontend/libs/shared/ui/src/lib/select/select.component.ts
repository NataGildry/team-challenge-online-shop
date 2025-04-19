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

  public readonly options = input.required<SelectOption[]>();

  protected value = signal<string>('');
  protected selected = computed(() => {
    const option = this.options().find((el) => el.value === this.value());
    return option === undefined ? 'no name' : option.name;
  });

  // eslint-disable-next-line
  private onChange = (value: string) => {};
  // eslint-disable-next-line
  private onTouched = () => {};

  public writeValue(value: string): void {
    this.value.set(value);
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  protected selectOption(item: SelectOption): void {
    this.value.set(item.value);
    this.isOpen.set(false);
    this.onChange(this.value());
  }
}
