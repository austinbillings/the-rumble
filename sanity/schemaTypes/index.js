import siteSettings from "./siteSettings";
import homePage from "./homePage";
import aboutPage from "./aboutPage";
import suitPage from "./suitPage";
import album from "./album";
import release from "./release";
import video from "./video";
import member from "./member";
import merchItem from "./merchItem";
import subscriber from "./subscriber";

export const schemaTypes = [
  siteSettings, homePage, aboutPage, suitPage,
  album, release, video, member, merchItem, subscriber,
];

// One document each, at a fixed _id (= the type name). The Studio shows them
// as single entries rather than lists; the seed script and data getters use
// the same ids.
export const singletonTypes = ["siteSettings", "homePage", "aboutPage", "suitPage"];
