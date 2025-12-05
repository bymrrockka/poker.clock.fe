import {Divider, ListItemButton, Typography} from "@mui/material";
import {DateTime} from "luxon";

function viewStatus(status) {
    switch (status) {
        case "active":
            return "Active"
        default:
            return "Finished";
    }
}

export const GameElement = ({status, type, buyin, players, startDateTime,}) => {
    return (
        <ListItemButton>
            <Typography>
                Status: {viewStatus(status)}
                <Divider/>
                Type: {type}
                <br/>
                Buy in: {buyin}
                <br/>
                Players: {players}
                <br/>
                Started: {DateTime.fromSQL(startDateTime).toFormat("dd-mm-yy hh:mm a")}
            </Typography>
        </ListItemButton>
    )
}