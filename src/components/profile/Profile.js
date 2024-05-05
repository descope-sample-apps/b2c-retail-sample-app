import { UserProfile, useSession } from "@descope/react-sdk";

function Profile() {
  const { isAuthenticated } = useSession();

  return (
    <>
    <div>
      {isAuthenticated ? <UserProfile widgetId="user-profile-widget"></UserProfile> : window.location.href = '/login'}
      </div>
    </>);

}

export default Profile;