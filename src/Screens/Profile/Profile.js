import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import Info from "../../DynamicData/Content";
import { useDispatch, useSelector } from "react-redux";
import {
  Chip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const Profile = () => {
  const { data } = useSelector((state) => state).todo;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div>
          <div id="About" className={styles["profile-header"]}>
            <h1 className="text-xl font-semibold">About me</h1>
          </div>
          <section className={styles["profile-section"]}>
            <div className={styles["col"]}>
              {/* <h2>Laxmikant Varkal</h2> */}
              <p>{data?.about || Info.about}</p>
            </div>
          </section>
        </div>
        {/* <img style={{backgroundColor:'red'}} width="10%" height="10%" src="https://i.pinimg.com/564x/58/98/ee/5898ee814db9ab73f9eadaf894bee4bd.jpg" alt="arrow"/> */}
      </div>

      <section className={styles["profile-section"]}>
        <div className={styles["col-skills"]}>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className={styles["sub-header"]}>Experience</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <table>
                <tr>
                  <td>Company</td>
                  <td> Cumulus System</td>
                </tr>
                <tr>
                  <td>Designation</td>
                  <td>Associate Software Engineer</td>
                </tr>
                <tr>
                  <td>Experience</td>
                  <td>1+ Years</td>
                </tr>
              </table>
            </CardBody>
          </Card>
        </div>
        <br></br>
        <div className={styles["col-skills"]}>
          <p className={styles["sub-header"]} style={{ marginLeft: 5 }}>
            Skills
          </p>
          <br></br>
          <div className="flexRow">
            {(data?.skills || Info.skills).map((name) => (
              <Chip
                radius="sm"
                classNames={{
                  base: "bg-gradient-to-br from-blue-500 to-green-500 border-small border-white/50 shadow-pink-500/30",
                  content: "drop-shadow shadow-black text-white",
                }}
                variant="faded"
              >
                {name}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ display: "flex", flexDirection: "column" }}
        className={styles["profile-section"]}
      >
        <p>Resume</p>
        <iframe
          title="resume"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            alignSelf: "center",
          }}
          width="100%"
          height="300"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F68lXMAhKvJtwJ9vWXUuN5S%2FCV-%252F-Resume-(Community)%3Ftype%3Ddesign%26node-id%3D1%253A2%26mode%3Ddesign%26t%3DGFYlrczx7GexOfk4-1"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default Profile;
