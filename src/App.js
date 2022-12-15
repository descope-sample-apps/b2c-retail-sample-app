import React, { useEffect }from "react";
import Container from "./containers";
import { AuthProvider, useAuth } from '@descope/react-sdk'
import { useSearchParams } from "react-router-dom";

const AppRoot = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId") || localStorage.getItem('projectId');
  if (projectId) {
    localStorage.setItem('projectId', projectId);
  }
  console.log("projectId", projectId)
  return (
      <AuthProvider
          projectId={projectId || process.env.REACT_APP_PROJECT_ID}
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
