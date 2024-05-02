import { UserProfile, useSession } from "@descope/react-sdk";
import { redirect, useNavigate } from "react-router";

function Profile() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSession();


  return (
    <>
    <div>
      {isAuthenticated ? <UserProfile widgetId="user-profile-widget"></UserProfile> : window.location.href = '/login'}
      </div>
    </>);

}

export default Profile;