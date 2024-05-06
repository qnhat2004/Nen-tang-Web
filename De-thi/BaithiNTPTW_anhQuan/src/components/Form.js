import { React, useState } from "react";
import "../assets/css/Form.css";

function Form(props) {
  const [tieuDe, setTieuDe] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [textarea, setTextarea] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tieuDe.trim() === "") {
      alert("Nhập tiêu đề");
      return;
    }

    if (name.trim() === "") {
      alert("Nhập tên");
      return;
    }

    if (email.trim() === "") {
      alert("Nhập email");
      return;
    }

    if (phone.trim() === "") {
      alert("Nhập điện thoại");
      return;
    }

    if (location.trim() === "") {
      alert("Nhập địa chỉ");
      return;
    }

    if (textarea.trim() !== "") {
      alert("Nhập nội dung");
      return;
    }

    if (!checkbox) {
      alert("Please accept the terms of use and privacy policy");
      return;
    }

    // Clear the form fields
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    // setCheckbox(false);
  };
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <div className="s1-footer_l">
            <h2>Phòng hành chính tổng hợp</h2>
            <p>Địa chỉ: Nhà C1-114, 215, 217</p>
            <p>Điện thoại: 0243. 8696099/0243.8692222</p>
            <p>Email: hcth@hust.edu.vn</p>
          </div>
          <div className="s1-footer_l">
            <h2>Phòng hành chính tổng hợp</h2>
            <p>Địa chỉ: Nhà C1-114, 215, 217</p>
            <p>Điện thoại: 0243. 8696099/0243.8692222</p>
            <p>Email: hcth@hust.edu.vn</p>
          </div>
          <div className="s1-footer_l">
            <h2>Phòng hành chính tổng hợp</h2>
            <p>Địa chỉ: Nhà C1-114, 215, 217</p>
            <p>Điện thoại: 0243. 8696099/0243.8692222</p>
            <p>Email: hcth@hust.edu.vn</p>
          </div>
        </div>

        <form className="footer-right" onSubmit={handleSubmit}>
          <div className="form">
            <h1 className="text-h1">Gửi phản hồi</h1>
            <div className="h1-form">
              <div className="input-form">
                <select>
                  <option>Chủ đề bạn quan tâm</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <div className="name-form">
                  <input
                    className="tieude"
                    type="text"
                    placeholder="Tiêu đề"
                    value={tieuDe}
                    onChange={(e) => setTieuDe(e.target.value)}
                  />
                </div>
                <div className="name">
                  <input
                    className="name"
                    type="text"
                    placeholder="Họ và tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="email-form">
                    <input
                      className="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <input
                    className="phone"
                    type="phone"
                    placeholder="Điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="location"
                    type="text"
                    placeholder="Địa chỉ"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <textarea
                className="text-area"
                type="text"
                placeholder="Nội dung"
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
              />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                checked={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
              />
              <label>Tôi không phải người máy</label>
            </div>
            <div className="btn-form">
              <button className="btn-reset" type="reset">
                Nhập lại
              </button>
              <button className="btn-signup" type="submit">
                Gửi đi
              </button>
            </div>
          </div>
        </form>
      </footer>
    </>
  );
}

export default Form;
