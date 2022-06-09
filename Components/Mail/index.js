import style from "./style.module.css";

export default function Mail() {
  return <div className={style.mail}>
      <h1>Let&apos;s Talk</h1>
      <div className={style.email_box}>
          <input type="text" placeholder="name@email.com"/>
          <button>Get Started</button>
      </div>
  </div>;
}
