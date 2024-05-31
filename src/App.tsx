import React from "react";
import { Container, Typography } from "@mui/material";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.scss";
import "./components/UserForm.scss";
import "./components/UserList.scss";

const App: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                User Management
            </Typography>
            <UserForm onSave={() => {}} />
            <UserList />
        </Container>
    );
};

export default App;
