import React, { useEffect }from "react";
import Container from "./containers";
import { AuthProvider, useAuth } from '@descope/react-sdk'

const AppRoot = () => {
  return (
      <AuthProvider
          projectId='P2IWkrFecmaDJzhQqV5L9MZslivd'
      >
       <App />
      </AuthProvider>
  )
}

const App = () => {
  const { authenticated, me } = useAuth();
  useEffect(() => {
		if (authenticated) {
			me();
		}
	}, [authenticated]);
  return (
    <div style={{height: '100%'}}>
      <Container/>
    </div>
  );
}

export default AppRoot;
