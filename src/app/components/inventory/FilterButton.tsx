"use client"
import React from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import CloseIcon from "@mui/icons"

interface FilterButtonProps {
  label: string;
  value: string;
  onRemove: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, value, onRemove }) => (
  <Button
    variant="outlined"
    endIcon={<CloseIcon />}
    onClick={onRemove}
  >
    {label}: {value}
  </Button>
);

export default FilterButton;
