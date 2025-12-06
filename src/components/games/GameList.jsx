import {List, ListSubheader} from "@mui/material";
import {GameElement} from "./GameElement.jsx";

function countGames(games, type) {
    if (type === "active") {
        return games.length;
    }
    if (type === "finished") {
        return games.filter(game => game.unpaid).length;
    }
}

export const GameList = ({type, header, games}) => {
    return (
        <List
            align="left"
            sx={{width: '100%', maxWidth: 360, border: 1, borderRadius: 4, borderColor: "lightgray"}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="h2" id="active-games" >
                    {header} {countGames(games, type)}
                </ListSubheader>
            } activeCounter={1}>
            {games.map((game) => (
                <GameElement {...game} />
            ))}
        </List>
    )
}