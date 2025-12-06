import {ListItemButton, Typography} from "@mui/material";
import {DateTime} from "luxon";

export const GameElement = ({type, buyin, players, startDateTime,}) => {
    return (
        <ListItemButton divider sx={{paddingLeft: 3}}>
            <Typography>
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