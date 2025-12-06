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
            <Typography sx={{paddingY: 1, paddingX: 2.5, border: 1, borderRadius: 7, borderColor: "lightgray"}}>
                Status: {viewStatus(status)}
                <Divider sx={{marginY: 1}}/>
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