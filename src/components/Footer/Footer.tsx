import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="w-full justify-center flex h-9">
      <Typography variant="body2" className="text-gray-400 flex gap-2">
        Made with
        <FavoriteIcon sx={{ width: 16, height: 16 }} />
        by Amlan Roy
      </Typography>
    </div>
  );
};
export default Footer;
