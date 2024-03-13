import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Instagram, InstagramPath, linkedin , linkedinPath } from "../data";
// Icons
import { Icon } from '@iconify/react';

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      <a href={ linkedinPath } aria-label="External link" className="link-icons">
        {linkedin}
      </a>
      <a href={ InstagramPath } aria-label="External link" className="link-icons">
        {Instagram}
      </a>
    </StyledSocialLinks>
  );
}
