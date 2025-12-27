import {ListItemButton, Typography} from "@mui/material";
import {DateTime} from "luxon";
import {useNavigate} from "react-router";

export const GameElement = ({id, type, buyin, players, startDateTime,}) => {
    const navigate = useNavigate()
    function handleClick() {
        navigate(`/game/${id}`)
    }

    return (
        <ListItemButton divider sx={{paddingLeft: 3}} onClick={handleClick}>
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