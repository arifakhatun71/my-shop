import { Faculty_Glyphic } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello I am next-js developer </h1>
      <Image src="/rose.jpg" width={500} height={300}></Image>
      <Image src="/2.jpg" width={500} height={300}></Image>
      <Image src="/pexels.jpg" width={500} height={300}></Image>
    </div>

  );
}
