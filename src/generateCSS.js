const styling = () => {
    let content = `body, html {
      color: rgb(243, 243, 243);
    }
    a {
      color: rgb(243, 243, 243);
    }
    a:hover {
      color: rgb(166, 21, 168);;
    }
    th, td {
      color: rgb(243, 243, 243);
    }
    footer {
      margin-bottom: 0 !important;
    }
    .card {
      background-color: rgb(8, 230, 215);
    }
    .main-wrapper{
      margin-bottom: 5rem!important;
      margin-top: 3rem!important;
    }`;
    return content;
  };
  
  exports.styling = styling;