import { gql } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql``;

export function Sideber() {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 border-b border-gray-500 border">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        <Lesson
          title="Aula 1"
          avaliableAt={new Date()}
          slug="true"
          type="live"
        />
        {/* <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson /> */}
      </div>
    </aside>
  );
}
