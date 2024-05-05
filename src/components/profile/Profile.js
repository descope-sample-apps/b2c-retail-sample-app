import { UserProfile, useSession } from "@descope/react-sdk";

function Profile() {
  const { isAuthenticated, isSessionLoading } = useSession();

  return (
    <>
    <div>
      {isAuthenticated || isSessionLoading ? <UserProfile 
      widgetId="user-profile-widget"     
      onLogout={() => {
      window.location.href = '/login';
    }}></UserProfile> : window.location.href = '/login'}
      </div>
    </>);

}

export default Profile;