import { Parallax, Background } from 'react-parallax';



const Cover = ({img , title, details}) => {
  return (

    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div>
      <div
        className="hero min-h-[600px]"
       
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
            {details}
            </p>
           
          </div>
        </div>
      </div>
    </div>
</Parallax>
   
  );
};

export default Cover;
