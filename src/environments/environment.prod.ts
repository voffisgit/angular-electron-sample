export const BASE_URL = 'https://apitenantprod.voffis.com/voffice';
 export const BASE_URL2 = 'https://apiprod.voffis.com/saas/';
export const API_VERSION = '';
export const S3bucketurl = 'https://voffisprodstorage.s3.us-east-2.amazonaws.com/Employees/';
export const environment = {
  production: true,
  API_URL : `${BASE_URL}/`,//${API_VERSION}/`,
  API_URL2 : `${BASE_URL2}/`,
  STATIC_PATH: '../static/assets/',
  DYNAMIC_ASSETS: 'assets/',
  FileRoot:`https://apitenantprod.voffis.com/chatrootfiles/uploads`,
  SFU_SERVER : 'https://sfu.voffis.com' + ':3000/',
  SFU_ADDRESS: 'wss://' + 'sfu.voffis.com' + ':3000/',
  S3bucketurl : 'https://voffisprodstorage.s3.us-east-2.amazonaws.com/Employees/',
  S3bucketurl1 : 'https://voffisprodstorage.s3.us-east-2.amazonaws.com/',
  DefaultImage : 'Default_profile_image(old).png'
};

