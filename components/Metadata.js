import Head from "next/head";

const Metadata = ({ title, description }) => {
  return (
    <Head>
      {/* BASIC */}

      <title>{title ? title : "Ben 10 RESTful API"}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : "Ben 10 API is a RESTful Api serving hand curated Ben 10 Alien data"
        }
      />
      <meta
        name="keywords"
        content="ben10api, restapi, restful api, ben10, express, nodejs, ben 10"
      />
      <meta name="author" content="Ayush Saini" />
      {/* ESSENTIALS */}

      <meta property="og:title" content={title ? title : "Ben 10 RESTful API"} />
      <meta
        property="og:description"
        content={
          description
            ? description
            : "Ben 10 API is a RESTful Api serving hand curated Ben 10 Alien data"
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ben 10 API" />

      {/* NON-ESSENTIALS */}
      <meta name="twitter:site" content="@ben10api" />
      <meta name="twitter:creator" content="@ben10api" />
      <meta
        name="twitter:description"
        content={
          description
            ? description
            : "Ben 10 API is a RESTful Api serving hand curated Ben 10 Alien data"
        }
      ></meta>

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
        data-y_margin="18"
      ></script>
    </Head>
  );
};

export default Metadata;
