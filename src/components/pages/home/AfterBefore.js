export default function AfterBefore() {
  return (
    <div
      aria-hidden={true}
      className={`curve bg-[url('/assets/images/img10.webp')] bg-cover bg-fixed relative overflow-hidden before:w-[1280px] before:h-[71px] before:bg-no-repeat before:bg-[url('/assets/images/detail2.webp')] before:top-[0] before:content-[''] before:absolute before:left-[50%] before:bg-[length:100%_100%] lg:before:w-full after:w-[1280px] after:h-[71px] after:bg-no-repeat after:bg-[url('/assets/images/detail1.webp')] after:bottom-[0] after:content-[''] after:absolute  after:bg-[length:100%_100%] lg:after:w-full`}
    >
      <div className="bg-white bg-opacity-[0.85] py-[200px]">
      </div>
    </div>
  );
}
