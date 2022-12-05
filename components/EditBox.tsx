import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const currencies = [
  {
    id:1,
    value: "Web Design",
  },
  {
    id:2,
    value: "Front-End",
  },
  {
    id:3,
    value: "Back-End",
  }
];
export default function EditBox() {
  const [currency, setCurrency] = React.useState("");
  const [value, setValue] = React.useState('');
  const handleChangeSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  const handleChangeDescrioption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{display:"flex" , flexDirection:"column" , gap:'4px'}}>
        <TextField id="standard-basic" label="Title" variant="standard" />
        <TextField
          id="standard-select-currency"
          select
          label="Skills"
          value={currency}
          onChange={handleChangeDescrioption}
          helperText="Please select your Skill"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChangeDescrioption}
          variant="standard"
        />
      </CardContent>
    </Card>
  );
}
