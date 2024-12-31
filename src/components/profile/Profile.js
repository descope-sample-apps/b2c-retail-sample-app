import { UserProfile, useSession } from "@descope/react-sdk";
import "./profile.css";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
function Profile() {
    const { isAuthenticated, sessionToken, isSessionLoading } = useSession();
    const isAnonymousUser =
        (sessionToken && jwtDecode(sessionToken)["danu"]) || false;
    const isLoggedIn = isAuthenticated && !isAnonymousUser;

    useEffect(() => {
        if (!isSessionLoading && !isLoggedIn) {
            window.location.href = "/login";
        }
    }, [isSessionLoading, isLoggedIn]);
    return (
        <>
            <div className="profile">
                {isSessionLoading && <div className="loading">Loading...</div>}
                {!isSessionLoading && isLoggedIn && (
                    <UserProfile
                        widgetId="user-profile-widget"
                        onLogout={() => {
                            window.location.href = "/login";
                        }}
                    />
                )}
            </div>
        </>
    );
}

export default Profile;
