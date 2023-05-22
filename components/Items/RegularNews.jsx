import Image from "next/image";
import Link from "next/link";

const RegularNews = ({ imgUrl }) => {
  return (
    <article className="flex flex-col gap-2 relative">
      <span className="prose-sm text-accent-color font-medium">
        <Link href={"#"}>Categories</Link>
      </span>
      <div className="h-[190px] lg:h-[250px] rounded-sm relative">
        <Image
          className="cursor-pointer"
          alt="main banner image"
          src={imgUrl}
          unoptimized={true}
          fill
          sizes="100vw"
        />
      </div>
      <span className="text-secondary-color prose-sm">23 January 2023</span>
      <h2 className="font-medium tracking-wide line-clamp-2">
        <Link href={"#"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure,
          aut beatae consectetur ipsa aliquam.
        </Link>
      </h2>
    </article>
  );
};

export default RegularNews;
