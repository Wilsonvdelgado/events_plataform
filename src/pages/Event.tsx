import { Header } from "../Components/Header";
import { Sideber } from "../Components/Sidebar";
import { Video } from "../Components/Video";
import { useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 min-h-screen">
        {slug ? <Video /> : <div className="flex-1"></div>}

        <Sideber />
      </main>
    </div>
  );
}
