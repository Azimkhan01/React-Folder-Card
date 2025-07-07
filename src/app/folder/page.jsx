"use client";
import React from "react";
import { Structure } from "./data";
import { FaRegFile } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";

function page() {
  return (
    <div className="w-full h-screen flex p-2">
      <FolderStructure fileIcon={<FaRegFile/>} folderIcon={<FaRegFolder/>}  />
    </div>
  );
}

const FolderStructure = ({fileIcon,folderIcon}) => {
  return (
    <div>
      {Structure.map((type, i) => {
        if (type.type == "file") {
          return <FileCard key={i} fileIcon={fileIcon} data={type.name} />;
        }
        if (type.type == "folder") {
          return <FolderCard key={i} fileIcon={fileIcon} folderIcon={folderIcon} data={type} />;
        }
      })}
    </div>
  );
};

const FolderCard = ({ fileIcon,folderIcon,data }) => {
  const handleFolderClick = (e) => {
    if (e.target.nextElementSibling.style.display != "none") {
      e.target.nextElementSibling.style.display = "none";
    } else {
      e.target.nextElementSibling.style.display = "";
    }
  };
  return (
    <div className="">
      <button
        className="flex items-center gap-1 uppercase"
        onClick={(e) => {
          handleFolderClick(e);
        }}
      >
        {folderIcon}
        {data.name}
      </button>
      <div className="px-2 py-0.5" style={{ display: "none" }}>
        {data.files?.length > 0 &&
          data.files.map((filname, i) => {
            return <FileCard fileIcon={fileIcon} data={filname} key={i} />;
          })}
        {data.folders?.length > 0 &&
          data.folders.map((folderName, i) => {
            return <FolderCard fileIcon={fileIcon} folderIcon={folderIcon} key={i} data={folderName} />;
          })}
      </div>
    </div>
  );
};

const FileCard = ({fileIcon, data }) => {
  return (
    <p className="flex items-center gap-1">
      {fileIcon}
      {data}
    </p>
  );
};

export default page;
