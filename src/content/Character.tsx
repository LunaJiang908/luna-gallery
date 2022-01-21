import { Image } from "antd";
import { useState } from "react";

const TotalNum = 10;
const ImagesPath: string[] = [];

for (let i = 1; i <= TotalNum; i++) {
  ImagesPath.push(`/images/character/${i}.jpg`);
}

function ImageList() {
  return (
    <div className="w-10/12 mx-auto">
      {ImagesPath.map((imageUrl) => (
        <Image className="my-10" src={imageUrl} />
      ))}
    </div>
  );
}

function Character() {
  return (
    <>
      <ImageList />
    </>
  );
}

export default Character;
