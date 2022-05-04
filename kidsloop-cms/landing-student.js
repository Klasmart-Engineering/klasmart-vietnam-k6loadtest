import {
  defaultSetup,
  initCookieJar
} from './common.js';
import { getAssessmentsSummary } from './endpoints/assessments-summary.js';
import { getSchedulesTimeView } from './endpoints/schedules-time-view.js';
import { getAssessmentsForStudent } from './endpoints/assessments-for-students.js';
import { getContentsFolders } from './endpoints/contents-folders.js';
import { getScheduleLiveToken } from './endpoints/schedule-live-token.js';
import { defaultRateOptions } from '../utils/common.js';
import * as env from '../utils/env.js';

export const options = defaultRateOptions;

const scheduleID = env.scheduleID ? env.scheduleID : '61efdf2de07ca5c42f12e99d';

export function setup() {

  return defaultSetup();
}

export default function main(data) {

  initCookieJar(data.accessCookie);
  
  studentLandingTest(data.orgID);
}

function studentLandingTest(orgID) {

  // getAssessmentsSummary(orgID);

  getSchedulesTimeView(orgID);

  getAssessmentsForStudent(orgID);

  getContentsFolders(orgID);

  getScheduleLiveToken(orgID, scheduleID);

}