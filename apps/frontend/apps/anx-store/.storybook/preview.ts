import { HttpClient } from '@angular/common/http';
import { TranslocoService } from '@jsverse/transloco';
import {
  Preview,
  componentWrapperDecorator,
  moduleMetadata,
  StoryContext,
  AngularRenderer,
} from '@storybook/angular';
import { DecoratorFunction, PartialStoryFn } from 'storybook/internal/types';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';

import { Langs } from '@anx-store/shared/utils';
import { LocaleManagerComponent } from './i18n-management.component';

type Globals = {
  locale?: string;
} & Record<string, unknown>;

const localeDecorator: DecoratorFunction<AngularRenderer, Globals> = (
  story: PartialStoryFn<AngularRenderer, Globals>,
  context: StoryContext<Globals>
): StoryFnAngularReturnType => {
  const locale = context?.globals?.['locale'] ?? Langs.ENG;

  return componentWrapperDecorator(LocaleManagerComponent, { locale })(
    story,
    context
  );
};

const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [TranslocoRootModule, LocaleManagerComponent],
      providers: [HttpClient, TranslocoService],
    }),
    localeDecorator,
  ],
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    title: 'Locale',
    description: 'Internationalization locale',
    defaultValue: Langs.ENG,
    toolbar: {
      icon: 'globe',
      items: [
        { value: Langs.ENG, title: 'English' },
        { value: Langs.UKR, title: 'Українська' },
      ],
    },
  },
};

export default preview;
