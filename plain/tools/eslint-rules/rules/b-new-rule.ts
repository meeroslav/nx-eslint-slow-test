/**
 * This file sets you up with with structure needed for an ESLint rule.
 *
 * It leverages utilities from @typescript-eslint to allow TypeScript to
 * provide autocompletions etc for the configuration.
 *
 * Your rule's custom logic will live within the create() method below
 * and you can learn more about writing ESLint rules on the official guide:
 *
 * https://eslint.org/docs/developer-guide/working-with-rules
 *
 * You can also view many examples of existing rules here:
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/rules
 */

import { ESLintUtils } from '@typescript-eslint/experimental-utils';
import {
  readCachedProjectGraph,
} from '@nrwl/workspace/src/core/project-graph';
import { readNxJson } from '@nrwl/workspace/src/core/file-utils';
import { TestModel } from '@plain/api/lib1';

// NOTE: The rule will be available in ESLint configs as "@nrwl/nx/workspace/b-new-rule"
export const RULE_NAME = 'b-new-rule';

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: ``,
      recommended: 'error',
    },
    schema: [],
    messages: {
      e2eMessageId: 'e2e test known error message'
    },
  },
  defaultOptions: [],
  create(context) {
    const nxJson = readNxJson();
    const projectGraph = readCachedProjectGraph();
    const testMe: TestModel = { name: 'Ok' };

    console.log(nxJson.npmScope, projectGraph.version, testMe);
    return {
      Program(node) {
        context.report({
          messageId: 'e2eMessageId',
          node,
        });
      }
    }
  }
});
