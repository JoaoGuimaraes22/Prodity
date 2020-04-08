import { handleAuthSSR } from "../../src/auth/auth";

const Home = ({ props }) => {
  return (
    <>
      <p>Hello</p>
      <p>{JSON.stringify(props.test)}</p>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Fetch data from external API
  const res = await handleAuthSSR(ctx);
  const data = await res.json();

  return { props: { test: "Worked", data: data } };
}

export default Home;
