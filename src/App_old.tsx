import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSON_QUERYS = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}
function App() {
  // useEffect(() => {
  //   client.query({ query: GET_LESSON_QUERYS }).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  const { data } = useQuery(GET_LESSON_QUERYS);

  console.log(data);

  return (
    <>
      <h1 className="title">Titulo da app</h1>
      <ul>
        {data?.lessons.map((lesson: Lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
