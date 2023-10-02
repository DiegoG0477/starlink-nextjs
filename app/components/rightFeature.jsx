import Image from "next/image";

export default function RightFeature(props) {
  // title, description, buttonText, image
  return (
    <>
      <div class="right-feature">
        <div class="info">
          <h1>
            {props.title}
          </h1>

          <div class="description-box">
            <p>
              {props.description}
            </p>
          </div>

          <button>{props.buttonText}</button>
        </div>
        <Image src={props.image} alt="" width="683px" height="350px" />
      </div>
    </>
  );
}
