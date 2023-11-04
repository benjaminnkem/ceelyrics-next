"use client";

import RightToLeftIntro from "@/components/Common/Intros/right-to-left";
import WidthClamp from "@/components/Layout/Clamp";
import FAQComponent from "./faq";

const AboutContent = () => {
  return (
    <>
      <RightToLeftIntro />
      <header>
        <WidthClamp>
          <div className="min-h-[35rem] flex items-center">
            <div className="grid md:grid-cols-5 gap-2 items-center h-full">
              <div className="md:col-span-3 space-y-4 col-span-full">
                <h1 className="text-6xl font-extrabold">Who We Are</h1>
                <p className="text-text-700 leading-loose">
                  Our passion lies in curating an environment where lyrics transcend mere words, resonating with the
                  soul of every listener. We&apos;ve meticulously crafted an interface designed for easy navigation,
                  ensuring an enriching experience for music enthusiasts, whether discovering the narrative of a
                  favorite tune or diving into the depths of an artist&apos;s storytelling.
                </p>
              </div>
            </div>
          </div>
        </WidthClamp>
      </header>
      <main>
        <section className="space-y-40">
          <WidthClamp>
            <div className="space-y-4 max-w-xl ml-auto">
              <h2 className="text-6xl font-extrabold">Our Commitment</h2>
              <p className="text-text-700 leading-loose">
                We are committed to enriching your music exploration, transforming the search for lyrics into an
                effortless and enjoyable experience. From chart-topping hits to hidden gems, our website stands as a
                haven for those seeking to immerse themselves in the depth and beauty of song lyrics.
              </p>
            </div>
          </WidthClamp>

          <WidthClamp>
            <div className="space-y-4 max-w-xl mb-40">
              <h3 className="text-6xl font-extrabold">Join Us</h3>
              <p className="text-text-700 leading-loose">
                We&apos;ll be your guide to the magical world of lyrics, where words and music come together to create
                unforgettable experiences. Come explore with us and discover the stories behind the songs that make them
                truly special.
              </p>
            </div>
          </WidthClamp>
        </section>

        <section className="mb-40">
          <WidthClamp>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-extrabold text-5xl">Our Story</h3>
              </div>
              <div className="space-y-4">
                <p>
                  Our journey was ignited by the rich narratives found within the verses of revered lyrics websites like
                  AzLyrics and Genius. Inspired by their dedication to unraveling the depth and meaning behind every
                  song, we embarked on a mission to create a platform that captures the essence of storytelling through
                  lyrics.
                </p>
                <p>
                  Embracing the spirit of these esteemed predecessors, our goal was to build a space where users could
                  seamlessly immerse themselves in the profound tales conveyed through lyrics. We aspired to craft an
                  experience that pays homage to the legacy of these platforms while introducing a modern touch, making
                  the lyrical exploration a delightful and engaging adventure.
                </p>
                <p>
                  With the influence of these revered predecessors, we set forth to create a haven for lyrics
                  enthusiasts, one that celebrates the stories behind each verse, empowering users to traverse the
                  lyrical landscapes with ease and enthusiasm.
                </p>
              </div>
            </div>
          </WidthClamp>
        </section>

        <section>
          <FAQComponent />
        </section>
      </main>
    </>
  );
};

export default AboutContent;
