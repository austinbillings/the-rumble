// ============================================================================
// THE RUMBLE, single source of truth for all site content.
// All copy scraped verbatim from therumbleband.com (June 2026).
// ============================================================================

export const band = {
  name: "The Rumble",
  fullName: "The Rumble Ft. Big Chief Joseph Boudreaux Jr.",
  tagline: "New Orleans Mardi Gras Indian funk",
  hometown: "New Orleans, Louisiana",
  formed: 2021,
};

export const nav = [
  { label: "Bio", href: "/bio" },
  // hideInNav: page stays live (and linked in the footer), just not in the navbar
  { label: "The Suit", href: "/suit", hideInNav: true },
  { label: "Shows", href: "/shows" },
  { label: "Media", href: "/media" },
  { label: "Music", href: "/music" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
];

export const social = {
  facebook: "https://facebook.com/therumblenola",
  instagram: "https://instagram.com/therumble.official",
  youtube: "https://youtube.com/channel/UCusEt8ovDC2KdHb1Hp7qC3g",
};

export const contact = {
  newsletterBlurb:
    "Join our e-mail list for updates, tour announcements, new music, and more exclusive content!",
  booking: "Eric.Gerber@royalartistgroup.com",
  general: "therumblenola@gmail.com",
};

// Bandsintown widget artist id from the original /shows page.
export const bandsintownArtistId = "id_15516447";

// ---------------------------------------------------------------------------
// HOME
// ---------------------------------------------------------------------------
export const home = {
  heroTitle: "The Rumble",
  heroSubtitle: "Ft. Big Chief Joseph Boudreaux Jr.",
  heroBanner: "“Second Line For Me” — the lead single from Ain't No Dying — out now",
  heroBannerHref: "https://found.ee/secondline",
  heroImage: "/images/band/noe-studio-green.jpg",
  intro:
    "The Rumble was formed in 2021, and has since been nominated two times for a Grammy. They are a dynamic band dedicated to preserving and evolving New Orleans' rich musical heritage. Fronted by Big Chief Joseph Boudreaux Jr. of the Young Eagles Black Masking Indian tribe, the band seamlessly blends past, present, and future elements of New Orleans culture into their sound. Their songs draw from Mardi Gras Indian funk, brass band traditions, jazz, and hip-hop, creating a vibrant and modern take on iconic styles pioneered by groups like The Meters, Wild Magnolias, and Neville Brothers.",
  body:
    "The Rumble carries forward the vibrant legacy of Mardi Gras Indian funk, a genre pioneered by Big Chief Monk Boudreaux (Joseph's father) and the Wild Magnolias. Led by Grammy-nominated singer and respected Black Masking Indian leader Big Chief Joseph Boudreaux Jr., the band blends the traditional rhythms of black masking culture with modern New Orleans sounds. Trumpeter Aurélien Barnes, a member of the Northside Skull and Bone Gang, represents this iconic carnival tradition, while trombonist José Maize of the TBC Brass Band electrifies audiences at second line parades, embodying New Orleans' brass band heritage. Together, they honor the city's rich musical traditions while pushing its boundaries into the future.",
  pullQuote:
    "The Rumble writes and almost exclusively performs original songs, which are true to this day and age, while still carrying the familiar spirit of New Orleans.",
  // Press photos by Nóe Cugny (June 2026 batch).
  // [0] square-ish tile · [1] tall intro split · [2] mosaic tall · [3] mosaic wide · [4] square tile
  galleryImages: [
    "/images/band/noe-esplanade-suit.jpg",
    "/images/band/noe-sportsmans-tall.jpg",
    "/images/band/noe-street-tall.jpg",
    "/images/band/noe-sportsmans.jpg",
    "/images/band/noe-street-group.jpg",
  ],
};

// ---------------------------------------------------------------------------
// FEATURED ALBUM — the homepage blade.
// TODO: confirm title spelling with the band ("Ain't No Dying" per the cover
// art vs "Ain't No Dyin'" in a press listing), and swap CTAs for a real
// listen/pre-save URL once one exists.
// ---------------------------------------------------------------------------
export const featuredAlbum = {
  eyebrow: "The New Album",
  title: "Ain't No Dying",
  cover: "/images/album/aint-no-dying.jpg",
  coverAlt:
    "Ain't No Dying album cover: Big Chief Joseph Boudreaux Jr. and a Northside Skull and Bone Gang member in a New Orleans cemetery, with a single red feather",
  blurb:
    "The Rumble returns with Ain't No Dying — the lead single “Second Line For Me” is out now.",
  note: "Out soon",
  primaryCta: { label: "Listen to the Single", href: "https://found.ee/secondline" },
  secondaryCta: { label: "Get Notified", href: "/contact" },
};

// ---------------------------------------------------------------------------
// BIO
// ---------------------------------------------------------------------------
export const bio = {
  heading: "About The Rumble",
  lead: "On Mardi Gras morning, your eyes may feast on the intricate and elaborate beadwork of the Black Masking Indians as they dance down the street, but the first thing you'll hear when they make their way toward you is the back line, known as “the rumble.” Fronted by Big Chief Joseph Boudreaux Jr. of the Young Eagles Black Masking Indian tribe, the band seamlessly blends past, present, and future elements of New Orleans culture into their sound.",
  accolades:
    "The ensemble has received two GRAMMY nominations for Best Regional Roots Album for their albums Live at the Maple Leaf and Stories From The Battlefield.",
  image: "/images/band/noe-studio-laughs.jpg",
  members: [
    { name: "Big Chief Joseph Boudreaux Jr.", role: "Vocals; Frontman, Young Eagles Black Masking Indian tribe" },
    { name: "Aurélien Barnes", role: "Trumpet & Percussion; Northside Skull and Bone Gang" },
    { name: "José Maize Jr.", role: "Trombone; TBC Brass Band" },
    { name: "TJ Norris", role: "Bass" },
    { name: "Ari Teitel", role: "Guitar" },
    { name: "Andriu Yanovski", role: "Keys" },
    { name: "Trenton O'Neal", role: "Drums" },
  ],
};

// ---------------------------------------------------------------------------
// THE SUIT
// ---------------------------------------------------------------------------
export const suit = {
  heading: "About Big Chief Joseph's Suit",
  images: ["/images/suit/suit-1.jpg", "/images/suit/suit-2.jpg", "/images/suit/suit-3.jpg"],
  sections: [
    {
      title: "A Suit Unlike Any Other",
      paragraphs: [
        "The suit worn by Big Chief Joseph Boudreaux Jr. is not a costume. It is a sacred suit of honor, handmade from scratch every year with meticulous care. Suits are constructed anew annually; no two are alike, and none are typically worn again after Mardi Gras season. Every detail is intentional, each bead and feather tells a story.",
        "To see the suit is to witness a living sculpture in motion. But to understand the suit is to know the weight of its history, the pain it remembers, and the joy it radiates. Whether on stage or in the streets, Big Chief Joseph Boudreaux Jr.'s presence in suit reminds us that culture is not costume; it is memory, movement, and medicine.",
      ],
    },
    {
      title: "A Living Legacy of Resistance and Radiance",
      paragraphs: [
        "In the heart of New Orleans, a sacred tradition pulses through the city streets each Mardi Gras morning. This is the world of the Black Masking Indians, a cultural practice deeply rooted in honor, resistance, ancestral pride, and art. For Big Chief Joseph Boudreaux Jr. of the Young Eagles, the suit is more than attire. It is a living, breathing embodiment of history, spirit, and story.",
        "The Black Masking Indian tradition dates back over a century, born from the solidarity between African Americans and Native Americans, two peoples who shared histories of oppression, survival, and defiant beauty. During a time when African Americans were excluded from mainstream Mardi Gras celebrations, this tradition emerged as a profound way to reclaim space and celebrate freedom through their own forms of pageantry and power.",
      ],
    },
    {
      title: "The Making of the Suit",
      paragraphs: [
        "The process of building a new suit begins shortly after the previous Mardi Gras ends. It is a year-long labor of devotion. Each suit is designed and stitched by hand, often by the Big Chief himself, family members, and trusted tribe artisans.",
        "Creating a full suit can take 5,000 to 7,000 hours of handwork over the year, the equivalent of several full-time jobs. For Big Chiefs like Joseph Boudreaux Jr., this work is done late into the night, all while juggling family, music, and leadership responsibilities.",
        "A single suit may contain between 500,000 to over 1 million individual glass beads, each hand-stitched into intricate, story-rich designs. These beads form panels depicting legends, history, nature, and spiritual symbols unique to the tribe and the Big Chief's message that year.",
        "The suit is built layer by layer with canvas panels, velvet, rhinestones, ostrich and turkey feathers, sequins, jewels, wire, cardboard, and hand-dyed elements. The resulting ensemble includes an elaborate crown, chest plate, back piece, apron, leggings, and arm pieces, sometimes standing over 10 feet tall when fully assembled.",
      ],
    },
    {
      title: "Tradition, Rank, and Right",
      paragraphs: [
        "Not just anyone can wear the suit. The Black Masking Indian tradition is inherited and earned; it is rooted in community, respect, and lineage. Within each tribe, there are designated roles:",
      ],
      roles: [
        { name: "Big Chief", desc: "The leader and storyteller of the tribe" },
        { name: "Spy Boy", desc: "The front scout, first to encounter rival tribes or police" },
        { name: "Flag Boy", desc: "The communicator between Spy Boy and Big Chief, ensuring safe passage through the streets" },
        { name: "Wild Man", desc: "The fierce protector and enforcer" },
        { name: "Big Queen", desc: "Female leader supporting Big Chief who represents elegance, strength, and spiritual presence" },
      ],
      outro:
        "Each role wears a different style of suit reflecting their place in the hierarchy. To wear one is a sacred responsibility, passed down through mentorship, often from family elders.",
    },
  ],
  donate: {
    title: "Donate to the Suit-Making Process",
    blurb:
      "You can make a difference! Be an important part of Big Chief Joseph Boudreaux Jr. and The Young Eagles tribe continuing a 150-year-old tradition. Every year Big Chief Joseph Boudreaux Jr. painstakingly designs and builds his suit to carry on the tradition, bead by bead and feather by feather.",
    statsIntro:
      "To better understand the physical labor and monetary commitment that goes into a single suit, you should know…",
    stats: [
      { value: "$10,000", label: "in supplies alone for a single suit" },
      { value: "7,000", label: "hours of labor from design to completion" },
      { value: "500K–1M", label: "hand-stitched beads per suit" },
      { value: "5+ lbs", label: "of feathers" },
    ],
    cta: "Contribute Today",
  },
};

// ---------------------------------------------------------------------------
// MUSIC
// ---------------------------------------------------------------------------
export const releases = [
  {
    title: "Second Line For Me",
    year: "2026",
    note: "Lead single from the upcoming album Ain't No Dying",
    listenUrl: "https://found.ee/secondline",
    tag: "New Single · Out Now",
  },
  {
    title: "Stories from the Battlefield",
    year: "2024",
    note: "Grammy-nominated · Available on all platforms",
    listenUrl: "https://link.wellkeptsecret.co/therumble",
    featured: true,
  },
  {
    title: "Live at the Maple Leaf Bar",
    year: "2023",
    note: "Grammy-nominated · Available on all platforms",
    listenUrl:
      "https://distrokid.com/hyperfollow/therumblechiefjosephboudreauxjr/the-rumble-ft-chief-joseph-boudreaux-jr-live-at-the-maple-leaf-bar",
    featured: true,
  },
];

// ---------------------------------------------------------------------------
// MEDIA, live performance & studio videos (YouTube)
// ---------------------------------------------------------------------------
export const videos = [
  // --- Live performances & sessions ---
  { id: "orFrPER_S50", title: "Trouble", context: "Live at Portland Waterfront Blues Festival", category: "performance" },
  { id: "0jfh06vPmbM", title: "Now You Know", context: "Live at Portland Waterfront Blues Festival", category: "performance" },
  { id: "5z_MZ5gq7Tc", title: "Wild Man", context: "Live at Portland Waterfront Blues Festival", category: "performance" },
  { id: "y50yKjo6g4k", title: "Riverside", context: "Live from Downman Sounds Studio", category: "performance" },
  { id: "vBCPXef3gso", title: "Stories from the Battlefield", context: "Live from Downman Sounds Studio", category: "performance" },
  { id: "7PtEz9xREDA", title: "Now You Know", context: "Live in studio · The Downman Sessions", category: "performance" },
  { id: "uzhtNYKtjBE", title: "Live from the Maple Leaf", context: "From our live session at the legendary Maple Leaf Bar, New Orleans", category: "performance" },
  { id: "Ug7ms5f6J_s", title: "Live at Tipitina's", context: "FunkyUncle.live · New Orleans", category: "performance" },
  { id: "S8eqojvb160", title: "FunkyUncle.live Session", context: "Full livestream set · FunkyUncle.live", category: "performance" },
  { id: "TPdYxDsxyzo", title: "FOC Concert Series", context: "Full live set", category: "performance" },
  { id: "KUcZHr-Ikuo", title: "LIVE from New Orleans — Pt. 1", context: "TMTTR Live · produced by Martin Shore", category: "performance" },
  { id: "gmIV_p0Awmg", title: "LIVE from New Orleans — Pt. 2", context: "TMTTR Live", category: "performance" },
  { id: "gz1X3CUiBsk", title: "LIVE from New Orleans — Pt. 3", context: "TMTTR Live", category: "performance" },
  { id: "iIlzJOlsC0Y", title: "LIVE from New Orleans — Pt. 4", context: "TMTTR Live", category: "performance" },
  { id: "tK30XAA_hRs", title: "LIVE from New Orleans — Pt. 5", context: "TMTTR Live", category: "performance" },
  // --- Features & interviews ---
  { id: "_90RBQOS4Es", title: "Your Next Favorite Band", context: "Band feature", category: "feature" },
  { id: "soNgEtX-1mM", title: "Introducing The Rumble", context: "Band profile", category: "feature" },
];

// ---------------------------------------------------------------------------
// MERCH
// ---------------------------------------------------------------------------
// Mirrors The Rumble collection on the Soul South Tees store (soulsouthtees.com):
// same products, order, and prices. The muscle tanks are no longer listed
// there, so they're marked sold out and kept at the end.
const shopBase = "https://www.soulsouthtees.com/collections/the-rumble-ft-chief-joseph-boudreaux-jr/products";
export const merch = [
  { name: "Live at the Maple Leaf (Double Album)", price: "From $50", image: "/images/merch/maple-leaf-double-album.png", shopUrl: `${shopBase}/the-rumble-record` },
  { name: "The Rumble “R” Sticker Set", price: "$9", image: "/images/merch/r-sticker-set.png", shopUrl: `${shopBase}/the-rumble-r-sticker-set` },
  { name: "The Rumble “R” Tee", price: "From $35", image: "/images/merch/r-tee.png", shopUrl: `${shopBase}/the-rumble-r-tee` },
  { name: "The Rumble Logo Tee", price: "From $35", image: "/images/merch/logo-tee.png", shopUrl: `${shopBase}/the-rumble-logo-tee` },
  { name: "Rumble Stickers (3-Pack)", price: "$7", image: "/images/merch/stickers-3-pack.png", shopUrl: `${shopBase}/copy-of-the-rumble-sticker-set-3-pack-1` },
  { name: "Rumble Stickers (6-Pack)", price: "$14", image: "/images/merch/stickers-6-pack.png", shopUrl: `${shopBase}/sticker-set-6-pack` },
  { name: "The Rumble Tee: Big Chief Illustration", price: "$35", image: "/images/merch/chief-illustration-tee.png", shopUrl: `${shopBase}/the-rumble-ft-chief-joseph-boudreaux-jr-chief-illustration` },
  { name: "The Rumble Inaugural Tee", price: "From $35", image: "/images/merch/inaugural-tee.png", shopUrl: `${shopBase}/the-rumble-inaugural-tee-lmtd-ed` },
  { name: "The Rumble Logo Muscle Tank", price: "$35", image: "/images/merch/logo-muscle-tank.png", soldOut: true },
  { name: "The Rumble “R” Muscle Tank", price: "$35", image: "/images/merch/r-muscle-tank.png", soldOut: true },
];

export const merchShopUrl = "https://therumbleband.com/shop";

// ----------------------------------------------------------------------------
// AUDIO — powers the single in-browser player in the header.
// TODO: set each `src` to a hosted audio file (album previews or full tracks).
// Until a src is present, the Listen button falls back to the /music page.
// ----------------------------------------------------------------------------
export const tracks = [
  { id: "aint-no-dying", title: "Ain't No Dying", artist: "The Rumble", src: "", cover: "/images/album/aint-no-dying.jpg" },
];
export const featuredTrackId = "aint-no-dying";

