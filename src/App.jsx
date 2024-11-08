import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState({src: "images/pic1.jpg", alt: "Closeup of a human eye"});
  const [bgc, setBgc] = useState("darken");
  const imgs = [
    {src: "images/pic1.jpg", alt: "Closeup of a human eye"},
    {src: "images/pic2.jpg", alt: "Rock that looks like a wave"},
    {src: "images/pic3.jpg", alt: "Purple and white pansies"},
    {src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb"},
    {src: "images/pic5.jpg", alt: "Large moth on a leaf"}
  ]
  const overlay=document.querySelector(".overlay");

  function handleClickDarkButton() {
    console.log("click");
    if(bgc==="darken"){
      setBgc("lighten");
      overlay.style.backgroundColor='rgba(0, 0, 0, 0.5)';
    } else {
      setBgc("darken");
      overlay.style.backgroundColor='rgba(0, 0, 0, 0)';
    }
  }
  

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={url.src}
          alt={url.alt}
        />
          
        <div className="overlay"></div>

        <button onClick={handleClickDarkButton} 
        // handleClickDarkButton呼び出すとき()つけなくていいのはなんで
          className="dark">{bgc}
        </button>
        
      </div>
      <div className="thumb-bar">
        {imgs.map((img, index) => {
          // console.log(img,index)
          return (
            <img onClick={()=>{
              console.log("click", img);
              setUrl(img);

            }} key={index} src={img.src} alt={img.alt} />
         );
         //現在表示されている画像は選択できないように変更したいンゴねぇ
        })}
      </div>
    </>
  );
}

