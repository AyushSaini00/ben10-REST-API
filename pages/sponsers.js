import Image from 'next/image'
import Head from 'next/head'

const Sponsers = () => {
    return (
        <>
            <Head>
                <title>Ben 10 RESTful API | Sponsers</title>
            </Head>
            <div>
                <section className="section-page">
                    <div className="section-page-div">
                        <h2 className="page-title">Sponsers ❤</h2>
                        <p className="sponser-msg">
                            Ben 10 API is totally free to use and always will be.
                            It was a fun project, built & maintained solely by me
                            and doing that need both time & energy. With your help
                            I can do that. Any donation would be greatly appreciated.
                            Thank you :)
                        </p>
                        <a href="https://www.buymeacoffee.com/ayushsaini" target="_blank">
                            <Image src="/default-blue.png" width={158} height={46} alt="Buy Me A Coffee"/>  
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Sponsers;