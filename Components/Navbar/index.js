import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <div>
      <nav className={style.nav}>
        <a href="#">DzynFox</a>
        <OutsideClickHandler onOutsideClick={() => setOffCanvas(false)}>
          <Image
            src="/images/logo.png"
            height={32}
            width={32}
            style={{ cursor: "pointer" }}
            alt=""
          />
        </OutsideClickHandler>
        <Image
          src="/images/menu.svg"
          height={32}
          width={32}
          style={{ cursor: "pointer" }}
          alt=""
          onClick={() => setOffCanvas(true)}
        />
      </nav>
      <div className={`${style.canvas_menu} ${offCanvas ? style.active : ""}`}>
        <div className={style.close_icon}>
          <Image
            src="/images/close.svg"
            height={32}
            width={32}
            alt=""
            onClick={() => setOffCanvas(false)}
          />
        </div>
        <div className={style.canvas_content}>
          <div className={style.social}>
            <h4>Social</h4>
            <div>
              <p>
                <Image
                  src="/images/Instagram.svg"
                  height={32}
                  width={32}
                  alt=""
                />
                <span>&nbsp; Instagram</span>
              </p>
              <p>
                <Image
                  src="/images/Twitter.svg"
                  height={32}
                  width={32}
                  alt=""
                />
                <span>&nbsp; Twitter</span>
              </p>
              <p>
                <Image
                  src="/images/Youtube.svg"
                  height={32}
                  width={32}
                  alt=""
                />
                <span>&nbsp; Youtube</span>
              </p>
              <p>
                <Image
                  src="/images/Facebook.svg"
                  height={32}
                  width={32}
                  alt=""
                />
                <span>&nbsp; Facebook</span>
              </p>
              <p>
                <Image
                  src="/images/Dribbble.svg"
                  height={32}
                  width={32}
                  alt=""
                />
                <span>&nbsp; Dribbble</span>
              </p>
              <p>
                <Image
                  src="/images/Linkedin.svg"
                  height={32}
                  width={32}
                  alt=""
                />
                <span>&nbsp; Linkedin</span>
              </p>
            </div>
          </div>
          <div className={style.menu}>
            <h4>Menu</h4>
            <p style={{ marginTop: 0 }}>
              <a href="#home" onClick={() => setOffCanvas(false)}>
                Home
              </a>
            </p>
            <p>
              <a href="#services" onClick={() => setOffCanvas(false)}>
                Services
              </a>
            </p>
            <p>
              <a href="#projects" onClick={() => setOffCanvas(false)}>
                Projects
              </a>
            </p>
            <p>
              <a href="#clients" onClick={() => setOffCanvas(false)}>
                Clients
              </a>
            </p>
          </div>
        </div>
        <div className={style.email}>
          <p>Get in touch</p>
          <h2>
            <u>info@landweb.com</u>
          </h2>
        </div>
      </div>
    </div>
  );
}
