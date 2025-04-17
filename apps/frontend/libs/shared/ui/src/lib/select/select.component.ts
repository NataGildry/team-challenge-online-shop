import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { ClickOutsideDirective } from '../directives';

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
})
export class SelectComponent implements OnInit {
  protected readonly isOpen = signal(false);
  protected readonly selectedOption = signal('');

  public readonly options = input.required<SelectOption[]>();
  public readonly optionSelected = output<string>();

  public ngOnInit(): void {
    this.selectedOption.set(this.options()[0].name);
  }

  protected selectOption(item: string): void {
    this.selectedOption.set(item);
    this.optionSelected.emit(item);
    this.isOpen.set(false);
  }
}
