declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare const ENV: string;
declare const PROJECT_NAME: string;
declare const API_URL: string;
