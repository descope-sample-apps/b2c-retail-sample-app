import React from "react";
import Container from "./containers";
import { AuthProvider } from '@descope/react-sdk'
import { useSearchParams } from "react-router-dom";

const AppRoot = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("project") || localStorage.getItem('projectId');
  const flowId = searchParams.get("flow") || localStorage.getItem('flowId');
  const baseUrl = searchParams.get("baseurl") || localStorage.getItem('baseUrl');
  
  if (projectId !== localStorage.getItem('projectId')) {
    localStorage.removeItem("DSR")
    localStorage.removeItem("DS")
    localStorage.setItem('projectId', projectId);
  }
  window.analytics.page({projectId: projectId});
  if (flowId !== localStorage.getItem('flowId')) {
    localStorage.removeItem("DSR")
    localStorage.removeItem("DS")
    localStorage.setItem('flowId', flowId);
  }

  if (baseUrl !== localStorage.getItem('baseUrl')) {
    localStorage.removeItem("DSR")
    localStorage.removeItem("DS")
    localStorage.setItem('baseUrl', baseUrl);
  }
  
  return (
      <AuthProvider
          projectId={projectId || process.env.REACT_APP_DESCOPE_PROJECT_ID}
          baseUrl={baseUrl || process.env.REACT_APP_DESCOPE_BASE_URL}
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
