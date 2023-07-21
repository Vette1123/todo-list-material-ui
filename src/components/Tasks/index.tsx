import { useContext } from "react";
import { Container, Box, Typography } from "@mui/material";
import { AppContext } from "context/appContext";
import TaskPage from "components/Task";

function TasksPage() {
  const { tasks } = useContext(AppContext);
  const completedTasks = tasks?.filter((task) => task.isChecked);
  return (
    <Container>
      {tasks?.length > 0 ? (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <Typography variant="h4" component="div">
              Created Tasks : {tasks?.length}
            </Typography>
            <Typography variant="h4" component="div">
              Completed Tasks : {completedTasks?.length}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {tasks.map((task) => (
              <TaskPage key={task.id} task={task} />
            ))}
          </Box>
        </>
      ) : (
        <Typography
          variant="h4"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No tasks found, please add some tasks.
        </Typography>
      )}
    </Container>
  );
}

export default TasksPage;
