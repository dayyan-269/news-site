import PrimaryButton from "../Button/PrimaryButton";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 justify-between items-center">
        <div>
          <h1 className="prose-2xl font-semibold text-center lg:text-start">
            news.tv
          </h1>
          <span className="prose-sm text-center lg:text-start">
            Indonesia - Jakarta
          </span>
        </div>
        <PrimaryButton className="border-black text-black hover:bg-black hover:text-white h-fit lg:py-2">
          Subscribe to Our Newsletter
        </PrimaryButton>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-3 my-5">
        <div>
          <ul className="flex flex-col lg:flex-row items-center gap-x-16 lg:items-start">
            <li className="prose-sm text-secondary-color tracking-wider">
              <a href="#">Currated Articles</a>
            </li>
            <li className="prose-sm text-secondary-color tracking-wider">
              <a href="#">Popular Articles</a>
            </li>
            <li className="prose-sm text-secondary-color tracking-wider">
              <a href="#">Recent Articles</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row gap-6 justify-between items-center">
            <li className="hover:-translate-y-2 duration-150">
              <a href="#">
                <ion-icon name="logo-facebook" size="large"></ion-icon>
              </a>
            </li>
            <li className="hover:-translate-y-2 duration-150">
              <a href="#">
                <ion-icon name="logo-instagram" size="large"></ion-icon>
              </a>
            </li>
            <li className="hover:-translate-y-2 duration-150">
              <a href="#">
                <ion-icon name="logo-youtube" size="large"></ion-icon>
              </a>
            </li>
            <li className="hover:-translate-y-2 duration-150">
              <a href="#">
                <ion-icon name="logo-twitter" size="large"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
