import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className="section-home">
    <div className="home">
      <h1>A RESTful Ben 10 API</h1>
      <h3>Get hand curated Ben 10 data</h3>
      <p>Powered by Express & MongoDB</p>
    </div>
    <button>
      GET STARTED →
    </button>
    </section>
  )
}
