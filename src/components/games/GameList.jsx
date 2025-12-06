import {Collapse, List, ListItemButton, ListItemText} from "@mui/material";
import {GameElement} from "./GameElement.jsx"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from "react";

function countGames(games, type) {
    if (type === "active") {
        return games.length;
    }
    if (type === "finished") {
        return games.filter(game => game.unpaid).length;
    }
}

export const GameList = ({type, header, games, open = false}) => {
    const [isOpen, setOpen] = React.useState(open);

    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText>{header} ({countGames(games, type)})</ListItemText>
                {isOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {games.map((game) => (
                        <GameElement {...game} />
                    ))}
                </List>
            </Collapse>
        </>
    )
}