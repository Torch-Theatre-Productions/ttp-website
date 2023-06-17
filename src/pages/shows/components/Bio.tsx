import * as React from "react";
import { styled } from "styled-components";

export interface IBioProps {
  name: string;
  role: string | string[];
  image?: string;
  roleIn?: string | string[];
  bio?: React.ReactNode;
}

const BioImage = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: cover;

  border-radius: 50%;
`;

const Bio: React.FCwC<IBioProps> = ({ name, role, image, roleIn, bio }) => {
  const roleString = Array.isArray(role) ? role.join(", ") : role;
  const inString = Array.isArray(roleIn) ? roleIn.join(", ") : roleIn;

  return (
    <div>
      <h2>{name}</h2>
      {image && <BioImage src={image} />}
      <p>
        <b>{roleString}</b>
        {inString ? (
          <span>
            {` - `}
            <i>{inString}</i>
          </span>
        ) : undefined}
      </p>
      {bio || undefined}
    </div>
  );
};

export default Bio;
