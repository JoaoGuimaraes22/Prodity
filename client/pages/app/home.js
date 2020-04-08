import { handleAuthSSR } from "../../src/auth/auth";

const Home = ({ test, data }) => {
  return (
    <>
      <p>Hello</p>
      <p>{test}</p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Fetch data from external API
  const res = await handleAuthSSR(ctx, "/api/v1/auth/todos");
  const data = await res.data;

  return { props: { test: "Worked", data: data } };
}

export default Home;
