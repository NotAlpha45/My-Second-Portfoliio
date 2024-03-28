export type SVGIconProps = {
  id?: string;
  clasName?: string;
  width: string;
  height: string;
};

export type CarouselCardProps = {
  cardHeader?: string;
  cardBody?: string;

  statsPanelData?: {
    noOfProjects?: string;
    noOfLanguages?: string;
    noOfLibraries?: string;
  };
};
