import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/music">Music</Link>
    </div>
  );
};

export default Home;
