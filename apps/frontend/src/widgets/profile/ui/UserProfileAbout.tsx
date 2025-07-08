"use client";

import { FunctionComponent, useState } from "react";

import DataList from "@/shared/ui/data-list";

const ABOUT_SLICE_LENGTH = 96;

interface UserProfileAboutProps {
  about: string;
}

const UserProfileAbout: FunctionComponent<UserProfileAboutProps> = (props) => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const long = props.about.length > ABOUT_SLICE_LENGTH;

  return (
    <DataList orientation="horizontal">
      <DataList.Item>
        <DataList.ItemGroup>
          <DataList.ItemLabel>About</DataList.ItemLabel>
          <span className="inline">
            <DataList.ItemValue className="inline text-pretty">
              {showMoreAbout || !long
                ? props.about
                : `${props.about.slice(0, ABOUT_SLICE_LENGTH)}…`}
            </DataList.ItemValue>
            {long && !showMoreAbout && (
              <button
                onClick={() => setShowMoreAbout(true)}
                className="ms-1 cursor-pointer font-medium text-secondary-foreground transition hover:text-foreground"
              >
                Show more
              </button>
            )}
          </span>
        </DataList.ItemGroup>
      </DataList.Item>
    </DataList>
  );
};

export default UserProfileAbout;
