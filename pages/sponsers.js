import Image from "next/image";
import Metadata from "../components/Metadata";

const Sponsers = () => {
  return (
    <>
      <Metadata
        title="Ben 10 RESTful API | Sponsers Page"
        description="Here's how you can help to keep Ben 10 API alive. Donations are highly appreciated"
      />
      <div>
        <section className="section-page">
          <div className="section-page-div">
            <h2 className="page-title">Sponsers ❤</h2>
            <p className="sponser-msg">
              Ben 10 API is totally free to use and always will be. It was a fun project, built
              from scratch & maintained solely by me and doing that needed both time & energy.
              With your help I can continue to maintain the project. Donations are highly
              appreciated. All the sponsers & donations with their profile will be updated here
              as well as on the Github Repository. Thank you :)
            </p>
            <a href="https://www.buymeacoffee.com/ayushsaini" target="_blank">
              <Image src="/default-blue.png" width={158} height={46} alt="Buy Me A Coffee" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sponsers;
