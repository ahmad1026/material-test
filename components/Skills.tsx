import React from "react";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditeIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type skill = {
  skill: string;
  id: number;
};

interface Props {
  title: string;
  id: number;
  skills: skill[];
}

const Skills: React.FC<Props> = (skill) => {
  return (
    <Stack width={"100%"} direction={"column"} alignItems={"center"}>
      <Typography variant="subtitle2" fontWeight={"bold"}>
        {skill.title}
      </Typography>
      {
      skill.skills.map((skill) => (
        <Stack
        key={skill.id}
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1" color="initial">
            {skill.skill}
          </Typography>
          <Stack direction={"row"}>
            <IconButton aria-label="edit">
              <EditeIcon />
            </IconButton>
            <IconButton aria-label="edit">
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Skills;
