import React from "react";
import Container from "./containers";
import { AuthProvider } from '@descope/react-sdk'
import { useSearchParams } from "react-router-dom";

const AppRoot = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("project") || localStorage.getItem('projectId');
  if (projectId !== localStorage.getItem('projectId')) {
    localStorage.removeItem("DSR")
    localStorage.removeItem("DS")
    localStorage.setItem('projectId', projectId);
  }
  window.analytics.page({projectId: projectId});
  return (
      <AuthProvider
          projectId={projectId || process.env.REACT_APP_DESCOPE_PROJECT_ID}
      >
       <App />
      </AuthProvider>
  )
}

const App = () => {
  return (
    <div style={{height: '100%'}}>
      <Container/>
    </div>
  );
}

export default AppRoot;
