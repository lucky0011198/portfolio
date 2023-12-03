import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Spacer} from "@nextui-org/react";

export default function CustomCard({title,content,index,link,icon}) {
  return (
    <Card className="min-w-[300px] min-h-full">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={icon}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <Divider/>
      <CardFooter className="h-14">
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
