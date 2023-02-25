/**
 * Component Generator
 */

import apiExisted from '../utils/is-existed';

export default {
  description: 'Add a model',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: (value: string) => {
        if (/.+/.test(value)) {
          return apiExisted(value) ? 'A api  with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  actions: (data: any) => {
    const actions: any = [];
    actions.push({
      type: 'add',
      path: '../../src/modules/{{name}}/{{name}}.entity.ts',
      templateFile: './templates/entity.ts.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: '../../src/modules/{{name}}/{{name}}.constant.ts',
      templateFile: './templates/constant.ts.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: '../../src/modules/{{name}}/{{name}}.interface.ts',
      templateFile: './templates/interface.ts.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: '../../src/modules/{{name}}/{{name}}.provider.ts',
      templateFile: './templates/provider.ts.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: '../../src/modules/{{name}}/{{name}}.repository.ts',
      templateFile: './templates/repository.ts.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: '../../src/modules/{{name}}/{{name}}.service.ts',
      templateFile: './templates/service.ts.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: '../../src/modules/{{name}}/{{name}}.controller.ts',
      templateFile: './templates/controller.ts.hbs',
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: '../../src/modules/{{name}}/{{name}}.module.ts',
      templateFile: './templates/module.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'prettier',
    });
    return actions;
  },
};
