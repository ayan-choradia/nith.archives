import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me



Join me on this adventure, and let's explore the world together! Who knows, maybe my stories will inspire you to take that leap of faith and pursue your own dreams, whatever they may be.

Let's go on an adventure!

Love,

Ayan`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Ayan and her NITH adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Ayan and her NITH adventures",
      images: [
        signOgImageUrl({
          title: "Ayan",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
