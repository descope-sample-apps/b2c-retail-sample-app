# Welcome to Tee-Hee-Tees
This is a sample consumer app built by Descope to showcase the Descope Flows functionality. 
To experience the sign-up or sign-in experience - click on Login. 
While logged in, you can experience the step-up authentication flow by adding a T-shirt to your cart and then trying to check out (no credit card required). 

## Set up
In order to launch this app:

#### 1. Clone the repo 
```
git clone git@github.com:descope-sample-apps/b2c-retail-sample-app.git
```

#### 2. Set up Descope project ID environment variable in `.env` file
```
REACT_APP_DESCOPE_PROJECT_ID="YOUR PROJECT ID"
```

You can get the project ID from the Descope console [here](https://app.descope.com/settings/project)

If you would like to use a different flow, other than sign-up-or-in (**OPTIONAL**):
```
REACT_APP_DESCOPE_SIGN_IN_FLOW_ID="sign-up-or-in"
```

You can get this flow-id from the Flows page in the Descope Console [here](https://app.descope.com/flows)

#### 3. Install dependencies 

You can use npm or yarn, but we recommend using yarn. If it isn't already installed on your machine, the instructions on how to do so can be found [here](https://classic.yarnpkg.com/lang/en/docs/install/)
```
yarn install
```

#### 4. Start the app
```
yarn start
```

#### 5. Open the app
Browse to `https://localhost:3000`


If you do not want to use the sign-up-or-in flow for the main login, you can alter which flow you want to use in the Login.js file in the repo located in `src/components/login/Login.js`. All you need to do is change the flow-id (which you can get from the [console](https://app.descope.com/flows)) in the React component, shown below: 

```
<Descope
    flowId = "sign-up-or-in" // It can be "sign-up", "sign-in", "saml-config", etc.
    {...}
/>
```

## Learn More
To learn more please see the [Descope Documentation and API reference page](https://docs.descope.com/).

## Contact Us
If you need help you can [contact us](https://docs.descope.com/support/)

## License
The Tee-Hee-Tees app is licensed for use under the terms and conditions of the MIT license Agreement.
