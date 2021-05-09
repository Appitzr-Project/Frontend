import React from 'react';
import { Helmet } from 'react-helmet';

const MenuHelmet = () => {
  return (
    <>
      <Helmet>
        <title>Appetizr</title>
        <meta name="description" content="Appetizr Description" />
        {/* GOOGLE WEB FONT */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* BASE CSS */}
        <link href="../assets/css/bootstrap.css" rel="stylesheet" />
        <link
          href="../assets/css/bootstrap_customized.min.css"
          rel="stylesheet"
        />
        <link href="../assets/css/style.css" rel="stylesheet" />
        {/* SPECIFIC CSS */}
        <link href="../assets/css/detail-page.css" rel="stylesheet" />
        {/* CUSTOM CSS */}
        <link href="../assets/css/custom.css" rel="stylesheet" />
      </Helmet>
    </>
  );
};

export default MenuHelmet;
