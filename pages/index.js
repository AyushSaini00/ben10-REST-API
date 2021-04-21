import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben 10 RESTful API | Home</title>

        {/* BUY ME A COFFEE SCRIPT TAG */}
        <script 
          data-name="BMC-Widget" 
          data-cfasync="false" 
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" 
          data-id="ayushsaini" 
          data-description="Support me on Buy me a coffee!" 
          data-message="" 
          data-color="#5F7FFF" 
          data-position="Right" 
          data-x_margin="18" 
          data-y_margin="18">
        </script>

      </Head>
      <div>
        <section className="section-home">
          <div className="home">
            <h1>A RESTful Ben 10 API</h1>
            <h3>Get hand curated Ben 10 data</h3>
            <p>
              Powered by <span className="highlight">Express</span> & <span className="highlight">MongoDB</span> 
            </p>
          </div>
          <Link href="/docs">
            <a className="btn">
              GET STARTED &nbsp; →
            </a>
          </Link>
        </section>
      </div>
    </>
  )
}