import React from "react";
import pandaPond from "../assets/pandaPond.png";

function Owner() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-4xl mt-10">03_Pond_GenMateC</h2>
      <img src={pandaPond} alt="Pond" className="w-[500px] m-4" />
      <div className="mt-3 text-center">
        <h3 className="font-bold text-2xl">Short Biography:</h3>
        <p className="mt-3 text-lg">
          สวัสดีครับ ผมชื่อ 03_Pond_GenMateC แพนด้าสีชมพูจาก GenMateC
          เบื่อแล้วเรียนกังฟู เลยขอท่านอาจารย์มาเรียนเขียนโค๊ด
        </p>
      </div>
    </div>
  );
}

export default Owner;
