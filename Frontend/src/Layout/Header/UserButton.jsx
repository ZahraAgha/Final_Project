import {useCallback, useEffect, useState} from "react";
import {FaRegUser} from "react-icons/fa";
import {TbLogout} from "react-icons/tb";
import {GrUserAdmin} from "react-icons/gr";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setUser, removeUser} from "../../slices/user.slice";

export default function UserButton() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isReady, setReady] = useState(false);

  const fetchUser = useCallback(async () => {
    const res = await fetch("/api/auth/me");
    if (!res.ok)
      return;

    const body = await res.json();
    dispatch(setUser(body));
  }, []);

  useEffect(() => {
    fetchUser()
      .finally(() => setReady(true));
  }, []);

  const logout = useCallback(() => {
    setReady(false);
    fetch("/api/auth/logout", {method: 'POST'}).finally(() => {
      dispatch(removeUser());
      setReady(true);
    });
  }, []);

  if (!isReady) {
    // loading...
    return <FaRegUser className="w-6 h-6 text-gray-700"/>;
  }

  if (user) {
    // logged in user
    return (
      <div className="flex space-x-4">
        <div>{user.fullName}</div>
        <TbLogout onClick={logout} className="w-6 h-6 text-gray-700"/>
        {user.isAdmin && <NavLink to="/admin">
          <GrUserAdmin className="w-6 h-6 text-gray-700"/>
        </NavLink>}
      </div>
    );
  }

  return (
    <NavLink to="/signin">
      <FaRegUser className="w-6 h-6 text-gray-700"/>
    </NavLink>
  );
}
