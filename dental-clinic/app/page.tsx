import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutDoctor from '@/components/AboutDoctor';
import Treatments from '@/components/Treatments';
import WhyChooseUs from '@/components/WhyChooseUs';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import ClinicGallery from '@/components/ClinicGallery';
import AppointmentBooking from '@/components/AppointmentBooking';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StickyAppointmentBar from '@/components/StickyAppointmentBar';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutDoctor />
        <Treatments />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <ClinicGallery />
        <AppointmentBooking />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyAppointmentBar />
    </>
  );
}
