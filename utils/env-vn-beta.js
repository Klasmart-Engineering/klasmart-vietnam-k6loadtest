export const APP_URL = "beta.kidsloop.vn"
export const APP_URL_TEST = "beta.kidsloop.vn"
export const LOGIN_URL = "beta.kidsloop.vn"
export const USERNAME = "qavn1@calmid.com"
export const USERNAME_ADMIN = "qavn1@calmid.com"
export const USERNAME_TEACHER = "qavn1+teacher1@calmid.com"
export const USERNAME_STUDENT = "qavn1+student1@calmid.com"
export const AMSENV = "prod"
export const TESTVAL = "all"
export const PASSWORD = "Abc012345"
//This should be a JWT string
export const ACCESS_COOKIE = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE3NDJjOWE1LWJiNzktNGEzYi04MDVjLWMzY2MzMzZiNWEzOSIsImVtYWlsIjoicWF2bjFAY2FsbWlkLmNvbSIsImV4cCI6MTczNzMxOTE3NCwiaXNzIjoia2lkc2xvb3AifQ.hgecPr86gyb4gNx7Ct-PxENTw07fwBjG6zDKOYVyfVnolX2l7VJtCH9D7bHvDuYsE1Mgv7r70bQ0BVMIqcoTIRUZg9kUUooJu7sE27SvSpVh9N5HW9g-aE4f2LZIX8lu2irUxKRfx-rMdwo65WOH0JbXOVxMSLyLiZGnCMZIakqf8EHfRyNkkL22foARFe3rs2zTjz80_rYc_Sx-Aiylrir5YQ4p9OCc0krEgDuvi77JjcKoYx-RG0IskuZUgm34RUBEIBGPLtvAaX20PvdnWiDld7Lmo2VOnBcCXdvj7d9rLplWoasLuJoczLt7H3eAApD4Ms5q_OtbmxmFDZlM-Q"
export const CMS_PREFIX = __ENV.CMS_PREFIX ? __ENV.CMS_PREFIX : 'cms' //string
export const THRESHOLD = 1000

//Azure B2C
export const TENANT_ID = "79505d03-827a-4832-abe1-dcff8356336a"
export const HUB_CLIENT_ID = "dc10738d-4365-4c8b-a4b9-295ea54ff384"
export const AUTH_CLIENT_ID = "031ebad4-540f-4b25-97cb-4946a364b8e9"
export const POLICY_NAME = "B2C_1A_RELYING_PARTY_SIGN_UP_LOG_IN"
// Whether to use B2C to authenticate for tests
export const B2C = true

//Assessment
export const ROOM_ID = "62305e514893234c08aa38c2"

//Rate testing
export const rate = __ENV.rate ? __ENV.rate : 1;
export const vus = __ENV.vus ? __ENV.vus : 10;
export const duration = __ENV.duration ? __ENV.duration : '1m';
export const poolCap = __ENV.poolCap ? __ENV.poolCap : 500;