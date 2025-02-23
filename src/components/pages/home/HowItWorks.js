import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] w-full">
      <div
        className={`flex flex-col gap-[16px] md:text-center md:justify-center md:items-center`}
      >
        <div className="item">
          <DetailText text={t("howItWorksSubtitle")} />
        </div>
        <h2
          id="how-it-works"
          className="item uppercase text-[1.5rem] font-bold"
        >
          {t("howItWorksTitle")}
        </h2>
      </div>

      <ul
        className={`flex flex-col gap-[32px] md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] w-full`}
      >
        {t("howItWorks", { returnObjects: true })?.map((item, index) => (
          <li
            key={index}
            className="bg-color05 rounded-[16px] border-[1px] border-solid border-color03 w-full overflow-hidden flex flex-col gap-[24px] p-[24px] md:text-center md:justify-center md:items-center shadow-custom"
          >
            <div className="rounded-[8px] bg-color01 bg-opacity-[0.15] flex justify-center items-center w-[48px] h-[48px]">
              <Image
                aria-hidden={true}
                src={`/assets/images/${item.icon}`}
                alt={`${item.title} illustration icon`}
                intrinsic="true"
                width={18}
                height={18}
                quality={100}
                className="block h-[18px] w-[18px]"
              />
            </div>

            <div className="flex flex-col gap-[12px]">
              <h3 className="item text-[1.25rem] font-bold uppercase">
                {item.title}
              </h3>
              <p className="item text-[1rem]">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
