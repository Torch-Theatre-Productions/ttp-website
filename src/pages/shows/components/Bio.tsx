import * as React from "react";
import { styled } from "styled-components";
import { theme } from "../queers/components/.theme";

export interface IBioProps {
  name: string;
  role: string | string[];
  image?: string;
  roleIn?: string | string[];
  bio?: React.ReactNode;
}

const BioImage = styled.img`
  height: 7rem;
  width: 7rem;
  object-fit: cover;

  border-radius: 50%;
  image-rendering: pixelated;
  filter: grayscale(1);
`;

const BioWrapper = styled.div`
  padding-top: ${theme.padding.top}rem;
  &:nth-of-type(2n) {
    background: ${theme.background};
    margin-left: ${theme.padding.left * -2}rem;
    padding-left: ${theme.padding.left * 2}rem;
    margin-right: ${theme.padding.left * -2}rem;
    padding-right: ${theme.padding.left * 2}rem;
    padding-top: ${theme.padding.top * 2}rem;
    padding-bottom: ${theme.padding.top * 2}rem;
    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0% 100%);
  }
`;

const NameAndImageHeader = styled.div`
  display: flex;
  gap: 2rem;

  align-items: center;
  h2 {
    margin-bottom: 0;
  }
`;

const Bio: React.FCwC<IBioProps> = ({ name, role, image, roleIn, bio }) => {
  const roleString = Array.isArray(role) ? role.join(", ") : role;
  const inString = Array.isArray(roleIn) ? roleIn.join(", ") : roleIn;

  return (
    <BioWrapper>
      <NameAndImageHeader>
        {image && <BioImage src={image} />}
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
    </BioWrapper>
  );
};

export default Bio;
