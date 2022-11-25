import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Page = ({ content }) => {
  return (
    <div className="post">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
    </div>
  );
};
export default Page;
