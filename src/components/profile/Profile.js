import { UserProfile, useSession } from "@descope/react-sdk";
import './profile.css';

function Profile() {
  const { isAuthenticated, isSessionLoading } = useSession();

  return (
    <>
    <div className="profile">
      {isAuthenticated || isSessionLoading ? <UserProfile 
      widgetId="user-profile-widget"     
      onLogout={() => {
      window.location.href = '/login';
    }}></UserProfile> : window.location.href = '/login'}
      </div>
    </>);

}

export default Profile;