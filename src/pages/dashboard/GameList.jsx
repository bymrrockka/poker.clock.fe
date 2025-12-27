import {Collapse, List, ListItemButton, ListItemText, ListSubheader, Paper} from "@mui/material";
import {GameElement} from "./GameElement.jsx"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, {useState} from "react";

function countGames(games, type) {
    if (type === "active") {
        return games.length;
    }
    if (type === "finished") {
        return games.filter(game => game.unpaid).length;
    }
}

export const GameList = ({type, header, games, open = false}) => {
    const [isOpen, setOpen] = useState(open);

    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <Paper>
            <ListSubheader sx={{backgroundImage: 'none'}}>
                <ListItemButton onClick={handleClick}>
                    <ListItemText>{header} ({countGames(games, type)})</ListItemText>
                    {isOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
            </ListSubheader>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {games.map((game, index) => (
                        <GameElement key={index} {...game} />
                    ))}
                </List>
            </Collapse>
        </Paper>
    )
}