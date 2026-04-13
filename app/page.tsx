import Image from 'next/image';
import Link from 'next/link';
import { posts } from './blog/posts';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "スタンドメイト",
  alternateName: "StandMate",
  applicationCategory: "SocialNetworkingApplication",
  applicationSubCategory: "SportsApplication",
  operatingSystem: "iOS",
  description:
    "プロ野球12球団・高校野球・大学野球・社会人野球・独立リーグ・日本代表まで、すべての野球ファンが集まる友達検索＆観戦マッチングアプリ。同じ球団を応援する仲間を見つけて、一緒に球場へ。基本無料、有料プランも月額1,000円。",
  url: "https://standmate.jp",
  image: "https://standmate.jp/icon.png",
  inLanguage: "ja-JP",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
      name: "無料プラン",
    },
    {
      "@type": "Offer",
      price: "1000",
      priceCurrency: "JPY",
      name: "プレミアムプラン",
    },
  ],
  installUrl:
    "https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706",
  featureList: [
    "友達検索（同じ球団を応援するファンをスワイプで探してマッチング）",
    "観戦募集（一緒に球場へ行く仲間の募集・参加）",
    "メッセージ（マッチング後のチャット機能）",
    "プロ野球12球団・高校野球・大学野球・社会人野球・独立リーグ・日本代表対応",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "スタンドメイト",
  url: "https://standmate.jp",
  inLanguage: "ja-JP",
  publisher: {
    "@type": "Organization",
    name: "スタンドメイト",
    url: "https://standmate.jp",
    logo: "https://standmate.jp/icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "スタンドメイト",
  url: "https://standmate.jp",
  logo: "https://standmate.jp/icon.png",
  email: "info@standmate.jp",
};

// icooon-mono.com icons (CC0 / free for commercial use)
const FaqIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M437.015,74.978C390.77,28.696,326.608-0.014,256,0C185.393-0.014,121.223,28.696,74.982,74.978C28.696,121.223-0.014,185.393,0,256c-0.014,70.608,28.696,134.778,74.982,181.023C121.226,483.304,185.393,512.015,256,512c70.608,0.015,134.77-28.696,181.015-74.977c46.288-46.245,75-110.415,74.985-181.023C512.015,185.393,483.304,121.223,437.015,74.978z M399.474,112.526c36.756,36.8,59.415,87.356,59.429,143.474c-0.014,56.119-22.674,106.674-59.429,143.474c-36.8,36.762-87.363,59.415-143.474,59.429c-56.114-0.014-106.674-22.667-143.474-59.429c-36.76-36.8-59.415-87.355-59.43-143.474c0.015-56.118,22.67-106.674,59.43-143.474c36.8-36.763,87.359-59.415,143.474-59.43C312.112,53.112,362.674,75.763,399.474,112.526z"/>
    <path d="M242.749,329.326c-14.208,0-25.73,11.519-25.73,25.726c0,14.192,11.522,25.718,25.73,25.718c14.196,0,25.714-11.526,25.714-25.718C268.463,340.845,256.945,329.326,242.749,329.326z"/>
    <path d="M184.363,173.852l17.515,14.037c3.566,2.852,8.674,2.748,12.118-0.252c0,0,2.152-3.889,8.896-7.741c6.778-3.83,15.57-6.911,28.708-6.956c11.462-0.022,21.459,4.252,28.278,10.097c3.385,2.904,5.918,6.133,7.47,9.11c1.563,2.986,2.133,5.6,2.126,7.585c-0.03,6.711-1.337,11.104-3.222,14.837c-1.433,2.8-3.303,5.274-5.715,7.674c-3.596,3.6-8.482,6.926-13.955,9.985c-5.482,3.082-11.389,5.808-17.359,9.096c-6.808,3.778-14.022,9.194-19.345,17.326c-2.659,4.015-4.737,8.622-6.059,13.466c-1.334,4.867-1.937,9.956-1.937,15.148c0,5.541,0,10.096,0,10.096c0,5.215,4.237,9.46,9.463,9.46h22.788c5.222,0,9.456-4.245,9.456-9.46c0,0,0-4.555,0-10.096c0-2,0.23-3.296,0.452-4.104c0.374-1.229,0.585-1.534,1.208-2.282c0.626-0.711,1.896-1.792,4.237-3.088c3.419-1.919,8.915-4.512,15.141-7.882c9.322-5.096,20.648-12.007,30.204-23.422c4.748-5.703,8.948-12.556,11.86-20.452c2.918-7.904,4.503-16.792,4.489-26.304c-0.008-9.637-2.622-18.8-6.882-26.926c-6.415-12.207-16.467-22.37-28.919-29.748c-12.448-7.341-27.47-11.822-43.777-11.822c-20.097-0.052-36.797,5.192-49.396,12.444c-12.656,7.222-18.111,15.629-18.111,15.629c-2.126,1.852-3.326,4.534-3.278,7.341C180.878,169.467,182.17,172.104,184.363,173.852z"/>
  </svg>
);

const MailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M496.563,68.828H15.438C6.922,68.828,0,75.75,0,84.281v30.391l256,171.547l256-171.563V84.281C512,75.75,505.078,68.828,496.563,68.828z"/>
    <path d="M0,178.016v203.391c0,34.125,27.641,61.766,61.781,61.766h388.438c34.141,0,61.781-27.641,61.781-61.766V178L256,349.563L0,178.016z"/>
  </svg>
);

const ChatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M74.143,116.17c-30.136,0-54.584,24.44-54.584,54.583c0,30.152,24.448,54.584,54.584,54.584c30.152,0,54.584-24.432,54.584-54.584C128.727,140.61,104.295,116.17,74.143,116.17z"/>
    <path d="M74.119,258.935c-25.85,0-47.731,19.98-46.82,46.812l12.834,172.26C41.615,497.456,55.352,512,74.119,512c18.775,0,32.251-14.077,33.994-33.994l12.826-172.26C122.564,278.915,99.977,258.935,74.119,258.935z"/>
    <path d="M437.857,225.337c30.144,0,54.584-24.432,54.584-54.584c0-30.144-24.44-54.583-54.584-54.583s-54.583,24.44-54.583,54.583C383.274,200.906,407.713,225.337,437.857,225.337z"/>
    <path d="M437.833,258.935c-25.858,0-47.738,19.98-46.819,46.812l12.834,172.26C405.329,497.456,419.058,512,437.833,512c18.776,0,32.251-14.077,33.986-33.994l12.826-172.26C486.269,278.915,463.691,258.935,437.833,258.935z"/>
    <path d="M327.731,87.405l-3.446,12.652c10.94,2.979,20.201,8.548,26.578,15.495c6.402,6.98,9.927,15.164,9.934,23.973c-0.007,7.09-2.289,13.744-6.496,19.742c-4.207,5.981-10.371,11.234-17.952,15.116l-5.538,2.836l7.177,16.05c-21.754-3.787-41.94-10.845-52.135-14.822l-0.206-0.08l-0.206-0.063c-13.689-4.294-24.36-12.732-29.796-22.698l-11.502,6.315c7.352,13.372,20.716,23.528,36.956,28.749v0.008c12.62,4.888,39.144,14.188,67.006,17.31l11.4,1.259l-11.78-26.34c6.916-4.357,12.842-9.753,17.302-16.098c5.594-7.922,8.897-17.302,8.882-27.284c0.015-12.438-5.11-23.877-13.382-32.845C352.243,97.68,340.834,90.97,327.731,87.405z"/>
    <path d="M301.144,119.276c10.632-12.145,17.088-27.244,17.08-43.564c0.008-10.671-2.757-20.867-7.645-30.009c-7.351-13.737-19.425-25.129-34.358-33.122C261.272,4.603,243.415,0.008,224.252,0c-25.525,0.008-48.777,8.16-65.864,21.667c-8.548,6.758-15.559,14.878-20.447,24.036c-4.896,9.142-7.645,19.338-7.645,30.009c-0.008,13.61,4.484,26.413,12.168,37.313c6.568,9.324,15.448,17.294,25.921,23.537l-15.773,35.285l11.392-1.26c39.349-4.405,77.019-17.595,94.908-24.519C275.913,140.634,290.584,131.341,301.144,119.276z M254.364,133.758l-0.206,0.079c-15.48,6.021-46.796,16.954-80.084,22.142l11.281-25.216l-5.537-2.836c-11.179-5.72-20.329-13.507-26.626-22.451c-6.306-8.968-9.769-19.036-9.776-29.763c0-8.422,2.138-16.422,6.092-23.83c5.918-11.091,16.011-20.796,28.971-27.72c12.961-6.932,28.734-11.043,45.774-11.035c22.744-0.008,43.2,7.32,57.745,18.83c7.273,5.752,13.063,12.533,17.009,19.924c3.953,7.408,6.091,15.408,6.1,23.83c-0.008,12.834-4.983,24.78-13.84,34.929c-8.842,10.124-21.596,18.308-36.696,23.061L254.364,133.758z"/>
    <path d="M187.2,67.362c-5.64,0-10.204,4.571-10.204,10.204c0,5.633,4.563,10.204,10.204,10.204c5.633,0,10.204-4.57,10.204-10.204C197.403,71.933,192.833,67.362,187.2,67.362z"/>
    <path d="M226.557,67.362c-5.64,0-10.212,4.571-10.212,10.204c0,5.633,4.571,10.204,10.212,10.204c5.632,0,10.204-4.57,10.204-10.204C236.761,71.933,232.19,67.362,226.557,67.362z"/>
    <path d="M265.907,67.362c-5.633,0-10.204,4.571-10.204,10.204c0,5.633,4.571,10.204,10.204,10.204c5.641,0,10.212-4.57,10.212-10.204C276.119,71.933,271.547,67.362,265.907,67.362z"/>
  </svg>
);

const BaseballIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256,0C114.607,0.009,0.012,114.602,0,256.004C0.012,397.389,114.607,511.991,256,512c141.393-0.009,255.987-114.611,256-255.996C511.987,114.602,397.393,0.009,256,0z M411.761,411.761C371.84,451.651,316.885,476.27,256,476.279c-60.886-0.009-115.841-24.628-155.761-64.518c-0.27-0.271-0.523-0.558-0.794-0.829c4.444-2.093,8.817-4.299,13.038-6.742c6.401-3.706,8.586-11.904,4.875-18.305c-3.707-6.401-11.905-8.581-18.306-4.875c-5.704,3.306-11.656,6.236-17.818,8.748c-0.052,0.018-0.096,0.052-0.144,0.078c-28.448-37.116-45.362-83.425-45.37-133.832c0.008-60.89,24.628-115.85,64.518-155.766C140.159,60.349,195.114,35.73,256,35.721c60.885,0.009,115.84,24.628,155.761,64.518c0.27,0.271,0.522,0.558,0.793,0.829c-4.556,2.145-9.044,4.404-13.365,6.924c-6.392,3.724-8.56,11.921-4.836,18.322c3.724,6.384,11.926,8.547,18.319,4.831c5.695-3.313,11.638-6.261,17.796-8.782c0.152-0.061,0.274-0.156,0.422-0.226c28.462,37.116,45.38,83.442,45.389,133.867C476.27,316.886,451.65,371.836,411.761,411.761z"/>
    <path d="M170.172,323.243c-6.406-3.698-14.598-1.509-18.301,4.892c-3.328,5.756-7.038,11.268-11.107,16.483c-4.543,5.843-3.497,14.25,2.342,18.803c5.834,4.544,14.25,3.497,18.798-2.337c4.814-6.192,9.219-12.715,13.165-19.535C178.771,335.138,176.578,326.949,170.172,323.243z"/>
    <path d="M131.425,120.541c-6.201-4.796-12.742-9.174-19.579-13.099c-6.419-3.688-14.604-1.464-18.288,4.954c-3.68,6.419-1.461,14.599,4.958,18.28c5.764,3.314,11.285,7.012,16.517,11.058c5.852,4.518,14.264,3.444,18.79-2.407C138.349,133.484,137.276,125.068,131.425,120.541z"/>
    <path d="M160.361,201.114c2.816,6.837,10.644,10.107,17.486,7.291c6.841-2.817,10.103-10.64,7.29-17.486c-3.004-7.3-6.497-14.354-10.438-21.105c-3.733-6.384-11.935-8.546-18.323-4.814c-6.388,3.732-8.546,11.93-4.814,18.322C154.884,189.018,157.832,194.958,160.361,201.114z"/>
    <path d="M184.496,241.912c-7.4,0.026-13.368,6.052-13.338,13.456v0.628c0,6.732-0.463,13.36-1.352,19.832c-1.003,7.325,4.12,14.093,11.45,15.096c7.33,1.004,14.089-4.125,15.092-11.45c1.055-7.683,1.6-15.524,1.6-23.477v-0.75C197.914,247.85,191.891,241.877,184.496,241.912z"/>
    <path d="M340.838,256.318v-0.322c0-6.628,0.445-13.134,1.308-19.517c0.99-7.326-4.151-14.076-11.485-15.07c-7.33-0.986-14.076,4.151-15.066,11.485c-1.021,7.562-1.548,15.271-1.548,23.102v0.384c0.017,7.395,6.026,13.378,13.426,13.36C334.868,269.722,340.855,263.722,340.838,256.318z"/>
    <path d="M351.516,310.598c-2.8-6.846-10.622-10.134-17.473-7.334c-6.846,2.8-10.13,10.622-7.33,17.468c2.992,7.318,6.466,14.364,10.396,21.131c3.715,6.393,11.913,8.564,18.31,4.849c6.397-3.715,8.572-11.913,4.857-18.314C356.962,322.702,354.032,316.754,351.516,310.598z"/>
    <path d="M413.209,381.159v0.009c-5.761-3.323-11.272-7.029-16.496-11.093c-5.843-4.535-14.254-3.479-18.794,2.364c-4.539,5.834-3.484,14.25,2.355,18.794c6.191,4.806,12.719,9.2,19.552,13.142c6.41,3.698,14.599,1.491,18.297-4.918C421.816,393.055,419.618,384.857,413.209,381.159z"/>
    <path d="M368.658,148.832c-5.848-4.535-14.264-3.462-18.794,2.381c-4.805,6.201-9.192,12.733-13.12,19.561c-3.694,6.419-1.483,14.599,4.931,18.297c6.41,3.689,14.599,1.482,18.288-4.937c3.318-5.764,7.02-11.276,11.071-16.508C375.568,161.783,374.5,153.367,368.658,148.832z"/>
  </svg>
);

const FriendSearchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M215.736,361.283c0-36.31,14.115-70.422,39.749-96.048c13.081-13.072,28.379-23.108,45.031-29.836c3.966-11.08,7.217-24.029,9.642-37.795c11.54-4.117,18.118-10.703,26.349-39.524c8.758-30.701-13.174-29.658-13.174-29.658c17.741-58.704-5.6-113.874-44.712-109.824c-26.97-47.183-117.294,10.779-145.598,6.738c0,16.182,6.728,28.314,6.728,28.314c-9.83,18.681-6.033,55.932-3.271,74.773c-1.597-0.028-21.425,0.179-13.024,29.658c8.232,28.821,14.828,35.407,26.35,39.524c4.943,28.003,13.25,52.708,24.207,64.878c0,14.594,0,25.24,0,33.764c0,12.865-29.319,34.534-46.534,40.605C91.938,349.368,4.582,385.368,10.22,452.802c1.354,16.182,90.326,32.974,219.761,32.974c22.76,0,44.167-0.544,64.164-1.484c-14.171-6.616-27.27-15.572-38.66-26.942C229.851,431.715,215.736,397.594,215.736,361.283z"/>
    <path d="M493.326,469.83l-51.928-50.575c11.089-17.113,17.066-37.063,17.066-57.972c0-28.604-11.108-55.461-31.293-75.637c-20.166-20.176-47.023-31.293-75.628-31.293c-28.604,0-55.461,11.117-75.646,31.293c-20.166,20.176-31.292,47.033-31.292,75.637c0,28.605,11.126,55.472,31.292,75.647c20.186,20.176,47.042,31.292,75.646,31.292c20.919,0,40.859-5.995,57.98-17.084l50.556,51.91c9.417,11.36,23.324,12.037,34.075,1.288C504.923,493.594,504.678,479.227,493.326,469.83z M392.119,401.87c-10.844,10.835-25.24,16.802-40.577,16.802c-15.317,0-29.732-5.977-40.577-16.812c-10.844-10.834-16.802-25.25-16.802-40.577c0-15.326,5.958-29.732,16.802-40.567c10.845-10.834,25.241-16.811,40.577-16.811c15.318,0,29.733,5.976,40.577,16.811C414.485,343.09,414.485,379.495,392.119,401.87z"/>
  </svg>
);

const StadiumIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M450.338,288.096L331.012,393.623c-20.722,18.317-47.358,28.394-75.014,28.394c-27.656,0-54.29-10.077-75.014-28.394L61.972,288.37c-22.726-21.301-44.765-42.132-59.222-64.937l4.105,52.848c1.08,13.798,7.209,26.723,17.226,36.298l147.887,156.668c40.09,39.166,126.771,39.166,166.861,0l147.906-156.668c10.018-9.575,16.146-22.5,17.206-36.298l3.948-50.638C493.474,247.524,472.201,267.599,450.338,288.096z"/>
    <path d="M71.242,277.881l119.033,105.244c37.536,33.186,93.929,33.186,131.465,0l119.013-105.244c62.247-58.347,97.249-97.239,47.888-168.088C432.7,29.524,318.225,13.378,255.998,13.378c-62.227,0-176.721,16.145-232.643,96.414C-26.007,180.642,9.015,219.534,71.242,277.881z M91.867,217.314c2.71-8.81,6.364-17.256,10.862-25.28c4.498-7.994,9.861-15.576,15.93-22.638c6.088-7.051,12.905-13.612,20.33-19.593c7.68-6.148,16.028-11.687,24.945-16.548c8.898-4.842,18.366-8.987,28.285-12.355c9.9-3.369,20.311-5.962,31.036-7.71c10.744-1.729,21.841-2.613,33.215-2.544c11.373,0.079,22.471,1.1,33.196,2.967c10.744,1.866,21.115,4.606,30.995,8.093c9.919,3.496,19.347,7.768,28.226,12.718c8.878,4.969,17.186,10.617,24.808,16.864c7.406,6.069,14.182,12.718,20.193,19.838c6.03,7.15,11.314,14.791,15.733,22.844c4.459,8.072,8.033,16.578,10.666,25.416c2.632,8.869,4.301,18.071,4.89,27.559L281.552,370.358c-14.987,12.875-37.202,12.757-52.052-0.286L86.799,244.814C87.448,235.336,89.176,226.143,91.867,217.314z"/>
  </svg>
);

const AppleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 bg-gradient-to-b from-red-50/80 via-orange-50/40 to-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-3">
            <div className="inline-block">
              <Image
                src="/icon.png"
                alt="スタンドメイト - 野球ファンの友達・観戦仲間探しマッチングアプリ"
                width={128}
                height={128}
                priority
                fetchPriority="high"
                className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tight">
            <span className="gradient-text">スタンドメイト</span>
            <span className="sr-only">｜野球ファンの友達・観戦仲間探しマッチングアプリ</span>
          </h1>

          <p className="text-base md:text-xl text-gray-500 mb-1">
            野球ファン同士が繋がる
          </p>
          <p className="text-lg md:text-2xl font-bold text-gray-700 mb-6">
            友達検索＆観戦マッチングアプリ
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-0">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary text-lg"
            >
              <AppleLogo className="w-5 h-5" /> App Store で公開中
            </a>
            <span className="cta-button cta-secondary text-lg cursor-default opacity-60">
              ▶ Google Play 5月中にリリース予定
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-3 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="stat-card">
              <p className="text-xl md:text-3xl font-black gradient-text mb-1 whitespace-nowrap">12球団</p>
              <p className="text-xs text-gray-500 font-medium">プロ野球</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl mb-1">⚾</p>
              <p className="text-xs text-gray-500 font-medium">高校野球</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">🎓</p>
              <p className="text-xs text-gray-500 font-medium">大学野球</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">🏢</p>
              <p className="text-xs text-gray-500 font-medium">社会人野球</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">🌟</p>
              <p className="text-xs text-gray-500 font-medium">独立リーグ</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">🇯🇵</p>
              <p className="text-xs text-gray-500 font-medium">日本代表</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Features</p>
            <h2 className="text-3xl md:text-4xl font-black">
              スタンドメイトの<span className="gradient-text">3つの機能</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Link href="/howto#search" className="feature-card text-center block no-underline text-inherit hover:scale-[1.02] transition-transform">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/IMG_3479.PNG"
                  alt="スタンドメイトの友達検索画面 - 同じ球団を応援する仲間をスワイプで探せる"
                  width={192}
                  height={416}
                  loading="lazy"
                  quality={75}
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">友達検索</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                同じ球団を応援する仲間を見つけよう。プロフィールをスワイプして、気の合う野球ファンとマッチング。
              </p>
            </Link>

            <Link href="/howto#watch" className="feature-card text-center block no-underline text-inherit hover:scale-[1.02] transition-transform">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/IMG_3480.PNG"
                  alt="スタンドメイトの観戦募集画面 - 一緒に球場に行く仲間を募集できる"
                  width={192}
                  height={416}
                  loading="lazy"
                  quality={75}
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">観戦募集</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                一緒に球場に行く仲間を募集したり、他の人の募集に参加できる。チケットの譲り先探しや、同じ球団のファン同士での飲み会の企画など使い方はいろいろ。
              </p>
            </Link>

            <Link href="/howto#message" className="feature-card text-center block no-underline text-inherit hover:scale-[1.02] transition-transform">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/IMG_3482.PNG"
                  alt="スタンドメイトのメッセージ画面 - マッチング後にチャットで交流"
                  width={192}
                  height={416}
                  loading="lazy"
                  quality={75}
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">メッセージ</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                マッチング後はチャットで気軽に交流。観戦の待ち合わせもスムーズに。
              </p>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/howto"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-sm"
            >
              使い方を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Plans</p>
            <h2 className="text-3xl md:text-4xl font-black">料金プラン</h2>
          </div>

          {/* Free Plan */}
          <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider">
              FREE
            </span>
            <h2 className="text-2xl md:text-3xl font-black mb-3">無料プラン</h2>
            <p className="text-gray-500 mb-8 max-w-xl">
              基本機能はすべて無料。まずは気軽に始めてみよう。
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-black gradient-text">¥0</span>
              <span className="text-gray-400">/月</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs flex-shrink-0">✓</span>
                いいね＆スキップ 5回/日
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs flex-shrink-0">✓</span>
                観戦募集参加 3回/日
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs flex-shrink-0">✓</span>
                メッセージ機能
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs flex-shrink-0">✓</span>
                観戦募集の作成
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider">
                PREMIUM
              </span>
              <h2 className="text-2xl md:text-3xl font-black mb-3">もっと楽しむなら</h2>
              <p className="text-gray-400 mb-8 max-w-xl">
                プレミアム会員で、いいね回数UP・観戦募集の参加枠UP・表示設定など充実の機能が使えます。
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black">¥1,000</span>
                <span className="text-gray-400">/月（税込）</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs flex-shrink-0">✓</span>
                  いいね＆スキップ 30回/日
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs flex-shrink-0">✓</span>
                  観戦募集参加 20回/日
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs flex-shrink-0">✓</span>
                  プロフィール表示設定
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-red-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            さあ、<span className="gradient-text">野球仲間</span>を見つけよう
          </h2>
          <p className="text-gray-500 mb-10">
            今すぐダウンロードして、同じ球団を応援する仲間と繋がろう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary text-lg"
            >
              <AppleLogo className="w-5 h-5" /> App Store で公開中
            </a>
            <span className="cta-button cta-secondary text-lg cursor-default opacity-60">
              ▶ Google Play 5月中にリリース予定
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">About</p>
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
              <BaseballIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            野球ファンが<span className="gradient-text">1人で</span>作っています
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            「一緒に観戦する仲間がほしい」——そんな想いから、野球好きの開発者が1人で開発し運営しています。
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            大きな会社ではありませんが、だからこそユーザーの声を大切にしながら、野球ファンのためのアプリを日々改善しています。ご意見・ご要望はいつでもお気軽にどうぞ！
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Blog</p>
            <h2 className="text-3xl md:text-4xl font-black">
              最新の<span className="gradient-text">記事</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(() => {
              const pinnedSlug = "standmate-tanjou-story";
              const pinned = posts.find((p) => p.slug === pinnedSlug);
              const rest = [...posts]
                .filter((p) => p.slug !== pinnedSlug)
                .sort((a, b) => b.date.localeCompare(a.date))
                .slice(0, pinned ? 2 : 3);
              return (pinned ? [pinned, ...rest] : rest);
            })().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-gray-200 rounded-2xl p-6 no-underline text-inherit hover:border-red-300 hover:shadow-lg transition-all group block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-xs text-gray-400">{post.date}</time>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug group-hover:text-red-500 transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-sm"
            >
              記事一覧を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Contact</p>
            <h2 className="text-2xl md:text-3xl font-black">お問い合わせ</h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10">
              <p className="text-gray-400 mb-8 text-center">
                ご質問・不具合の報告・ご要望など、お気軽にお問い合わせください。
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/support"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/15 rounded-2xl p-5 transition-all group no-underline"
                >
                  <span className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaqIcon className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">サポート・FAQ</p>
                    <p className="text-gray-400 text-xs">よくある質問をチェック</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/15 rounded-2xl p-5 transition-all group no-underline"
                >
                  <span className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">フォームで問い合わせ</p>
                    <p className="text-gray-400 text-xs">お問い合わせフォームへ</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
