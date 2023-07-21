import Header from "components/Header";
import TasksPage from "components/Tasks";
import { AppContext } from "context/appContext";
import { getLocalStorageTasks } from "lib/helpers";
import { useContext, useEffect } from "react";
import { Container } from "@mui/material";

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
