import { handleAuthSSR } from "../../src/auth/auth";
import Layout from "../../src/components/app/layout/layout";

const Home = ({ test, data }) => {
  return (
    <>
      <Layout>
        <p>Hello</p>
        <p>{test}</p>
        <p>{JSON.stringify(data)}</p>
      </Layout>
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
