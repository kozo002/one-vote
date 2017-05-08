export const Title = "OneVote - Fast & Easy polls";
export const Description = "Let's do polls more easily!";
export const SiteImage = "/images/ogp-image.png";
export const SiteURL = "https://onevote.click";

export const DefaultDescription = {
  type: "meta",
  attrs: {
    name: "description",
    content: Description,
  }
};


export const NameProp = {
  type: "meta",
  attrs: {
    itemprop: "name",
    content: Title,
  }
};

export const DescProp = {
  type: "meta",
  attrs: {
    itemprop: "description",
    content: Description,
  }
};

export const ImageProp = {
  type: "meta",
  attrs: {
    itemprop: "image",
    content: SiteImage,
  }
};

export const OGURL = {
  type: "meta",
  attrs: {
    property: "og:url",
    content: SiteURL,
  }
};

export const OGTitle = {
  type: "meta",
  attrs: {
    property: "og:title",
    content: Title,
  }
};

export const OGSiteName = {
  type: "meta",
  attrs: {
    property: "og:site_name",
    content: Title,
  }
};

export const OGDescription = {
  type: "meta",
  attrs: {
    property: "og:description",
    content: Description,
  }
};

export const OGImage = {
  type: "meta",
  attrs: {
    property: "og:image",
    content: SiteImage,
  }
};

export const TwitterCard = {
  type: "meta",
  attrs: {
    name: "twitter:card",
    content: "summary",
  }
};

export const TwitterTitle = {
  type: "meta",
  attrs: {
    name: "twitter:title",
    content: Title,
  }
};

export const TwitterDescription = {
  type: "meta",
  attrs: {
    name: "twitter:description",
    content: Description,
  }
};

export const TwitterImage = {
  type: "meta",
  attrs: {
    name: "twitter:image",
    content: SiteImage,
  }
};

export const AppleTouchIcon = {
  type: "link",
  attrs: {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/apple-touch-icon.png",
  }
};

export const Icon32 = {
  type: "link",
  attrs: {
    rel: "icon",
    type: "image/png",
    href: "/images/favicon-32x32.png",
  }
};

export const Icon16 = {
  type: "link",
  attrs: {
    rel: "icon",
    type: "image/png",
    href: "/images/favicon-16x16.png",
  }
};

export const Manifest = {
  type: "link",
  attrs: {
    rel: "manifest",
    href: "/manifest.json",
  }
};

export const MaskIcon = {
  type: "link",
  attrs: {
    rel: "mask-icon",
    href: "/images/safari-pinned-tab.svg",
    color: "#5bbad5",
  }
};

export const ThemeColor = {
  type: "meta",
  attrs: {
    name: "theme-color",
    content: "#ffffff",
  }
};

export const HeadTags = [
  DefaultDescription,
  NameProp,
  DescProp,
  ImageProp,
  OGURL,
  OGTitle,
  OGSiteName,
  OGDescription,
  OGImage,
  TwitterCard,
  TwitterTitle,
  TwitterDescription,
  TwitterImage,
  AppleTouchIcon,
  Icon32,
  Icon16,
  Manifest,
  MaskIcon,
  ThemeColor,
];
