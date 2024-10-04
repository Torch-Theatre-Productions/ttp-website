import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";
import { styled } from "styled-components";

export interface IBioProps {
  name: string;
  role: string | string[];
  image?: ImageDataLike;
  roleIn?: string | string[];
  bio?: React.ReactNode;
  category?: string;
}

const BioImage = styled(GatsbyImage)`
`;

const NameAndImageHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.45rem;

  align-items: center;
  h2,p {
    margin-bottom: 0;
  }
  
  img {
    height: 7rem;
    width: 7rem;
    object-fit: cover;
    
    border-radius: 50%;
    image-rendering: crisp-edges;
    filter: grayscale(1);
  }
`;

const Bio: React.FCwC<IBioProps> = ({ name, role, image, roleIn, bio }) => {
  const roleString = Array.isArray(role) ? role.join(", ") : role;
  const inString = Array.isArray(roleIn) ? roleIn.join(", ") : roleIn;
  image = getImage(image || null)
  return (
    <>
      <NameAndImageHeader>
        {image && <GatsbyImage image={image} alt={`${name} headshot`}/>}
        <div>
          <h2>{name}</h2>
          <p>
            <b>{roleString}</b>
            <span>
              {inString ? (
                <span>
                  {` - `}
                  <i>{inString}</i>
                </span>
              ) : undefined}
            </span>
          </p>
        </div>
      </NameAndImageHeader>
      {bio || undefined}
    </>
  );
};

export default Bio;
