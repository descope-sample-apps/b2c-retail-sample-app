const projectId = Cypress.env('descope_project_id')
const managementId = Cypress.env('descope_management_id')
const descopeDomain = Cypress.env('descope_domain')

// Define the authorization header
const authHeader = {
    'Authorization': `Bearer ${projectId}:${managementId}`,
}

// Define the base URL for Descope API
const descopeApiBaseURL = `https://${descopeDomain}/v1`;

// Define the test user details
const testUser = {
    loginId: "testuser1", // Currently must be lowercase, as the Descope API converts it to lowercase. TODO: Fix this.
    email: "testUser1@gmail.com",
    phone: "+18173742752",
    verifiedEmail: true,
    verifiedPhone: true,
    displayName: "Test User",
    userTenants: [
        {
            tenantId: "string",
            roleNames: ["string"]
        }
    ],
    test: true,
    customAttributes: {},
    phoneNumber: "+18173740252"
}


// Add the loginTestUser command
Cypress.Commands.add('loginTestUser', () => {
    cy.log("Creating test user via Descope API")
    cy.request({
        method: 'POST',
        url: `${descopeApiBaseURL}/mgmt/user/create`,
        headers: authHeader,
        body: testUser,
    })
        .then(({ body }) => {
            cy.log(`Created test user via Descope API: ${JSON.stringify(body)}`)
            cy.log(`Getting OTP for test user via Descope API: ${testUser.loginId}`)

            cy.request({
                method: 'POST',
                url: `${descopeApiBaseURL}/mgmt/tests/generate/otp`,
                headers: authHeader,
                body: {
                    "loginId": testUser.loginId,
                    "deliveryMethod": "email"
                }
            })
                .then(({ body }) => {
                    cy.log("Got OTP for test user via Descope API")
                    cy.log(`otpBody: ${JSON.stringify(body)}`)
                    const otpCode = body["code"]
                    cy.log(otpCode)
                    cy.log(`Verifying OTP for test user via Descope API: ${testUser.loginId}`)

                    cy.request({
                        method: 'POST',
                        url: `${descopeApiBaseURL}/auth/otp/verify/email`,
                        headers: authHeader,
                        body: {
                            "loginId": testUser.loginId,
                            "code": otpCode
                        }
                    })
                        .then(({ body }) => {
                            cy.log(`Verified OTP for test user via Descope API: ${JSON.stringify(body)}`)
                            // window.sessionStorage.setItem(key, value)
                            //   cy.window().then((window) => window.sessionStorage.getItem(key))

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