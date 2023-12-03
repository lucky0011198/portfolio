import React, { memo, useEffect } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default memo(function Init() {
  const [selected, setSelected] = React.useState("login");
  const [error, setError] = React.useState("");


  const navigate = useNavigate();

  const onSubmitForm = async (username, email, password, type) => {
    try {
      const response = await fetch(`http://localhost:2001/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        if (type === "login") {
          const data = await response.json();
          const token = data.token;

          // Store the token in sessionStorage or a state management solution (Redux, Context API, etc.)
          
          sessionStorage.setItem("token", token);
        }else{
          setSelected("login");
        }
        console.log(`${type} successful!`);
        navigate("/");
      } else {
        // Handle specific error cases if needed
        const data = await response.json();
        setError(data.message)
        console.error(`${type} failed:`, data.message)

      }
    } catch (error) {
      console.error(`Error during ${type}:`, error);
    } finally {
    }
  };

  const onAction = (event) => {
    event.preventDefault();
      if (selected === "login") {
        onSubmitForm(
          event.target[0].value,
          "",
          event.target[1].value,
          selected
        );
      } else if (selected == "register") {
        onSubmitForm(
          event.target[0].value,
          event.target[1].value,
          event.target[2].value,
          selected
        );
      }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      console.log("User is already logged in.");
      navigate("/");
    }
  });

  return (
    <div className="flex w-screen h-screen place-items-center justify-center">
      <Card className="max-w-full w-[340px] h-[400px] flex-col justify-center">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(value) => setSelected(value)}
          >
            <Tab key="login" title="Login">
              <form onSubmit={onAction} className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("register")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="submit"
                    variant="solid"
                    fullWidth
                    color="primary"
                    className="border-spacing-0 outline-none"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            {/* registartion */}
            <Tab key="register" title="Sign up">
              <form
                onSubmit={onAction}
                className="flex flex-col gap-4 h-[300px]"
              >
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  errorMessage={error}
                  type="text"
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="submit"
                    fullWidth
                    className="outline-0"
                    variant="solid"
                    color="primary"
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
});
