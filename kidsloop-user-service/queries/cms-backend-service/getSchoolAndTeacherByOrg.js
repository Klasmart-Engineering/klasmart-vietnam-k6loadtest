import http from 'k6/http';
import { getOrgID, loginSetup } from '../../../utils/setup.js';
import { APIHeaders, defaultRateOptions, isRequestSuccessful } from '../../../utils/common.js';
import { initUserCookieJar, userEndpoint } from '../../common.js';

export const options = defaultRateOptions;

const query = `query schoolAndTeacherByOrg($organization_id: ID!) {
  organization(organization_id: $organization_id) {
    schools {
      school_id
      school_name
      status
      classes {
        status
        class_id
        class_name
        teachers {
          user_id
          user_name
        }
      }
    }
  }
}`;

export function getSchoolAndTeacherByOrg(orgID) {

  return http.post(userEndpoint, JSON.stringify({
    query: query,
    operationName: 'schoolAndTeacherByOrg',
    variables: {
      organization_id: orgID
    }
  }), {
    headers: APIHeaders
  });
};

export function setup() {
  
  const accessCookie = loginSetup();

  const orgID = getOrgID(accessCookie);

  return {
    accessCookie: accessCookie,
    orgID: orgID
  };
};

export default function main(data) {

  initUserCookieJar(data.accessCookie);

  const response = getSchoolAndTeacherByOrg(data.orgID);
  isRequestSuccessful(response);
};