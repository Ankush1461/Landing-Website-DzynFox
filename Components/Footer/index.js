import style from "./style.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_item}>
        <div>
          <div>
            <Image src="/images/logo.png" height={100} width={100} alt="" />
            <h2>DzynFox</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quisquam earum, illo quod quaerat reiciendis, nemo
            adipisci quia fugit possimus nisi corrupti fugiat voluptates porro
            harum culpa, asperiores deserunt sequi!
          </p>
        </div>
        <div>
          <div>
            <h4>
              <u>Support</u>
            </h4>
            <p>Help Center</p>
            <p>Account Information</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h4>
              <u>Social Media</u>
            </h4>
            <p>Instgram</p>
            <p>facebook</p>
            <p>LinkedIn</p>
            <p>Dribbble</p>
            <p>Twitter</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
      <div className={style.footer_terms}>
        <p>Copyright &copy; 2022 DzynFox</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
}
