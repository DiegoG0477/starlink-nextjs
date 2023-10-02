import Image from "next/image";

export default function TwoBtnFeature(props) {
  return (
    <div class="left-feature">
      <Image src={props.image} alt="" width="683px" height="350px" />
      <div class="info">
        <h1>
            {props.title}
        </h1>

        <div class="description-box">
            <p>
                {props.description}
            </p>
        </div>

        <div class="mobile-buttons">
          <button>{props.buttonTextOne}</button>
          <button>{props.buttonTextTwo}</button>
        </div>
      </div>
    </div>
  );
}
