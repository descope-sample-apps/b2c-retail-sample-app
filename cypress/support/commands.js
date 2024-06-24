const projectId = Cypress.env('descope_project_id')
const managementKey = Cypress.env('descope_management_key')
let descopeAPIDomain = "api.descope.com"
if (projectId.length >= 32) {
    const localURL = projectId.substring(1, 5)
    descopeAPIDomain = [descopeAPIDomain.slice(0, 4), localURL, ".", descopeAPIDomain.slice(4)].join('')
}

// Define the authorization header
const authHeader = {
    'Authorization': `Bearer ${projectId}:${managementKey}`,
}

// Define the base URL for Descope API
const descopeApiBaseURL = `https://${descopeAPIDomain}/v1`;

const testUserLoginId = "testUser" + Math.floor(1000 + Math.random() * 9000) + "@gmail.com"; // Must match email to pass validation

// Define the test user details
const testUser = {
    loginId: testUserLoginId,
    email: testUserLoginId,
    phone: "+11231231234",
    verifiedEmail: true,
    verifiedPhone: true,
    displayName: "Test User",
    test: true,
}

// Add the loginViaDescopeAPI command
Cypress.Commands.add('loginViaDescopeAPI', () => {
    cy.request({
        method: 'POST',
        url: `${descopeApiBaseURL}/mgmt/user/create`,
        headers: authHeader,
        body: testUser,
    })
        .then(({ body }) => {
            const loginId = body["user"]["loginIds"][0];
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
                    const otpCode = body["code"]
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

                        })
                })
        })
})


// Add the loginViaDescopeUI command
Cypress.Commands.add('loginViaDescopeUI', () => {
    cy.request({
        method: 'POST',
        url: `${descopeApiBaseURL}/mgmt/user/create`,
        headers: authHeader,
        body: testUser,
    })
        .then(({ body }) => {
            const loginId = body["user"]["loginIds"][0];
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
                    const otpCode = body["code"]
                    const loginID = body["loginId"]
                    cy.visit('/login')
                    cy.get('descope-wc')
                        .find('input')
                        .type(loginID)
                    cy.get('descope-wc')
                        .find('descope-button').contains('Continue').click()
                    cy.get('descope-wc').find('.descope-input-wrapper').find('input').should('exist') // Assertion added to wait for the OTP code input to appear
                    let otpCodeArray = Array.from(otpCode); // Convert the OTP code string to an array
                    otpCodeArray.forEach((digit, index) => {
                        cy.get(`descope-text-field[data-id="${index}"]`).then($element => {
                                const input = $element[0].shadowRoot.querySelector('input');
                                input.value = digit;
                                input.dispatchEvent(new Event('change', { bubbles: true }));
                            });
                    });
                    cy.get('descope-wc')
                        .find('descope-button').contains('Submit').click()
                })
        })
})

// This command deletes all test users
Cypress.Commands.add('deleteAllTestUsers', () => {
    cy.request({
        method: 'DELETE',
        url: `${descopeApiBaseURL}/mgmt/user/test/delete/all`,
        headers: authHeader,
    })
})