import style from "./style.module.css";
import Button from "./../Button";
import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <div className={style.hero} id="home">
        <div className={style.col_1}>
          <div>
            <h1>
              <u>Creativity & Imagination</u>
              <br />
              are the world&apos;s greatest weapons <br/>on this planet
              <br />
              <b>We have them in abundance</b><br/>
              <i>Have us to grow your business</i>
            </h1>
            <Button text="Start" icon="Send" />
          </div>
        </div>
        <div className={style.col_2}>
          <div>
            <Image src="/images/img-1.png" width={280} height={170} alt="" />
            <Image src="/images/img-2.jpg" width={280} height={170} alt="" />
          </div>
          <Image src="/images/img-3.jpg" width={588} height={350} alt="" />
        </div>
      </div>
    </div>
  );
}
