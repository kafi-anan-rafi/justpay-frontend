import Image from "next/image";
import React from "react";

function Home() {
  const [like, setLike] = React.useState(0);
  const nextImageURL = 'next.svg';
  const vercelImageURL = 'vercel.svg';

  const handleClick = () => {
    setLike(like + 1);
  }
  return (
    <>
      <h1>Hello World</h1>
      <h5>This is a Next.js course!</h5>
      <button style={{ cursor: "pointer" }} onClick={handleClick}>Like</button>
      <p>You have <strong style={{ color: "red" }}>{like} </strong>likes</p>
      <Image src={nextImageURL} width={100} height={200} style={{ marginRight: 30 }} />
      <Image src={vercelImageURL} width={100} height={200} />
    </>
  )
}
export default Home;