import HeroSection from '@/components/home/hero-section'
import FeaturedProducts from '@/components/home/featured-products'
import WhyChooseUs from '@/components/home/why-choose-us'
import Testimonials from '@/components/home/testimonials'
import Stats from '@/components/home/stats'
import CTA from '@/components/home/cta'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  )
}