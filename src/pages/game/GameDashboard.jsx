import {Collapse, List, ListItemButton, ListItemText, ListSubheader, Paper, Typography} from "@mui/material";
import {DateTime} from "luxon";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const game = {
    status: "active",
    type: "Tournament",
    buyin: 30,
    players: 3,
    startDateTime: "2025-10-31 18:14:02"
}

export const GameDashboard = () => {
    const [isOpen, setOpen] = React.useState(open);

    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <Paper>
            <Typography>
                Status: {game.status}
                <br/>
                Type: {game.type}
                <br/>
                Buy in: {game.buyin}
                <br/>
                Players : {game.players}
                <br/>
                Started at: {DateTime.fromSQL(game.startDateTime).toFormat("dd-mm-yy hh:mm a")}
                <br/>
            </Typography>
            <br/>
            <ListSubheader>
                <ListItemButton onClick={handleClick}>
                    <ListItemText> Players </ListItemText>
                    {isOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
            </ListSubheader>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {[].map((player, index) => (
                        <ListItemButton key={index} divider sx={{paddingLeft: 3}}>
                            <Typography>
                                Nickname: {player.nickname}
                                <br/>
                                buy ins: {player.buyinSize}
                            </Typography>
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </Paper>
    )
}