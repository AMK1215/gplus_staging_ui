import { createContext, useEffect, useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  auth: null,
  user: null,
  loading: true,
  updateProfile: () => {},
  updateLanguage: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const { data: userData, error, loading: userLoading } = useFetch(token ? BASE_URL + "/user" : null);
  const [profile, setProfile] = useState(null);
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Listen for token changes in localStorage (cross-tab and same tab)
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "token") {
        setToken(localStorage.getItem("token"));
      }
    };
    window.addEventListener("storage", handleStorage);

    // Custom event for same-tab updates
    const handleTokenChange = () => setToken(localStorage.getItem("token"));
    window.addEventListener("tokenChange", handleTokenChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("tokenChange", handleTokenChange);
    };
  }, []);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    // Always clear loading if userData is set, or error, or fetch is done
    if (userData) {
      setProfile(userData);
      setLoading(false);
    } else if (error) {
      setLoading(false);
    } else if (!userLoading && token) {
      setLoading(false);
    }
  }, [userData, userLoading, token, error]);
  
  useEffect(() => {
    if (error) {
      console.error("Failed to fetch user data:", error);
    }
  }, [error]);

  const updateProfile = (newProfile) => setProfile(newProfile);
  const updateLanguage = (newLanguage) => setLanguage(newLanguage);

  const value = useMemo(() => ({
    auth: token,
    user: profile,
    lan: language,
    loading,
    updateProfile,
    updateLanguage,
  }), [token, profile, language, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };