import style from "./style.module.css";
import Image from "next/image";
export default function Services() {
  const itemServices = [
    {
      id: 1,
      image: "graphic-design.png",
      title: "Graphic Designing",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
    {
      id: 2,
      image: "brand-strategy.png",
      title: "Branding Strategy",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
    
    {
      id: 3,
      image: "illustration.png",
      title: "Illustration",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
    {
      id: 4,
      image: "animation.png",
      title: "Animation",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
    {
      id: 5,
      image: "video.png",
      title: "Video Presentation",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
    {
      id: 6,
      image: "voice-over.png",
      title: "Voice Over",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
    {
      id: 7,
      image: "web-design.png",
      title: "Web Design",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
    {
      id: 8,
      image: "creative-writing.png",
      title: "Creative Writing",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
    {
      id: 9,
      image: "presentation.png",
      title: "Presentation",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, cum placeat est quae id ratione, illum quo quidem deserunt repellat consectetur accusantium aspernatur dolore et nobis at hic nam exercitationem porro necessitatibus perspiciatis eveniet.",
    },
  ];
  return (
    <>
      <div className={style.services} id="services">
        <h2>
          <b>
            A <u>One-Stop-Design-Studio</u>
          </b>
          <br />
          For all of your designing needs
        </h2>
        <div className={style.services_content}>
          {itemServices.map((item) => (
            <div className={style.box_service} key={item.id}>
              <Image
                src={`/images/${item.image}`}
                height={20}
                width={20}
                alt="Image"
              />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
