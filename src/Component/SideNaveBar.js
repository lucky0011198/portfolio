import React, { useEffect } from "react";
import { Button, User } from "@nextui-org/react";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { Leaf, Logout } from "../Asset/Icons";
import Search from "./Search";
import socket from "../socketHandler/socket";

import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../redux/slice/states";

export default function SideNaveBar({ data, isProfile }) {
  const { onlineUser, user, defaultGroup, joinedRooms } = useSelector(
    (state) => state.states
  );

  const dispatch = useDispatch();

  const UserProfile = () => {
    if (!user) return;
    const { username, email } = user;
    return (
      <div className="flex flex-row justify-between items-center">
        <User
          className="pt-4 pl-4 pb-2"
          name={username}
          description={email}
          avatarProps={{
            src: "https://cdn-icons-png.flaticon.com/256/236/236831.png",
            showFallback: true,
          }}
        />
        <div className="pr-4 mt-1">
          <Button
            isIconOnly
            color="danger"
            variant="light"
            aria-label="logout"
            onPress={() => {
              data.logout();
            }}
          >
            <Logout />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-72 h-screen flex-col overflow-y-scroll">
      {isProfile ? (
        <>
          <UserProfile />
        </>
      ) : (
        <>
          <Search />
          <Accordion className="w-11/12 ml-3 self-center text-sm" isCompact>
            <AccordionItem
              key="1"
              className="w-full"
              aria-label="Groups"
              title="Groups"
            >
              {defaultGroup.map((room, index) => (
                <div
                  key={index}
                  className=" hover:bg-slate-200 focus:bg-slate-200 cursor-pointer w-full"
                  onClick={() => {
                    dispatch(setValue([room, "selecteduser"]));
                    if (joinedRooms.includes(room?.name)) return;
                    let rooms = joinedRooms.length
                      ? joinedRooms + ":" + room?.name
                      : room?.name;
                    dispatch(setValue([rooms, "joinedRooms"]));
                    socket.emit("join-room", {
                      room: room?.name,
                      user: user.username,
                    });
                  }}
                >
                  <User
                    className="pt-3 pl-2 pb-2"
                    avatarProps={{
                      icon: <Leaf />,
                      showFallback: false,
                    }}
                    name={room.name}
                    description={room.subname}
                  />
                </div>
              ))}
            </AccordionItem>
          </Accordion>
          <Divider className="my-4 bg-slate-100" />

          <span className="text-gray-400 ml-5 text-sm">Online users </span>
          {onlineUser.map((user, index) => (
            <div
              key={index}
              className=" hover:bg-slate-200 focus:bg-slate-200 cursor-pointer"
            >
              <User
                className="pt-3 pl-4 pb-2"
                name={user[1].username}
                description={user[1].email}
                avatarProps={{
                  src: "https://cdn-icons-png.flaticon.com/256/236/236831.png",
                  showFallback: true,
                }}
                onClick={() => {
                  dispatch(setValue([user, "selecteduser"]));
                }}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
