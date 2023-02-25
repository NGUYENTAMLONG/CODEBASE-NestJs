/**
 * apiExit
 *
 * Check whether the given component exist in either the components or containers directory
 */

import { readdirSync } from 'fs';
import { join } from 'path';

const pageComponents = readdirSync(join(__dirname, '../../../src/modules'));
const components = pageComponents.concat(pageComponents);

export default function apiExisted(comp: string) {
  return components.indexOf(comp) >= 0;
}
