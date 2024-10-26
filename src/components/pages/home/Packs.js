import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";
import { Link as ScrollLink } from "react-scroll";

export default function Packs() {
  const { t } = useTranslation();
  const { ref, controls, itemVariants } = useScrollAnimation();

  const handleButtonClick = () => {
    const targetElement = document.getElementById("contact");

    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 100);
    }
  };

  return (
    <div
      className={`bg-[url('/assets/images/img13.webp')] bg-cover bg-fixed curve relative overflow-hidden before:w-[1280px] before:h-[71px] before:bg-no-repeat before:bg-[url('/assets/images/detail3.webp')] before:bottom-[0] before:content-[''] before:absolute before:left-[50%] before:bg-[length:100%_100%] lg:before:w-full border-t-[5px] border-solid border-color01`}
    >
      <div className="bg-white bg-opacity-[0.85] py-[60px]">
        <div
          className={`px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px]`}
        >
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <DetailText text={t("plansSubtitle")} />
              <h2 id="plans" className="uppercase text-[1.5rem] font-bold">
                {t("plansTitle")}
              </h2>
            </div>

            <div className="flex flex-col gap-[32px] md:grid md:grid-cols-2 lg:grid-cols-3 bg-white p-[16px] md:p-[24px] rounded-[16px] overflow-hidden border-color03 border-solid border-[1px] shadow-custom">   
              <div className="h-fit flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="uppercase text-[20px] font-bold">
                    {t("plansItemOneTitle")}
                  </h3>

                  <p>{t("plansItemOneDescription")}</p>
                </div>

                <ul className="item flex flex-col gap-[16px]">
                  {t("plansItemOneArray", { returnObjects: true })?.map(
                    (item, index) => (
                      <li key={index} className="flex items-center gap-[8px]">
                        <Image
                          aria-hidden={true}
                          src={`/assets/images/vector16.svg`}
                          alt="blue checkmark"
                          intrinsic="true"
                          width={20}
                          height={20}
                          quality={100}
                          className="w-[20px] h-[20px]"
                        />
                        <p className="">{item.text}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>            

              <div className="h-fit flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="uppercase text-[20px] font-bold">
                    {t("plansItemTwoTitle")}
                  </h3>

                  <p>{t("plansItemTwoDescription")}</p>
                </div>

                <ul className="item flex flex-col gap-[16px]">
                  {t("plansItemTwoArray", { returnObjects: true })?.map(
                    (item, index) => (
                      <li key={index} className="flex items-center gap-[8px]">
                        <Image
                          aria-hidden={true}
                          src={`/assets/images/vector16.svg`}
                          alt="blue checkmark"
                          intrinsic="true"
                          width={20}
                          height={20}
                          quality={100}
                          className="w-[20px] h-[20px]"
                        />
                        <p className="">{item.text}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="h-fit flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="uppercase text-[20px] font-bold">
                    {t("plansItemThreeTitle")}
                  </h3>

                  <p>{t("plansItemThreeDescription")}</p>
                </div>

                <ul className="item flex flex-col gap-[16px]">
                  {t("plansItemThreeArray", { returnObjects: true })?.map(
                    (item, index) => (
                      <li key={index} className="flex items-center gap-[8px]">
                        <Image
                          aria-hidden={true}
                          src={`/assets/images/vector16.svg`}
                          alt="blue checkmark"
                          intrinsic="true"
                          width={20}
                          height={20}
                          quality={100}
                          className="w-[20px] h-[20px]"
                        />
                        <p className="">{item.text}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] md:grid md:grid-cols-2">
              
            <div className="flex flex-col gap-[20px] bg-white p-[16px] md:p-[24px] rounded-[16px] overflow-hidden border-color03 border-solid border-[1px] shadow-custom h-fit">
              <div className="flex flex-col gap-[16px]">
                <h3 className="uppercase text-[20px] font-bold">
                  {t("customSolutionTitle")}
                </h3>

                <p>{t("customSolutionDescription")}</p>

                <ScrollLink
                  className="btn px-[32px] py-[12px] rounded-[6px] uppercase font-bold text-[14px] text-white w-fit cursor-pointer"
                  to="contact"
                  tabIndex="0"
                  onClick={() => handleButtonClick("contact")}
                  offset={-200}
                  smooth={true}
                >
                  {t("customSolutionCTA")}
                </ScrollLink>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] bg-white p-[16px] md:p-[24px] rounded-[16px] overflow-hidden border-color03 border-solid border-[1px] shadow-custom h-fit">
              <h3 className="uppercase text-[20px] font-bold">
                {t("rentalConditionsTitle")}
              </h3>

              <ul className="item flex flex-col gap-[16px]">
                {t("rentalConditions", { returnObjects: true })?.map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-[8px]">
                      <Image
                        aria-hidden={true}
                        src={`/assets/images/star-cleaners.webp`}
                        alt="blue checkmark"
                        intrinsic="true"
                        width={20}
                        height={20}
                        quality={100}
                        className="w-[20px] h-[20px]"
                      />
                      <p className="">{item.text}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
