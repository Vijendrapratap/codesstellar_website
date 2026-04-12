import Hero from '../components/Hero';
import NetworkStats from '../components/NetworkStats';
import BentoFeatures from '../components/BentoFeatures';
import Scrollytelling from '../components/Scrollytelling';
import TechStack from '../components/TechStack';
import Partners from '../components/Partners';
import UserPathways from '../components/UserPathways';

export default function Home() {
  return (
    <>
      <Hero />
      <NetworkStats />
      <BentoFeatures />
      <Scrollytelling />
      <TechStack />
      <Partners />
      <UserPathways />
    </>
  );
}
