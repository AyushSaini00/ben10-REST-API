import Head from 'next/head'
import Link from 'next/link'
import Metadata from '../components/Metadata'

export default function Home() {
  return (
    <>
      <Metadata
        title="Ben 10 RESTful API | HomePage"
      />
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