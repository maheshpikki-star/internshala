class RedirectionUtils {
  constructor() {}

  redirectInSameTab = (inputParams) => {
    console.log(`In function redirectionInstance.redirectInSameTab \n`);
    console.log(`Inputs params received are : ${inputParams} \n`);
    console.log(`Opening ContactUs page in a same tab`);
    window.open("https://internshala.apxor.com/community", "_self");
  };

  redirectToALanguagePage = (inputParams) => {
    console.log(`In function redirectionInstance.redirectWithDynamicParams \n`);
    console.log(`Inputs params received are : ${inputParams} \n`);
    console.log(`Opening ${inputParams.language} language page in a same tab`);
    window.open(
      `https://internshala.apxor.com/languages/${inputParams.language}`,
      "_self"
    );
  };

  redirectToExternalWebsite = (inputParams) => {
    console.log(`In function redirectionInstance.redirectToExternalWebsite \n`);
    console.log(`Inputs params received are : ${inputParams} \n`);
    console.log(`Opening ${inputParams.url}  in a new tab`);
    window.open(`${inputParams.url}`, "_blank");
  };
}

const redirectionInstance = new RedirectionUtils();
window.redirectionInstance = redirectionInstance;

const redirectionNonNestedFunction = (inputParams) => {
  console.log(`In function redirectionNonNestedFunction \n`);
  console.log(`Inputs params received are : ${inputParams} \n`);
  console.log(`Opening Resources page in a new tab`);
  window.open("https://internshala.apxor.com/resources", "_blank");
};

window.redirectionNonNestedFunction = redirectionNonNestedFunction;
