import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import RegistrationHero from '../components/registration/RegistrationHero';
import RequirementsSection from '../components/registration/RequirementsSection';
import RegistrationStepper from '../components/registration/RegistrationStepper';
import InstructionNotice from '../components/registration/InstructionNotice';
import FinalVerificationCTA from '../components/registration/FinalVerificationCTA';

const Inscripcion = () => {
    return (
        <>
            <Navbar />
            <RegistrationHero />
            <RequirementsSection />
            <RegistrationStepper />
            <InstructionNotice />
            <FinalVerificationCTA />
            <Footer />
        </>
    );
};

export default Inscripcion;
