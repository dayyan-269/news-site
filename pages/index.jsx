import Head from "next/head";

import PrimaryButton from "@/components/Button/PrimaryButton";
import ImagelessNews from "@/components/Items/ImagelessNews";
import RegularNews from "@/components/Items/RegularNews";
import NewsSection from "@/components/NewsSection/NewsSection";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/Footer";

export default function Home({ recentNews, regularNews }) {
  return (
    <>
      <Head>
        <title>news.tv</title>
        <meta name="description" content="a simple news site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-8/12 flex flex-col gap-3 mx-auto">
            <h1 className="prose-xl font-semibold">Highlight</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-8">
              {regularNews.map((news, index) => {
                return <RegularNews key={index} imgUrl={news.imgUrl} />;
              })}
            </div>
          </div>
          <div className="lg:w-4/12 flex flex-col mx-auto">
            <h1 className="prose-xl font-semibold mb-2">Recent News</h1>
            {recentNews.length > 0 ? (
              <>
                {recentNews.map((news, index) => {
                  return <ImagelessNews key={index} time={news.time} />;
                })}
                <PrimaryButton className="border-secondary-color text-secondary-color hover:bg-secondary-color hover:text-white mt-2 shadow">
                  More News
                </PrimaryButton>
              </>
            ) : (
              <span className="text-center">Nothing to show</span>
            )}
          </div>
        </Section>
        <Section className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-5 mt-10">
          <NewsSection title="Daily News">
            {recentNews.map((news, index) => {
              return <ImagelessNews key={index} time={news.time} />;
            })}
          </NewsSection>
          <NewsSection title="Special Articles">
            {recentNews.map((news, index) => {
              return <ImagelessNews key={index} time={news.time} />;
            })}
          </NewsSection>
          <NewsSection title="Indepth Report">
            {recentNews.map((news, index) => {
              return <ImagelessNews key={index} time={news.time} />;
            })}
          </NewsSection>
        </Section>
        <Section className="flex flex-col gap-y-3 mt-10">
          <div className="flex flex-row justify-between items-center">
            <h1 className="prose-xl font-semibold">Other Articles</h1>
            <PrimaryButton className="border-secondary-color text-secondary-color hover:bg-secondary-color hover:text-white">
              Read More
            </PrimaryButton>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-8">
            {regularNews.map((news, index) => {
              {
                if (index < 3) {
                  return <RegularNews key={index} imgUrl={news.imgUrl} />;
                }
              }
            })}
          </div>
        </Section>
        <Section className="mt-20">
          <Footer />
        </Section>
      </main>
    </>
  );
}

const getRegularNews = async () => {
  return [
    { imgUrl: "/img/stock-1.jpg" },
    { imgUrl: "/img/stock-2.jpg" },
    { imgUrl: "/img/stock-3.jpg" },
    { imgUrl: "/img/stock-4.jpg" },
  ];
};

const getRecentNews = async () => {
  return [
    { time: "11:30 PM" },
    { time: "13:40 PM" },
    { time: "12:00 PM" },
    { time: "12:15 PM" },
    { time: "12:35 PM" },
  ];
};

export const getStaticProps = async () => {
  const recentNews = await getRecentNews();
  const regularNews = await getRegularNews();

  return {
    props: {
      recentNews,
      regularNews,
    },
  };
};
