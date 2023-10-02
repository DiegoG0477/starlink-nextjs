import Image from "next/image";

export default function LeftFeature(props){
  // title, description, buttonText, image
    return(
        <>
        <div className="left-feature">
        <Image src={props.image} alt="" width="683px" height="350px" />
        <div className="info">
          <h1>
            {props.title}
          </h1>

          <div className="description-box">
            <p>
              {props.description}
            </p>
          </div>

          <button>{props.buttonText}</button>
        </div>
      </div>
        </>
    );
}