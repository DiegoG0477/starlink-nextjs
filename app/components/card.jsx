import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className="store-card">
      <Image src={props.image} alt="" width={300} height={780}/>
      <h3>{props.title}</h3>
      <p class="price">${props.price}</p>

    <Link href={`/store/${props.id}`}>
    <button className="white-button">
              CONSULTAR DISPONIBILIDAD
     </button>
     </Link>


    </div>
  );
}
