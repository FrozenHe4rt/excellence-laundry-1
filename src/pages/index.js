import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { motion, useScroll, useSpring } from "framer-motion";
import Headroom from "react-headroom";

// Import skeleton loaders
import HeaderSkeleton from "@/components/skeleton-loaders/HeaderSkeleton";
import FooterSkeleton from "@/components/skeleton-loaders/FooterSkeleton";
import HeroSkeleton from "@/components/skeleton-loaders/HeroSkeleton";
import HowItWorksSkeleton from "@/components/skeleton-loaders/HowItWorksSkeleton";
import IntroductionSkeleton from "@/components/skeleton-loaders/IntroductionSkeleton";
import WhyUsSkeleton from "@/components/skeleton-loaders/WhyUsSkeleton";
import TeamSkeleton from "@/components/skeleton-loaders/TeamSkeleton";
import AboutSkeleton from "@/components/skeleton-loaders/AboutSkeleton";
import ServicesSkeleton from "@/components/skeleton-loaders/ServicesSkeleton";
import PacksSkeleton from "@/components/skeleton-loaders/PacksSkeleton";
import FaqSkeleton from "@/components/skeleton-loaders/FaqSkeleton";
import ContactUpperSkeleton from "@/components/skeleton-loaders/ContactUpperSkeleton";
import ContactLowerSkeleton from "@/components/skeleton-loaders/ContactLowerSkeleton";

// Dynamic imports with dynamic loading
const Header = dynamic(() => import("@/components/common/Header"), {
  loading: () => <HeaderSkeleton />,
  ssr: false,
});
const Footer = dynamic(() => import("@/components/common/Footer"), {
  loading: () => <FooterSkeleton />,
  ssr: false,
});
const Hero = dynamic(() => import("@/components/pages/home/Hero"), {
  loading: () => <HeroSkeleton />,
  ssr: false,
});
const HowItWorks = dynamic(() => import("@/components/pages/home/HowItWorks"), {
  loading: () => <HowItWorksSkeleton />,
  ssr: false,
});
const Introduction = dynamic(
  () => import("@/components/pages/home/Introduction"),
  {
    loading: () => <IntroductionSkeleton />,
    ssr: false,
  },
);
const WhyUs = dynamic(() => import("@/components/pages/home/WhyUs"), {
  loading: () => <WhyUsSkeleton />,
  ssr: false,
});
const Team = dynamic(() => import("@/components/pages/home/Team"), {
  loading: () => <TeamSkeleton />,
  ssr: false,
});
const About = dynamic(() => import("@/components/pages/home/About"), {
  loading: () => <AboutSkeleton />,
  ssr: false,
});
const Services = dynamic(
  () => import("@/components/pages/home/Services/Services"),
  {
    loading: () => <ServicesSkeleton />,
    ssr: false,
  },
);
const Packs = dynamic(() => import("@/components/pages/home/Packs"), {
  loading: () => <PacksSkeleton />,
  ssr: false,
});
const Faq = dynamic(() => import("@/components/pages/home/Faq"), {
  loading: () => <FaqSkeleton />,
  ssr: false,
});
const ContactUpper = dynamic(
  () => import("@/components/pages/home/ContactUpper"),
  {
    loading: () => <ContactUpperSkeleton />,
    ssr: false,
  },
);
const ContactLower = dynamic(
  () => import("@/components/pages/home/ContactLower/ContactLower"),
  {
    loading: () => <ContactLowerSkeleton />,
    ssr: false,
  },
);

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default function Home(props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const initialLocale = props._nextI18Next.initialLocale;
  const titles = {
      en: "Excellence Laundry: Premium Laundry Services for Fresh, Clean Clothes",
      fr: "Excellence Laundry: Services de blanchisserie premium pour des vêtements frais et propres",
      pt: "Excellence Laundry: Serviços de lavanderia premium para roupas frescas e limpas",
      es: "Excellence Laundry: Servicios de lavandería premium para ropa fresca y limpia",
  };

  const descriptions = {
      en: "Experience top-quality laundry services with Excellence Laundry. We ensure your clothes are fresh, clean, and carefully handled.",
      fr: "Découvrez des services de blanchisserie de qualité supérieure avec Excellence Laundry. Nous garantissons des vêtements frais, propres et soigneusement traités.",
      pt: "Experimente serviços de lavanderia de alta qualidade com Excellence Laundry. Garantimos que suas roupas estejam frescas, limpas e bem cuidadas.",
      es: "Experimente servicios de lavandería de alta calidad con Excellence Laundry. Aseguramos que su ropa esté fresca, limpia y bien cuidada.",
  };

  return (
    <div>
      <NextSeo
        title={titles[initialLocale]}
        description={descriptions[initialLocale]}
        canonical="https://www.excellence-laundry.com/"
        openGraph={{
          url: "https://www.excellence-laundry.com/",
          title: titles[initialLocale],
          description: descriptions[initialLocale],
          images: [
            {
              url: "https://excellence-laundry.com/assets/images/img3.webp",
              width: 800,
              height: 600,
              alt: "Excellence laundry",
              type: "image/webp",
            },
          ],
          site_name: "Excellence laundry",
        }}
        languageAlternates={[
          {
            hrefLang: "fr",
            href: "https://www.excellence-laundry.com/fr/",
          },
          {
            hrefLang: "en",
            href: "https://www.excellence-laundry.com/en/",
          },
          {
            hrefLang: "pt",
            href: "https://www.excellence-laundry.com/pt/",
          },
          {
            hrefLang: "es",
            href: "https://www.excellence-laundry.com/es/",
          },
        ]}
      />

      <div>
        <Headroom>
          <div className="relative z-[10]">
            <Header />

            <motion.div
              className="progress-bar absolute w-full bg-color01 h-[4px] z-[-1]"
              style={{ scaleX }}
            />
          </div>
        </Headroom>

        <div className="flex flex-col gap-[100px]">
          <Hero />
          <HowItWorks />
          <Introduction />
          <WhyUs />
          <Team />
          <About />
          <Services />
          <Packs />
          <Faq />
          <div className="flex flex-col gap-[32px]">
            <ContactUpper />
            <ContactLower />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
