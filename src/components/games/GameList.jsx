import {Collapse, List, ListSubheader} from "@mui/material";
import {GameElement} from "./GameElement.jsx";
import React from "react";

function countGames(games, type) {
    if (type === "active") {
        return games.length;
    }
    if (type === "finished") {
        return games.filter(game => game.unpaid).length;
    }
}

export const GameList = ({type, header, games}) => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List
                align="left"
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    border: 1,
                    borderRadius: 4,
                    borderColor: "lightgray",
                    // bgcolor: "background.paper"
                }}
                // component="div"
                disablePadding
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="h2" id="active-games">
                        {header} {countGames(games, type)}
                    </ListSubheader>
                }>
                {games.map((game) => (
                    <GameElement {...game} />
                ))}
            </List>
        </Collapse>
    )
}