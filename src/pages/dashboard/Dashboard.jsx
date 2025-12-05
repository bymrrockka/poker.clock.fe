import {Component} from "react";
import styles from "./Dashboard.module.css";
import {GameList} from "../../components/games/GameList.jsx";

const activeGames = [
    {
        status: "active",
        type: "Tournament",
        buyin: 30,
        players: 3,
        startDateTime: "2025-10-31 18:14:02"
    }, {
        status: "active",
        type: "BountyTournament",
        buyin: 50,
        players: 17,
        startDateTime: "2023-10-21 12:14:02"
    }, {
        status: "active",
        type: "Cash",
        buyin: 10,
        players: 102,
        startDateTime: "2015-02-23 08:10:52"
    },
]

const finishedGames = [
    {
        status: "Finished",
        type: "Tournament",
        buyin: 30,
        players: 3,
        startDateTime: "2025-10-31 18:14:02",
        finishedDateTime: "2025-10-31 21:34:02",
        unpaid: true,
    }, {
        status: "Finished",
        type: "BountyTournament",
        buyin: 50,
        players: 17,
        startDateTime: "2023-10-21 12:14:02",
        finishedDateTime: "2023-11-01 02:22:22",
        unpaid: true,
    }, {
        status: "Finished",
        type: "Cash",
        buyin: 10,
        players: 102,
        startDateTime: "2015-02-23 08:10:52",
        finishedDateTime: "2015-02-24 04:31:00",
    },
]

export class Dashboard extends Component {
    render() {
        return (
            <div style={styles}>
                <GameList header="Active games" type="active" games={activeGames}/>
                <GameList header="Finished games" type="finished" games={finishedGames}/>
            </div>
        )
    }
}