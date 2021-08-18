import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import axios from 'axios';
import { createClient } from 'contentful'

// contentful api
const client = createClient({
  space: process.env.SPACE_KEY,
  accessToken: process.env.ACCESS_TOKEN_CONTENTFUL,
})


export const getStaticProps = async (ctx) => {
  // github api
  const res = await axios.get('https://api.github.com/users/kuri-sun')
  const data = await res.data

  // contentful api
  const resFromContentful = await client.getEntries({ content_type: 'projects' })

  return {
    props: {
      data: data,
      content: resFromContentful,
    }
  }
}


const Home = ({ data, content }) => {
  const products = content.items;

  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects products={products} />
      <Technologies />
      <Timeline />
      <Acomplishments data={data} />
    </Layout>
  );
};

export default Home;
