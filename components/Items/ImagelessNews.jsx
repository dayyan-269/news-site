import Link from "next/link";

const ImagelessNews = ({ time }) => {
  return (
    <article className="flex flex-col gap-1 py-2">
      <span className="font-medium prose-sm">{time}</span>
      <h2 className="text-secondary-color tracking-wide prose-sm line-clamp-2">
        <Link href={"#"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          similique, nihil maiores repudiandae cumque dicta.
        </Link>
      </h2>
    </article>
  );
};

export default ImagelessNews;
