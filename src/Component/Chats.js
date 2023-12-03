import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Input, Button, User, Divider } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setValueLevel2 } from "../redux/slice/chatData";
import socket from "../socketHandler/socket";

export default function Chats() {
  const { user, selecteduser } = useSelector((state) => state.states);
  const { chatData } = useSelector((state) => state.chat);
  const inptRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [chatsData, setChatsData] = React.useState({});

  const dispatch = useDispatch();

  const leftMessage =
    "rounded-bl-xl rounded-tr rounded-xl w-fit px-3 py-2 mt-3 bg-slate-300";
  const rightMessage =
    "rounded-br-xl rounded-tl w-fit px-3 py-2 bg-slate-300  rounded-md";

  const Message = ({ chat, type }) => {
    let alignment =
      chat?.sender === user.username
        ? "self-end"
        : "self-start flex-row-reverse";
    let messageContainer =
      chat?.sender === user.username ? leftMessage : rightMessage;
    return (
      <>
        {type !== "info" ? (
          <>
            <div className={alignment}>
              <div className={messageContainer}>
                <span>{chat.message}</span>
              </div>
            </div>
            <div style={{ display: "flex" }} className={alignment}>
              <p className="text-gray-400 text-[10px] p-[2px]">12:30</p>
              <p className="text-gray-400 text-[10px] p-[2px]">
                {chat?.sender}
              </p>
              {/* <img  style={{display:chat?.sender !== user.username?'none':'box'}} width="17" height="17" src="https://icons8.com/icon/IlVEwGHyLhED/flying-star" alt="flying-star"/> */}
              <span
                className="text-gray-400 text-[10px] p-[2px]"
                style={{
                  display: chat?.sender !== user.username ? "none" : "box",
                }}
              >
                unseen
              </span>
            </div>
          </>
        ) : (
          <RoomJoinMessage joinder={chat?.sender} />
        )}
      </>
    );
  };

  const RoomJoinMessage = ({ joinder }) => (
    <div className=" flex flex-row justify-center items-center ">
      <Divider className="flex-1 bg-slate-100" />{" "}
      <p className="text-gray-400 text-[10px] p-[2px] w-fit text-center">
        User {joinder} is joined the room.
      </p>
      <Divider className="flex-1 bg-slate-100" />
    </div>
  );

  const sendMessage = (reciver, message) => {
    console.log(message);
    // socket.emit("sendMessage", { reciver, message });
  };

  // Function to add a key with an array value dynamically
  const addKeyToArrayValue = (key, value) => {
    dispatch(setValueLevel2([key, value]));
    // setChatsData((prevObject) => {
    //   // Use spread operator to create a copy of the previous object
    //     return {
    //       ...prevObject,
    //       [key]:[...(prevObject[key] || []), value],
    //     };
    //   }
    // );
  };

  useEffect(() => {
    socket.on("recive", (data) => {
      addKeyToArrayValue(data.reciver, data.message);
    });
    socket.on("join-room-event", (data) => {
      console.log(data);
      // chatData[selecteduser?.name].push({ sender:data.room, message:"user joined room"})
    });
  }, []);

  function getUsername(){
    return selecteduser?.name || selecteduser[1]?.username
  }

  return (
    <div className="flex-1 h-screen overflow-clip">
      <div className="fixed top-0 w-1/2 p-3  ml-7 flex align-middle z-10 bg-white ">
        <User
          name={getUsername()}
          description="number of user connected "
        />
      </div>
      <div className="w-full overflow-y-scroll bg-slate-200 h-full mt-10 relative">
        <div className="bg-white p-9 flex flex-col">
          {(chatData[getUsername()] || []).map((chat, key) => (
            <Message chat={chat} key={key} type={chat.type} />
          ))}
        </div>
        <div className="fixed bottom-3 w-1/2  ml-7 flex align-middle z-10">
          <Input
            size="lg"
            name="name"
            ref={inptRef}
            placeholder="Enter your message"
            endContent={
              <Button
                isIconOnly
                variant="light"
                onPress={() => {
                  if (!getUsername()) return;
                  messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                  let msg = {
                    sender: user.username,
                    message: inptRef.current.value,
                  };
                  addKeyToArrayValue(getUsername(), msg);
                  sendMessage(getUsername(), msg);
                }}
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-kunai-martial-arts-flaticons-lineal-color-flat-icons.png"
                  alt="external-kunai-martial-arts-flaticons-lineal-color-flat-icons"
                />{" "}
              </Button>
            }
          />
        </div>
        <div className="p-20" ref={messagesEndRef}></div>
      </div>
    </div>
  );
}
