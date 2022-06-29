import { Header } from "../Components/Header";
import { Sideber } from "../Components/Sidebar";
import { Video } from "../Components/Video";

export function Event() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 min-h-screen">
        <Video />
        <Sideber />
      </main>
    </div>
  );
}
