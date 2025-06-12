import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Shared/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'black'],
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Click Me',
    disabled: false,
    color: 'primary',
  },
};

export const Black: Story = {
  args: {
    label: 'Delete',
    disabled: false,
    color: 'black',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    color: 'primary',
  },
};
