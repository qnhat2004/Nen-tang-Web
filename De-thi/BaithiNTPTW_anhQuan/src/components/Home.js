import React from "react";
import Header from "./Header";
import "../assets/css/Home.css";
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/img2.png";
const Home = () => {
  return (
    <>
      <Header />
      <div className="container-main">
        <div className="f-content">
          <img src={Img1} alt="/" />
          <p>THÁNG THANH NIÊN - Ngọn lửa của SỨC TRẺ cháy mãi</p>
        </div>
        <div className="s-content">
          <img className="mb-[12px]  " src={Img2} alt="/" />
          <img src={Img2} alt="/" />
        </div>
        <div className="t-content">
          <p>Gặp 2 nữ sinh Bách Khoa đoạt giải "Nữ sinh KHCN Việt Nam 2022</p>
          <hr />
          <p>THÁNG THANH NIÊN - Ngọn lửa của SỨC TRẺ cháy mãi</p>
          <hr />
          <p>Sinh viên Bách khoa Hà Nội giành giải nhất, nhì SV StartUP</p>
          <hr />
          <p>Tuyên dương SV5T-Tập thể SV5T và Sao tháng giêng 2022</p>
          <hr />
          <p>
            Sinh viên Bách khoa Hà Nội thi chung kết SV StartUP2: Nỗ lực vì
            tấm...
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Home;
