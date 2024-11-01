import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState({src: "images/pic1.jpg", alt: "Closeup of a human eye"});
  const imgs = [
    {src: "images/pic1.jpg", alt: "Closeup of a human eye"},
    {src: "images/pic2.jpg", alt: "Rock that looks like a wave"},
    {src: "images/pic3.jpg", alt: "Purple and white pansies"},
    {src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb"},
    {src: "images/pic5.jpg", alt: "Large moth on a leaf"}
  ]

  function handleClickDarkButton() {
    console.log("click");
    
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
          
     <div className="overlay">

     </div>
        <button onClick={handleClickDarkButton} className="dark">Darken</button>
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

