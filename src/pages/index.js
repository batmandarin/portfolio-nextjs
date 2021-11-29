import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import useSWR from "swr";
import Loading from "../components/Loading/Loading";
import Failing from "../components/Failing/Failing";
import Header from "../components/Header/Header";
import Testimonial from "../components/Testimonials/Testimonial";

const githubAPIEndpoint = "https://api.github.com/users/kuri-sun";

// define fetcher.
let fetcher = (...url) => fetch(...url).then((r) => r.json());

const Home = () => {
  // useSWR ( i want to use getServerSide rendering but i want to improve user-experience while loading... )
  // and this is really nice caching features pretty..!!
  const { data: data_1, error: error_1 } = useSWR("/api/projects", fetcher);
  const { data: data_2, error: error_2 } = useSWR(githubAPIEndpoint, fetcher);

  if (error_1 || error_2)
    return (
      <Layout>
        <Failing />
      </Layout>
    );
  if (!data_1 || !data_2)
    return (
      <>
        <Header />
        <Loading />
      </>
    );

  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects products={data_1.data} />
      <Testimonial />
      <Technologies />
      <Timeline />
      <Acomplishments data={data_2} />
    </Layout>
  );
};

export default Home;
