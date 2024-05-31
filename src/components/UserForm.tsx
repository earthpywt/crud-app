import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState, User } from "../state";
import { TextField, Button, Box } from "@mui/material";
import "./UserForm.scss";

const UserForm: React.FC<{ user?: User; onSave: () => void }> = ({
    user,
    onSave,
}) => {
    const [users, setUsers] = useRecoilState(userState);
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const handleSave = () => {
        if (user) {
            setUsers((oldUsers) =>
                oldUsers.map((u) =>
                    u.id === user.id ? { ...u, name, email } : u
                )
            );
        } else {
            setUsers((oldUsers) => [
                ...oldUsers,
                { id: Date.now(), name, email },
            ]);
        }
        onSave();
    };

    return (
        <Box className="user-form">
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSave}>
                {user ? "Update" : "Add"} User
            </Button>
        </Box>
    );
};

export default UserForm;
