import React from "react";

type HashTagListProps = {
  children: React.ReactNode;
};

export default function HashTagList({ children }: HashTagListProps) {
  return <ul className="hashtags">{children}</ul>;
}
