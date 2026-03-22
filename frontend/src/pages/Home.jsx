import HeroSlider            from "../components/home/HeroSlider";
import StatsBar              from "../components/home/StatsBar";
import SchoolIntroAndPrincipal from "../components/home/SchoolIntro";
import MissionVision         from "../components/home/MissionVision";
import WhyChooseUs           from "../components/home/WhyChooseUs";
import NoticeBoard           from "../components/home/NoticeBoard";
import Testimonials          from "../components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <StatsBar />
      <SchoolIntroAndPrincipal />
      <MissionVision />
      <WhyChooseUs />
      <NoticeBoard />
      <Testimonials />
    </main>
  );
}