import React, { useEffect, useCallback, useState, memo ,useContext} from "react";
import SideNaveBar from "./SideNaveBar";
import Chats from "./Chats";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../redux/slice/states";
import socket from '../socketHandler/socket';



export default memo(function Dashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const dispatch = useDispatch();

  const { user,selecteduser} = useSelector(
    (state) => state.states
  );



  const initSocket = (data) => {
    socket.connect();
    socket.on("connect", () => {
      console.log(" client side socket connected");
      socket.emit("init", data);
      socket.on("getSockets", (sockets) => {
        console.log("fetch users");
        dispatch(setValue([sockets, "onlineUser"]));
      });
      socket.on("new-user", (data) => {
        console.log(data);
      });
    });
  };

  const isLoggedIn = async (token) => {
    try {
      const response = await fetch("http://localhost:2001/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setValue([data, "user"]));
        initSocket(data);
      } else {
        sessionStorage.removeItem("token");
        navigate("/init");
      }
    } catch (error) {
      sessionStorage.removeItem("token");
      navigate("/init");
    }
  };

  const logout = useCallback(() => {
    sessionStorage.removeItem("token");
    navigate("/init");
  }, []);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (!storedToken) {
      //"Session ID unknown" issue resolved by adding this line
      socket.disconnect();
      navigate("/init");
    } else {
      //check user already logged in..
      isLoggedIn(storedToken);
    }



    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex-row flex relative">
      <SideNaveBar />
      <Chats />
      <SideNaveBar  data={{ ...profile, logout }} isProfile={true} />
    </div>
  );
});
