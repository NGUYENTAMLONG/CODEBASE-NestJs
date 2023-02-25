/**
 * Exports the generators so plop knows them
 */
import { NodePlopAPI } from 'plop';
import { join } from 'path';
import { exec } from 'child_process';
import apiGenerator from './templates';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('api', apiGenerator);
  plop.addHelper('curly', (object: any, open: any) => (open ? '{' : '}'));

  plop.setHelper('camelCase', function (text) {
    return text
      .toLowerCase()
      .split('-')
      .map((it, index) => {
        if (index != 0) {
          return it.charAt(0).toUpperCase() + it.substring(1);
        }
        return it;
      })
      .join('');
  });

  plop.setHelper('upperCase', function (text) {
    return text.split('-').join('_').toUpperCase();
  });

  plop.setHelper('normalCase', function (text) {
    return text.split('-').join('_');
  });

  // plop.setHelper('properCase', function (text: string) {
  //   return text.replace(/-/g, '');
  // });

  plop.setActionType('prettier', (answers: any) => {
    const folderPath = `${join('src/modules', answers.name, '**.ts')}`;
    exec(`yarn prettier --write "${folderPath}"`);
    return folderPath;
  });
};
