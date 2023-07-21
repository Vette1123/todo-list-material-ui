import Header from "components/Header";
import { Container } from "@mui/material";
import TasksPage from "components/Tasks";
import { getLocalStorageTasks } from "lib/helpers";
import { useEffect, useContext } from "react";
import { AppContext } from "context/appContext";

function HomePage() {
  const { setTasks } = useContext(AppContext);

  useEffect(() => {
    setTasks(getLocalStorageTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="lg">
      <Header />
      <TasksPage />
    </Container>
  );
}

export default HomePage;
