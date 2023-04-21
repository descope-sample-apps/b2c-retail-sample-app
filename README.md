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

#### 2. Set up Descope environment variables in `.env` file
```
REACT_APP_DESCOPE_PROJECT_ID="YOUR PROJECT ID" // Required for Descope authentication
REACT_APP_DESCOPE_SIGN_IN_FLOW_ID="sign-up-or-in" // Optional, if you would like to use a flow other than sign-up-or-in
```
_You can get your project-id [here](https://app.descope.com/settings/project)_.
_You can get this flow-id from the Flows page [here](https://app.descope.com/flows)_

#### 3. Install dependencies 

You can use npm or yarn, but we recommend using yarn. If it isn't already installed on your machine, the instructions on how to do so can be found [here](https://classic.yarnpkg.com/lang/en/docs/install/). After yarn is installed, run this command:
```
yarn install
```

#### 4. Start the app
```
yarn start
```

#### 5. Open the app
Browse to `https://localhost:3000`


## Learn More
To learn more please see the [Descope Documentation and API reference page](https://docs.descope.com/).

## Contact Us
If you need help you can [contact us](https://docs.descope.com/support/)

## License
The Tee-Hee-Tees app is licensed for use under the terms and conditions of the MIT license Agreement.
