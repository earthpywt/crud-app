import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import UserItem from "./UserItem";
import { List } from "@mui/material";
import "./UserList.scss";

const UserList: React.FC = () => {
    const users = useRecoilValue(userState);

    return (
        <List className="user-list">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </List>
    );
};

export default UserList;
