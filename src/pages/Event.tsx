import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";
import { Video } from "../Components/Video";
import { useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 min-h-screen">
        {slug ? (
          <Video slug={slug} />
        ) : (
          <div className="flex-1">
            <div className="bg-black flex justify-center">
              <div className="b-full w-full max-w-[1100px] max-h-[60vh] mt-4">
                <strong className="mt-4 text-gray-200 leading-relaxed font-bold text-2xl block">
                  Selecione uma aula
                </strong>
              </div>
            </div>
          </div>
        )}

        <Sidebar />
      </main>
    </div>
  );
}
