import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { ClickOutsideDirective } from '../directives';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { angle, IconComponent } from '../icon';

export interface SelectOption {
  name: string;
  value: string;
}

@Component({
  selector: 'shared-select',
  imports: [ClickOutsideDirective, IconComponent],
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
export class SelectComponent implements ControlValueAccessor, OnInit {
  protected readonly isOpen = signal(false);
  protected readonly isDisabled = signal(false);
  protected readonly value = signal<string>('');
  protected readonly selected = computed(() => {
    const option = this.options().find((el) => el.value === this.value());
    return option?.name ?? '';
  });

  public readonly options = input.required<SelectOption[]>();

  protected readonly angleIcon = angle;

  private onChange?: (value: string) => void;
  private onTouched?: () => void;

  public ngOnInit(): void {
    this.value.set(this.options()[0].value);
  }

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
