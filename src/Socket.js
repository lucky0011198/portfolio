import React from "react";
import io from "socket.io-client";
import { createContext } from "react";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
      const newSocket = io("http://localhost:2001", {
        autoConnect: false,
      });
      console.log("Connects")
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;