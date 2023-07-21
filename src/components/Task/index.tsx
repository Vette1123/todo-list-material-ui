import Modal from "components/Modal";
import { AppContext } from "context/appContext";
import { LOCAL_STORAGE_KEY } from "lib/constants";
import React, { useContext, useState } from "react";
import { Task } from "types/task";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { FormState } from "components/Header";
import FormInputs from "components/Header/FormInputs";

const CustomCard = ({ props }: { props: Task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const { description, title, isChecked, createdAt, updatedAt, archivedAt } =
    props;

  const [formState, setFormState] = useState<FormState>({
    title: title || "",
    description: description || "",
  });
  const { tasks, setTasks } = useContext(AppContext);

  const handleDeleteTask = () => {
    const newTasks = tasks.filter((task) => task.id !== props.id);
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const handleEditTask = () => {
    const newTasks = tasks.map((task) => {
      if (task.id === props.id) {
        return {
          ...task,
          title: formState.title,
          description: formState.description,
          updatedAt: new Date().toLocaleTimeString(),
        };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    setIsEdit(false);
    setIsModalOpen(false);
  };

  const handleArchiveTask = () => {
    const newTasks = tasks.map((task) => {
      if (task.id === props.id) {
        return {
          ...task,
          archivedAt: new Date().toLocaleTimeString(),
        };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const handleCheckTask = () => {
    const newTasks = tasks.map((task) => {
      if (task.id === props.id) {
        return {
          ...task,
          isChecked: !task.isChecked,
          updatedAt: new Date().toLocaleTimeString(),
        };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  return (
    <React.Fragment>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: 20,
              textDecoration: isChecked ? "line-through" : "none",
            }}
            color="text.secondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <DeleteIcon
                aria-label="delete"
                onClick={() => {
                  setIsEdit(false);
                  setIsModalOpen(true);
                }}
              />
            </IconButton>
            <IconButton>
              <EditIcon
                aria-label="edit"
                onClick={() => {
                  setIsEdit(true);
                  setIsModalOpen(true);
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: 14,
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Checkbox onChange={handleCheckTask} checked={isChecked} />

          {createdAt && (
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontSize: 12,
              }}
            >
              created at: {createdAt || "-"}
            </Typography>
          )}
          {updatedAt && (
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontSize: 12,
              }}
            >
              updated at: {updatedAt || "-"}
            </Typography>
          )}
          {archivedAt && (
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontSize: 12,
              }}
            >
              archived at: {archivedAt || "-"}
            </Typography>
          )}
        </Box>
        <IconButton
          sx={{
            marginRight: "0.5rem",
          }}
          aria-label="archive"
          onClick={handleArchiveTask}
        >
          <ArchitectureIcon />
        </IconButton>
      </CardActions>
      <Modal
        modalTitle="Delete Task"
        modalContent="Are you sure you want to delete this task? This action cannot be undone."
        onAgree={isEdit ? handleEditTask : handleDeleteTask}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        CustomCard={
          <FormInputs formState={formState} setFormState={setFormState} />
        }
      />
    </React.Fragment>
  );
};

export default function OutlinedCard(props: {
  task: Task;
  key: `${string}-${string}-${string}-${string}-${string}`;
}) {
  return (
    <Box key={props.key} sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CustomCard props={props.task} />
      </Card>
    </Box>
  );
}
