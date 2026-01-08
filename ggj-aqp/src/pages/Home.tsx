import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import CountdownSection from '../components/home/CountdownSection';
import AboutSection from '../components/home/AboutSection';
import RegistrationStepsSection from '../components/home/RegistrationStepsSection';
import ScheduleSection from '../components/home/ScheduleSection';
import CallToActionMid from '../components/home/CallToActionMid';
import LocationSection from '../components/home/LocationSection';
import BenefitsSection from '../components/home/BenefitsSection';
import TeamSection from '../components/home/TeamSection';
import SponsorsSection from '../components/home/SponsorsSection';
import FaqSection from '../components/home/FaqSection';
import FinalCallToAction from '../components/home/FinalCallToAction';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <CountdownSection />
            <AboutSection />
            <RegistrationStepsSection />
            <ScheduleSection />
            <CallToActionMid />
            <LocationSection />
            <BenefitsSection />
            <TeamSection />
            <SponsorsSection />
            <FaqSection />
            <FinalCallToAction />
            <Footer />
        </>
    );
};

export default Home;
