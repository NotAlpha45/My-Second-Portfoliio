export type SVGIconProps = {
  id?: string;
  clasName?: string;
  width: string;
  height: string;
};

export type CarouselCardProps = {
  cardHeader?: string;
  cardBody?: string;
  cardImgUrl?: string;

  statsPanelData?: {
    noOfProjects?: string;
    noOfLanguages?: string;
    noOfLibraries?: string;
    years?: string;
  };
};

export type CustomButtonProps = {
  label?: string;
  callback?: () => void;
};

export type CustomNavbarProps = {
  navOptionsAndCallback?: Map<string, () => void>;
};

export type SocialSnippetProps = {
  snippetUrl?: string;
  snippetElement: React.JSX.Element;
  snippetText?: string;
};
