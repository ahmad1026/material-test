import * as React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Skills from "../components/Skills";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import EditBox from "../components/EditBox";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const skills = [
  {
    title: "Web Design",
    id: 1,
    skills: [
      {
        skill: "HTML",
        id: 1,
      },
      {
        skill: "Figma",
        id: 2,
      },
    ],
  },
  {
    title: "Front-End",
    id: 2,
    skills: [
      {
        skill: "React",
        id: 3,
      },
      {
        skill: "JS",
        id: 4,
      },
    ],
  },
];

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditBox />
        </Box>
      </Modal>

      <Header />
      <Container maxWidth={"xl"}>
        <Stack
          padding={"8px"}
          direction={"row"}
          divider={<Divider orientation="vertical" flexItem />}
          border={"1px solid gray"}
        >
          <Stack width={"50%"} alignItems={"center"}>
            <Typography variant="h6" color="initial">
              Skills
            </Typography>
            {skills.map((skill) => (
              <Skills key={skill.id} {...skill} />
            ))}
          </Stack>
          <Stack
            width={"50%"}
            sx={{ padding: "0px 8px" }}
            alignItems={"center"}
          >
            <Typography variant="h6" color="initial">
              Edit
            </Typography>
            <EditBox />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
