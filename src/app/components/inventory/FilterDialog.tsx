// FilterDialog.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

interface FilterDialogProps {
  open: boolean;
  onClose: () => void;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
  label: string;
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  open,
  onClose,
  value,
  options,
  onSelect,
  label,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Select {label}</DialogTitle>
    <DialogContent>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={(e) => {
            onSelect(e.target.value);
            onClose();
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </DialogContent>
  </Dialog>
);

export default FilterDialog;
