import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProjectCardImageProps {
  noImageElement?: React.ReactElement<any>;
  placeholderElement?: React.ReactElement<any>;
  src?: string;
  alt: string;
}

function ProjectCardImage(props: ProjectCardImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const {
    noImageElement,
    placeholderElement,
    alt,
    src,

    // Other props as supplied by CardImgProps
    ...originalImageProps
  } = props;

  const handleLoad = () => setLoaded(true);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) handleLoad();
  }, []);

  if (!src) return <div>{noImageElement}</div>;
  return (
    <>
      {!loaded && <div>{placeholderElement}</div>}
      <div className={loaded ? "visible" : "collapse"}>
        <Image
          alt={alt}
          ref={imageRef}
          loader={({ src }) => src}
          src={src}
          {...originalImageProps}
          loading={"eager"}
          onLoad={handleLoad}
        />
      </div>
    </>
  );
}

export default ProjectCardImage;
