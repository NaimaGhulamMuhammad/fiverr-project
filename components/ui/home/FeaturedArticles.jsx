import React from "react";
import ArticleCard from "./homeComponents/ArticleCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const articles = [
  {
    id: "3",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10044330/Kapan-Sebaiknya-Terapi-Akupuntur-Kaki-Dilakukan_.jpg.webp",
    headline: "When should foot acupuntur theraphy be done?",
    tagId: ["26", "27", "28"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-03T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "4",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10043039/Perbedaan-Molnupiravir-dan-Paxlovid-dalam-Mengatasi-COVID-19.jpg.webp",
    headline:
      "Difference between Molnupiravir and Paxlovid in coping with COVID-19",
    tagId: ["2"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-04T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "5",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10034207/Cara-Mencegah-Depresi-yang-Dapat-Terjadi-saat-Bekerja.jpg.webp",
    headline: "How to prevent depression that can occur at work",
    tagId: ["7", "8"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-05T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "6",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/08033559/Berbagai-Manfaat-Buah-Pir-untuk-Kesehatan-Tubuh.jpg.webp",
    headline: "Various benefits of pears for body health",
    tagId: ["1", "3", "4"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-06T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "7",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10043039/Perbedaan-Molnupiravir-dan-Paxlovid-dalam-Mengatasi-COVID-19.jpg.webp",
    headline: "Lockdown due to COVID-19",
    tagId: ["8", "15"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-07T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "8",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10043039/Perbedaan-Molnupiravir-dan-Paxlovid-dalam-Mengatasi-COVID-19.jpg.webp",
    headline: "Get vaccinated to cope with COVID-19",
    tagId: ["16"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-08T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "9",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10043039/Perbedaan-Molnupiravir-dan-Paxlovid-dalam-Mengatasi-COVID-19.jpg.webp",
    headline: "Effective ways to deal with COVID-19",
    tagId: ["1", "4"],
    author: "Benny Dong",
    lastUpdatedAt: "2021-12-09T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "10",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10043039/Perbedaan-Molnupiravir-dan-Paxlovid-dalam-Mengatasi-COVID-19.jpg.webp",
    headline: "10 daily practices to cope with COVID-19",
    tagId: ["1", "3"],
    author: "Elisa Kwok",
    lastUpdatedAt: "2021-12-10T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "11",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10034815/4-tips-sederhana-memulai-kebiasaan-hidup-sehat-halodoc.jpg.webp",
    headline: "4 simple things to start healthy living habits Part 2",
    tagId: ["29", "32"],
    author: "Ada Wong",
    lastUpdatedAt: "2021-12-11T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "12",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10035136/Kucing-Peliharaan-Sering-Bersin-Ini-X-Penyebab-yang-Perlu-Diketahui.jpg.webp",
    headline: "Cat sneezes? This 6 causes you need to know Part 2",
    tagId: ["3", "4"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-12T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "13",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10044330/Kapan-Sebaiknya-Terapi-Akupuntur-Kaki-Dilakukan_.jpg.webp",
    headline: "When should foot acupuntur theraphy be done? Part 2",
    tagId: ["2", "5"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-13T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "14",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/10034207/Cara-Mencegah-Depresi-yang-Dapat-Terjadi-saat-Bekerja.jpg.webp",
    headline: "How to prevent depression that can occur at work Part 2",
    tagId: ["1", "8"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-14T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
  {
    id: "15",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/08033559/Berbagai-Manfaat-Buah-Pir-untuk-Kesehatan-Tubuh.jpg.webp",
    headline: "Various benefits of pears for body health Part 2",
    tagId: ["1", "6", "14"],
    author: "Alex Chan",
    lastUpdatedAt: "2021-12-15T08:10:00Z",
    content:
      "It was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.\n\nIt was identified in two test samples taken in the country between 19 and 23 November, which is before the variant was first reported by South Africa.\n\nIt is not clear whether those who took the tests had visited southern Africa.\n\nIt was previously thought that two flights that arrived from South Africa on Sunday had brought the first cases of the variant to the Netherlands.\n\nFourteen people on the flights to the capital, Amsterdam, tested positive for Omicron, among 61 passengers who were found to have coronavirus.\n\nEarly evidence suggests Omicron has a higher re-infection risk. But scientists say it will take about three weeks before it is known how the heavily mutated variant impacts on the effectiveness of vaccines.",
  },
];
const FeaturedArticles = () => {
  return (
    <div className="mb-4 font-general">
      <div className="font-title text-sectionHead mb-2 py-2 px-4">
        Featured Articles
      </div>
      <div className="flex w-full overflow-x-auto snap-x md:justify-between pb-4 pl-4">
        {articles.map((article, idx) => {
          if (idx < 5)
            return <ArticleCard key={article.id} article={article} />;
        })}
        <div className="h-full flex flex-col items-center justify-center self-center ml-4 mr-8 w-40 text-typo">
          <span className="px-4 mb-2">
            <BsFillArrowRightCircleFill size="40px" color="#7BDFF2" />
          </span>
          View All
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
