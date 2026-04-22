/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import PromotionBanner from './components/PromotionBanner';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gaming-accent-green selection:text-gaming-dark">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <FeaturedProducts />
        <PromotionBanner />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

