import { loginToB2C } from './functions.js';
import { scenario } from 'k6/execution';
import { defaultRateOptions, getCurrentUserFromPool, getUserIDForMultiUser } from '../utils/common.js';

export const options = defaultRateOptions;

export default function main() {

  const userVal = getCurrentUserFromPool(scenario.iterationInTest);

  const userID = getUserIDForMultiUser(userVal);

  loginToB2C(userID);
}