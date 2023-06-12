// Notes:
// This testing method is relatively brittle, as you have to delete all test users are the end of each run.
// This could impact other tests that rely on test users, so it's best to run this test in isolation.
// Ideally, we could create one test user per test, and delete it at the end of the test.

const projectId = Cypress.env('descope_project_id')
const managementKey = Cypress.env('descope_management_key')
const descopeAPIDomain = "api.descope.com"

// Define the authorization header
const authHeader = {
    'Authorization': `Bearer ${projectId}:${managementKey}`,
}

// Define the base URL for Descope API
const descopeApiBaseURL = `https://${descopeAPIDomain}/v1`;

const testUserLogIdNumber = Math.floor(1000 + Math.random() * 9000);
const testUserLoginId = "testUser" + testUserLogIdNumber;

// Define the test user details
const testUser = {
    loginId: testUserLoginId,
    email: "testUser1@gmail.com",
    phone: "+11231231234",
    verifiedEmail: true,
    verifiedPhone: true,
    displayName: "Test User",
    test: true,
}

// Add the loginTestUserViaAPI command
Cypress.Commands.add('loginTestUserViaAPI', () => {
    cy.log("Creating test user via Descope API")
    cy.request({
        method: 'POST',
        url: `${descopeApiBaseURL}/mgmt/user/create`,
        headers: authHeader,
        body: testUser,
    })
        .then(({ body }) => {
            cy.log(`Created test user via Descope API: ${JSON.stringify(body)}`)
            const loginId = body["user"]["loginIds"][0];
            cy.log(`Getting OTP for test user via Descope API: ${loginId}`)

            cy.request({
                method: 'POST',
                url: `${descopeApiBaseURL}/mgmt/tests/generate/otp`,
                headers: authHeader,
                body: {
                    "loginId": loginId,
                    "deliveryMethod": "email"
                }
            })
                .then(({ body }) => {
                    cy.log("Got OTP for test user via Descope API")
                    cy.log(`otpBody: ${JSON.stringify(body)}`)
                    const otpCode = body["code"]
                    cy.log(otpCode)
                    cy.log(`Verifying OTP for test user via Descope API: ${loginId}`)

                    cy.request({
                        method: 'POST',
                        url: `${descopeApiBaseURL}/auth/otp/verify/email`,
                        headers: authHeader,
                        body: {
                            "loginId": loginId,
                            "code": otpCode
                        }
                    })
                        .then(({ body }) => {
                            cy.log(`Verified OTP for test user via Descope API: ${JSON.stringify(body)}`)
                            const sessionJwt = body["sessionJwt"]
                            const refreshJwt = body["refreshJwt"]

                            /** Default name for the session cookie name / local storage key */
                            const SESSION_TOKEN_KEY = 'DS';
                            /** Default name for the refresh local storage key */
                            const REFRESH_TOKEN_KEY = 'DSR';
                            // As of June 12, 2023, the session and refresh token constants can be found in:
                            // https://github.dev/descope/web-js-sdk src/withPersistTokens/constants.ts

                            // // Store the JWT in the browser's local storage.
                            cy.window().then((win) => {
                                win.localStorage.setItem(SESSION_TOKEN_KEY, sessionJwt);
                                win.localStorage.setItem(REFRESH_TOKEN_KEY, refreshJwt);
                            });

                            // // Now navigate to the root URL of your application.
                            cy.visit('/')

                        })
                })
        })
})

// Add the deleteAllTestUsers command
Cypress.Commands.add('deleteAllTestUsers', () => {
    cy.log("Deleting test users via Descope API")

    cy.request({
        method: 'DELETE',
        url: `${descopeApiBaseURL}/mgmt/user/test/delete/all`,
        headers: authHeader,
    })
        .then(({ body }) => {
            cy.log(`Deleted test users: ${JSON.stringify(body)}`)
        })
})