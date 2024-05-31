import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState, User } from "../state";
import { ListItem, ListItemText, IconButton, Box, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UserForm from "./UserForm";
import "./UserItem.scss";

const UserItem: React.FC<{ user: User }> = ({ user }) => {
    const [users, setUsers] = useRecoilState(userState);
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        setUsers((oldUsers) => oldUsers.filter((u) => u.id !== user.id));
    };

    return (
        <>
            <ListItem className="user-item">
                <ListItemText primary={user.name} secondary={user.email} />
                <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => setIsEditing(true)}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={handleDelete}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItem>
            <Modal open={isEditing} onClose={() => setIsEditing(false)}>
                <Box className="modal">
                    <UserForm user={user} onSave={() => setIsEditing(false)} />
                </Box>
            </Modal>
        </>
    );
};

export default UserItem;
