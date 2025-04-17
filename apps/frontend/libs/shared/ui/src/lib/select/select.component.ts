import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { ClickOutsideDirective } from '../click-outside.directive';
import { SelectOption } from '../select-option';

@Component({
  selector: 'lib-select',
  imports: [ClickOutsideDirective],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  public readonly options = input<SelectOption[]>([
    { name: 'option', value: 'option' },
  ]);
  public readonly optionSelected = output<string>();

  protected readonly isOpen = signal(false);
  protected readonly selectedOption = signal('');

  public ngOnInit(): void {
    this.selectedOption.set(this.options()[0].name);
  }

  protected selectOption(item: string): void {
    this.selectedOption.set(item);
    this.optionSelected.emit(item);
    this.isOpen.set(false);
  }
}
